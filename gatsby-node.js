
const path = require(`path`)
const fs = require('fs')
const { createRemoteFileNode } = require("gatsby-source-filesystem")

exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions

    createTypes(`
    type node__article implements Node {
      body_images: [File] @link(from: "fields.localFile")
    }
  `)
}

exports.onCreateNode = async ({node, actions, createNodeId, getCache}) => {
    const { createNode, createNodeField } = actions

    if (node.internal.type === 'node__article') {
        const {id: nodeId, body: { value: bodyValue }} = node

        const findImgRegEx = /<img [^>]*src="[^"]*"[^>]*>/gm
        const replaceSrcRegEx = /.*src="([^"]*)".*/

        let images = bodyValue
            .match(findImgRegEx) || []

        images = images.map(x => x.replace(replaceSrcRegEx, new URL('$1', process.env.GATSBY_API_BASE_URL)))

        const fileIdList = []

        for (let image of images) {
            const fileNode = await createRemoteFileNode({
                url: image,
                parentNodeId: nodeId,
                createNode,
                createNodeId,
                getCache
            })

            if (fileNode) {
                fileIdList.push(fileNode.id)
            }
        }

        createNodeField({ node, name: "localFile", value: fileIdList })
    }
}


exports.createPages = async ({graphql, actions, reporter}) => {
    const {createPage} = actions

    // Validation
    const allNodes = await graphql(`
      query {
        allNodePage(filter: {status: {eq: true}}) {
          nodes {
            title
            field_metatags {
              title
              description
              og_title
              og_description
            }
          }
        }
        allNodeOurWork(filter: {status: {eq: true}}) {
          nodes {
            title
            field_metatags {
              title
              description
              og_title
              og_description
            }
          }
        }
        allNodeArticle(filter: {status: {eq: true}}) {
          nodes {
            title
            field_metatags {
              title
              description
              og_title
              og_description
            }
          }
        }
      }
    `)
    const metatagsValidation = (nodes, nodeType = 'страницы') => {
        nodes.map(node => {
            if (!node.field_metatags) {
                reporter.panicOnBuild(`❌ Никакие из SEO параметров не заполнены для ${nodeType} с названием ${node.title}`)
            }

            const {title, description, og_title, og_description} = node.field_metatags
            if (!title || !description || !og_title || !og_description) {
                reporter.panicOnBuild(`❌ Некоторые из SEO параметров(${!title ? 'title/' : ''}${!description ? 'description/' : ''}${!og_title ? 'og_title/' : ''}${!og_description ? 'og_description' : ''}) не заполнены для ${nodeType} с названием ${node.title}`)
            }
        })
    }

    reporter.info('Начало валидации')
    metatagsValidation(allNodes.data.allNodePage.nodes)
    metatagsValidation(allNodes.data.allNodeOurWork.nodes, 'проекта')
    metatagsValidation(allNodes.data.allNodeArticle.nodes, 'статьи блога')
    reporter.info('Валидация прошла успешно')

}

exports.onPostBuild = () => {
    if (fs.existsSync('./public/sitemap-0.xml')) {
        fs.renameSync('./public/sitemap-0.xml', './public/sitemap.xml')
    }
}

exports.onCreateWebpackConfig = ({ stage, actions, getConfig }) => {
    if (stage === `build-javascript`) {
        actions.setWebpackConfig({
            devtool: false,

        })      
    }

    if (stage === 'build-javascript' || stage === 'develop') {
      const config = getConfig()
      const miniCssExtractPlugin = config.plugins.find(
          plugin => (plugin.constructor.name === 'MiniCssExtractPlugin')
      )
      if (miniCssExtractPlugin) miniCssExtractPlugin.options.ignoreOrder = true
      actions.replaceWebpackConfig(config)
  }
}
