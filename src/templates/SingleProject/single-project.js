import React, { useEffect, useRef } from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Slider from 'react-slick'
import { apStyleTitleCase } from 'ap-style-title-case'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { Layout } from '../../components/Layout'
import { checkInfiniteSliderMode } from '../../helpers/checkInfiniteSliderMode'
import { ProjectLink, ProjectVideo } from '../../components/Templates'
import { route } from '../../routes'
import CustomTitleComponent from '../../components/common/CustomTitleComponent/CustomTitleComponent'
import arrowBack from '../../assets/images/arrows/arrow-back.svg'
import arrowPrev from '../../assets/images/arrows/prev.svg'
import arrowNext from '../../assets/images/arrows/next.svg'
import * as style from './single-project.module.css'
import './single-project-slider.css'



const SingleProject = ({ data, pageContext }) => {

    const { prevProject, nextProject } = pageContext

    const singleProjectSlider = useRef(null)
    const {
        title,
        relationships,
        field_goal: goal,
        field_solution: solution,
        field_duration: duration,
        field_team: team,
        field_site_original_link: viewLink
    } = data.nodeOurWork
    const slider_images = relationships.field_slider_images
    const environments = relationships.field_environment.map(env => env.name)
    const projectVideoUrl = relationships.field_project_video?.localFile.publicURL
    const coverVideoUrl = relationships.field_cover_video?.localFile.publicURL

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        pauseOnHover: true,
        draggable: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: 'single-project-slider-wrapper',
        dotsClass: 'slick-dots single-project-dots',
        responsive: [
            {
                breakpoint: 5060,
                settings: {
                    slidesToShow: 3,
                    infinite: checkInfiniteSliderMode(3, slider_images, coverVideoUrl)
                }
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: checkInfiniteSliderMode(2, slider_images, coverVideoUrl)
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: checkInfiniteSliderMode(2, slider_images, coverVideoUrl),
                }
            },
            {
                breakpoint: 675,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    }

    // useEffect(() => {
    //     const startAutoplay = setTimeout(() => {
    //         singleProjectSlider.current.slickPlay()
    //     }, 3000)

    //     return () => {
    //         clearTimeout(startAutoplay)
    //     }
    // }, [])

    return (
        <Layout isTransparent={true}>
            <div className={['mx-auto px-0 md:px-5', style.singleProjectPage].join(' ')}>
                <AnchorLink className={'text-[#24d5d1] items-center inline-flex mt-5 ml-5 md:ml-0'} to={route('home.portfolio')}>
                    <img src={arrowBack} alt='arrow-back' className={'mr-2'} />
                    <span>Back to Portfolio</span>
                </AnchorLink>

                <div className={'flex mt-6 gap-5 text-[14px] text-[#9f9f9f] justify-center'}>
                    {prevProject && (
                        <Link to={prevProject} className={'flex'}>
                            <img src={arrowPrev} alt='arrow-prev' className={'mr-2'} />
                            <span className=''>Previous Project</span>
                        </Link>
                    )}
                    {nextProject && (
                        <Link to={nextProject} className={'flex'}>
                            <span>Next Project</span>
                            <img src={arrowNext} alt='arrow-next' className={'ml-2'} />
                        </Link>
                    )}
                </div>

                <div className={'flex flex-col-reverse md:flex-col'}>
                    <div className={'px-4 md:px-0 w-full flex flex-col pt-10 lg:mb-10'}>
                        <CustomTitleComponent name={apStyleTitleCase(title)} />
                        {viewLink && <div className={'mt-5 mb-5 md:mb-0'}>
                            <ProjectLink viewLink={viewLink} />
                        </div>}
                    </div>
                    
                    <div className={'w-full mb-0 md:mb-14'}>
                        <div className={'-mt-2 md:mt-0'}>
                            <Slider {...settings} ref={singleProjectSlider}>
                                {(coverVideoUrl && projectVideoUrl) &&
                                    <ProjectVideo videoUrl={projectVideoUrl} sliderRef={singleProjectSlider}
                                        videoCover={coverVideoUrl} />
                                }
                                {slider_images.map(node => {
                                    const slide = node.localFile
                                    const imgData = getImage(slide)
                                    return (
                                        <GatsbyImage className={'single-project-image'}
                                            loading={'lazy'} objectFit={'contain'}
                                            key={slide.id} alt={apStyleTitleCase(title)}
                                            image={imgData} />
                                    )
                                })}
                            </Slider>
                        </div>
                    </div>
                </div>

                <div className={['px-4 md:px-0', style.singleProjectContent].join(' ')}>
                    <hr className={style.breakLine} />
                    <div className={style.fieldWrap}>
                        <div className={style.fieldTitle}>
                            Goal
                        </div>
                        <div className={['body-text-md', style.fieldContent].join(' ')}
                            dangerouslySetInnerHTML={{ __html: goal.value }} />
                    </div>
                    {solution?.value &&
                        <>
                            <hr className={style.breakLine} />
                            <div className={style.fieldWrap}>
                                <div className={style.fieldTitle}>
                                    Solution
                                </div>
                                <div className={['body-text-md', style.fieldContent].join(' ')} dangerouslySetInnerHTML={{
                                    __html: solution.value
                                }} />
                            </div>
                        </>
                    }
                    <hr className={style.breakLine} />
                    <div className={style.fieldWrap}>
                        <div className={style.fieldTitle}>
                            Technologies
                        </div>
                        <div className={['pt-6 xl:pt-0', style.fieldContent, style.tagsContent].join(' ')}>
                            <p>{environments.join(', ')}</p>
                        </div>
                    </div>
                    <hr className={style.breakLine} />
                    <div className={style.fieldWrap}>
                        <div
                            className={[style.fieldContent, style.footerInfoWrap, 'flex items-start justify-between xl:gap-5 xl:ml-[20%] 2xl:ml-[31%]'].join(' ')}>
                            <div className={'w-full xl:w-[437px] mb-[75px] xl:mb-0'}>
                                <div className={style.footerInfoTitle}>
                                    Team
                                </div>
                                <div className={'body-text-md'} dangerouslySetInnerHTML={{ __html: team.value }} />
                            </div>
                            <div className={'w-full xl:w-[437px]'}>
                                <div className={style.footerInfoTitle}>
                                    Duration
                                </div>
                                <div className={'body-text-md'}
                                    dangerouslySetInnerHTML={{ __html: duration.value }} />
                            </div>
                        </div>
                    </div>
                    <hr className={style.breakLine} />
                </div>
            </div>
        </Layout>
    )
}

export default SingleProject


export const query = graphql`
    query SingleProject($id: String) {
      nodeOurWork(id: {eq: $id}) {
        id
        field_metatags {
          description
          title
          keywords
          og_description
          og_title
        }
        title
        field_site_original_link {
          title
          uri
        }
        field_duration {
          value
        }
        field_goal {
          value
        }
        field_solution {
          value
        }
        field_team {
          value
        }
        path {
            alias
          }
        relationships {
          field_environment {
            name
          }
          field_cover_video {
            localFile {
              publicURL
            }
          }
          field_project_video {
            localFile {
              publicURL
            }
          }
          field_slider_images {
            localFile {
              id
              childImageSharp {
                gatsbyImageData(quality: 100)
              }
            }
          }
          field_overview_image {
            localFile {
              publicURL
            }
          }
        }
      }
    }
`
