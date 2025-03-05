import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { graphql, Link } from 'gatsby'
import { Layout } from '../../components/Layout'
import { BlogTop } from '../../components/Blog'
import './single-blog-post.css'


const SingleBlogPost = ({ data, pageContext }) => {
    const {
        title,
        body: { value: bodyValue },
        body_images
    } = data.nodeArticle

    const splittedBody = bodyValue.split(/<img [^>]*src="[^"]*"[^>]*>/gm)

    const { nextPost, previousPost } = pageContext

    return (
        <Layout isTransparent={true}>
            <div className={'mx-auto sm:pt-7 px-0 sm:px-4 lg:px-3 mb-10 sm:mb-20 mt-20'} style={{ maxWidth: '1450px' }}>
                <BlogTop post={data.nodeArticle} />
            </div>

            <div className={'mx-auto px-4 sm:px-12 lg:px-3 flex justify-between items-start pb-14 sm:pb-8 single-blog-body-wrapper'}>
                <div className={'w-full'}>
                    <div className={'mx-auto single-blog-body'}>
                        {splittedBody.map((code, idx) => {
                            const img = getImage(body_images[idx])

                            return (
                                <React.Fragment key={idx}>
                                    <div dangerouslySetInnerHTML={{ __html: code }} />
                                    {img && <GatsbyImage objectFit={'contain'} loading={'lazy'} imgClassName={'blog-body-image'} alt={title} image={img} />}
                                </React.Fragment>
                            )
                        })}
                    </div>
                    <div className={'hidden sm:flex pagination-btns'}>
                        <Link to={previousPost} className={'font-open-sans'}>PREVIOUS </Link>
                        <Link to={nextPost} className={'font-open-sans'}>NEXT</Link>
                    </div>
                </div>
            </div>
        </Layout>
    )
}



export default SingleBlogPost

export const query = graphql`
query SingleBlogPost($id: String) {
    nodeArticle(id: {eq: $id}) {
      id
      field_metatags {
        description
        keywords
        og_description
        og_title
        title
      }
      path {
        alias
      }
      body {
        value
      }
      body_images {
        childImageSharp {
          gatsbyImageData
        }
      }
      title
      created
      changed
      relationships {
        field_image {
          localFile {
            childImageSharp {
              gatsbyImageData(quality: 100)
            }
            publicURL
          }
        }
        field_microdata {
          id
          field_microdata_title
          field_microdata_description {
            value
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
  }
`

