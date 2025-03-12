import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { graphql, Link } from 'gatsby'
import { Layout } from '../../components/Layout'
import { BlogTop } from '../../components/Blog'
import { route } from '../../routes'
import arrowBack from '../../assets/images/arrows/arrow-back.svg'
import arrow from '../../assets/images/arrows/prev.svg'
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
      <div className={'mx-auto sm:pt-7 px-0 sm:px-4 lg:px-3 mt-20 mb-10 lg:mb-0'} style={{ maxWidth: '1450px' }}>
        <BlogTop post={data.nodeArticle} />
      </div>

      <Link className={'hidden sm:inline-flex text-greenCustom items-center mx-auto w-full sm:pl-10 lg:pl-0 mt-1 lg:mt-9 mb-5 lg:mb-14 max-w-[875px] lg:max-w-[800px]'} to={route('blog')}>
        <img src={arrowBack} alt='arrow-back' className={'mr-2'} />
        <span>Back to Blog</span>
      </Link>

      <div className={'mx-auto px-4 sm:px-12 lg:px-3 flex justify-between items-start pb-14 sm:pb-8 max-w-[900px] lg:max-w-[850px]'}>
        <div className={'w-full'}>
          <div className={'mx-auto max-w-[850px] lg:max-w-[750px] single-blog-body'}>
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
          <div className={'hidden sm:flex items-center justify-between mt-16 text-[#828282] text-base pagination-btns'}>
            <Link to={previousPost} className={'flex items-center hover:text-greenCustom'}>
              <img src={arrow} alt="previous" width={25} className={'mr-4 opacity-70 pagination-btn-arrow'} />
              PREVIOUS
            </Link>
            <Link to={nextPost} className={'flex items-center hover:text-greenCustom'}>
              NEXT
              <img src={arrow} alt="previous" width={25} className={'ml-4 opacity-70 rotate-180 pagination-btn-arrow'} />
            </Link>
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

