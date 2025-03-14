import React from 'react'
import { graphql } from 'gatsby'
import { Layout } from '../../components/Layout'
import { PostsList } from '../../components/Blog'

const BlogPage = ({ data }) => {

  const { currentPage, pageCount: numPages, hasNextPage, hasPreviousPage } = data.allNodeArticle.pageInfo

  return (
    <Layout isTransparent >
      <div className={'mx-auto px-0 sm:px-3 max-w-[1395px]'} >
        <PostsList posts={data.allNodeArticle.nodes} currentPage={currentPage} totalPages={numPages}
          hasNextPage={hasNextPage} hasPreviousPage={hasPreviousPage} />
      </div>
    </Layout>
  )
}

export const query = graphql`
    query blogListQuery($skip: Int!, $limit: Int!) {
      nodePage(title: {eq: "Blog page"}) {
        id
        field_metatags {
          description
          keywords
          title
          og_title
          og_description
        }
      }
      allNodeArticle(sort: {created: DESC}, filter: {status: {eq: true}}, limit: $limit, skip: $skip) {
        nodes {
          id
          title
          path {
            alias
          }
          body {
            value
          }
          created(formatString: "MMMM D, yyyy")
          relationships {
            field_image {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            field_author {
              name
              field_position
              relationships {
                field_photo {
                  localFile {
                    childImageSharp {
                      gatsbyImageData(width:60)
                    }
                  }
                }
              }
            }
          }
        }
        pageInfo {
          currentPage
          pageCount
          hasNextPage
          hasPreviousPage
        }
      }
    }
`
export default BlogPage
