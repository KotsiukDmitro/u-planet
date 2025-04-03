
const path = require(`path`)
const fs = require('fs')
const { createRemoteFileNode } = require("gatsby-source-filesystem")

exports.createSchemaCustomization = ({ actions }) => {
  actions.createTypes(`
    type node__article implements Node {
      body_images: [File] @link(from: "fields.localFile")
    }
  `)
}

exports.onCreateNode = async ({ node, actions, createNodeId, getCache }) => {
  if (node.internal.type !== "node__article") return

  const { createNode, createNodeField } = actions
  const images = (node.body?.value.match(/<img [^>]*src="([^"]*)"[^>]*>/gm) || [])
    .map(img => img.replace(/.*src="([^"]*)".*/, `$1`))
    .map(url => new URL(url, process.env.GATSBY_API_BASE_URL).href)

  const fileIdList = await Promise.all(
    images.map(async image => {
      try {
        const fileNode = await createRemoteFileNode({
          url: image,
          parentNodeId: node.id,
          createNode,
          createNodeId,
          getCache,
        })
        return fileNode?.id
      } catch (error) {
        return null
      }
    })
  )

  createNodeField({ node, name: "localFile", value: fileIdList.filter(Boolean) })
}

const validateMetaTags = (nodes, nodeType, reporter) => {
  nodes.forEach(({ title, field_metatags }) => {
    if (!field_metatags || !field_metatags.title || !field_metatags.description || !field_metatags.og_title || !field_metatags.og_description) {
      reporter.panicOnBuild(`❌ SEO параметры отсутствуют или неполные для ${nodeType}: ${title}`)
    }
  })
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const queries = await graphql(`
    {
      allNodePage(filter: { status: { eq: true } }) { nodes { title field_metatags { title description og_title og_description } } }
      allNodeOurWork(filter: { status: { eq: true } }) { nodes { title field_metatags { title description og_title og_description } } }
      allNodeArticle(filter: { status: { eq: true } }) { nodes { title field_metatags { title description og_title og_description } } }
    }
  `)

  reporter.info("Начало валидации")
  validateMetaTags(queries.data.allNodePage.nodes, "страницы", reporter)
  validateMetaTags(queries.data.allNodeOurWork.nodes, "проекта", reporter)
  validateMetaTags(queries.data.allNodeArticle.nodes, "статьи блога", reporter)
  reporter.info("Валидация прошла успешно")

  const articleTemplate = path.resolve("src/templates/SingleBlogPost/single-blog-post.js")
  const { edges: articles } = (await graphql(`
    query {
      allNodeArticle(sort: { created: DESC }, filter: { status: { eq: true } }) {
        edges {
          node { id path { alias } }
          previous { path { alias } }
          next { path { alias } }
        }
      }
    }
  `)).data.allNodeArticle

  articles.forEach(({ node, previous, next }, i) => {
    createPage({
      path: node.path.alias,
      component: articleTemplate,
      context: {
        id: node.id,
        nextPost: next?.path.alias || articles[0].node.path.alias,
        previousPost: previous?.path.alias || articles[articles.length - 1].node.path.alias,
      },
    })
  })

  const postsPerPage = 10
  Array.from({ length: Math.ceil(articles.length / postsPerPage) }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/page/${i + 1}`,
      component: path.resolve("src/templates/Blog/blog-page.js"),
      context: { limit: postsPerPage, skip: i * postsPerPage },
    })
  })

  const projects = (await graphql(`
    query {
      allNodeOurWork(filter: { status: { eq: true } }) {
        edges {
          node { id path { alias } field_metatags { robots } }
          previous { path { alias } }
          next { path { alias } }
        }
      }
    }
  `)).data.allNodeOurWork.edges

  const noindexRegex = /noindex|nofollow|noarchive|nosnippet|noimageindex|notranslate/ig
  projects.forEach(({ node, previous, next }) => {
    createPage({
      path: node.path.alias,
      component: path.resolve("src/templates/SingleProject/single-project.js"),
      context: {
        id: node.id,
        noindex: noindexRegex.test(node.field_metatags.robots),
        prevProject: previous?.path.alias || null,
        nextProject: next?.path.alias || null,
      },
    })
  })
}

exports.onPostBuild = () => {
  const sitemapPath = "./public/sitemap-0.xml"
  if (fs.existsSync(sitemapPath)) {
    fs.renameSync(sitemapPath, "./public/sitemap.xml")
  }
}

exports.onCreateWebpackConfig = ({ stage, actions, getConfig }) => {
  if (stage === "build-javascript") {
    actions.setWebpackConfig({ devtool: false })
  }

  if (["build-javascript", "develop"].includes(stage)) {
    const config = getConfig()
    const miniCssExtractPlugin = config.plugins.find(plugin => plugin.constructor.name === "MiniCssExtractPlugin")
    if (miniCssExtractPlugin) miniCssExtractPlugin.options.ignoreOrder = true
    actions.replaceWebpackConfig(config)
  }
}
