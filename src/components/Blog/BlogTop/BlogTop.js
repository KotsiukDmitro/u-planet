
import React, { useMemo } from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { apaStyleBlogTitle } from '../../../helpers/apaStyleBlogTitle'
import CustomButton from '../../common/CustomButton/CustomButton'


const BlogTop = ({ post, currentPage = 1, isBlogPage = false }) => {
    const {
        title,
        path: { alias: path },
        body: { value: body },
        created,
        changed,
        relationships: {
            field_author: {
                name,
                field_position: position,
                relationships: { field_photo: { localFile: photo } }
            },
            field_image: { localFile }
        }
    } = post

    const image = getImage(localFile)
    const photoAuthor = getImage(photo)
    const time = useMemo(() => new Date(created).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }), [created])
    const timeChanged = useMemo(() => new Date(changed).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }), [changed])
    const cutBody = useMemo(() => body.replace(/(<([^>]+)>)/ig, '').substring(0, 156) + '...', [body])
    const TitleTag = isBlogPage ? 'div' : 'h1'


    return (
        <>
            {isBlogPage &&
                <h1 className={'text-[#3B3E49] text-3xl sm:text-[56px] pt-28 lg:pt-40  pb-10 sm:pb-0 px-5 sm:px-0'}>
                    Blog{currentPage > 1 && ` | Page ${currentPage}`}
                </h1>
            }
            <div className={'flex flex-col lg:flex-row justify-between items-start sm:pt-5 md:pt-12 lg:pt-14 2xl:pt-[70px]'}>
                <div className={'w-full lg:w-[56%]'}>
                    <GatsbyImage className={'w-full rounded-xl mb-11 lg:mb-0'} loading={'lazy'} alt={title} image={image} objectFit='contain' />
                </div>
                <div className={' mx-auto px-4 sm:px-0 md:px-4 lg:px-0 lg:pl-9 w-full lg:w-[44.3%]'}>
                    <TitleTag className={'font-extrabold leading-none text-[#3B3E49] text-3xl sm:text-[50px] xl:text-[40px] 2xl:text-[56px] mb-3 md:mb-4 xl:mb-5 2xl:mb-6'}>{apaStyleBlogTitle(title)}</TitleTag>

                    {isBlogPage
                        ? <>
                            <p className={'flex justify-between lg:w-[90%] max-w-[410px] leading-normal text-[#929292] text-xs xl:text-sm 2xl:text-base mb-2.5 md:mb-5 xl:mb-10 2xl:mb-11'}>By &nbsp; <span className='mr-auto text-black'>{name}</span> &nbsp; {time}</p>
                            <p className={'mb-6 md:mb-5 lg:mb-7 xl:mb-10 2xl:mb-11'} dangerouslySetInnerHTML={{ __html: cutBody }} />

                            <Link to={path} className={'w-max font-bold shadow-none leading-normal flex'}>
                                <CustomButton>READ ARTICLE</CustomButton>
                            </Link>
                        </>
                        : <div>
                            <div className='flex items-center'>
                                <GatsbyImage loading={'lazy'} alt={'Author'} image={photoAuthor} imgClassName={'rounded-full'} />
                                <div className='ml-5 mt-6 leading-normal'>
                                    <span className={'text-[#929292] text-xs xl:text-sm 2xl:text-base mb-2.5 md:mb-5 xl:mb-10 2xl:mb-11'}>By &nbsp; <span className='text-black'>{name}</span><span className='mr-auto text-black'>,&nbsp; {position}</span>
                                    </span>
                                    <div className={'mt-2 text-[#929292] text-xs xl:text-sm'}>Published:&nbsp; {time}</div>
                                    {time !== timeChanged &&
                                        <div className={'text-[#929292] text-xs xl:text-sm'}>Updated:&nbsp; {timeChanged}</div>
                                    }
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default BlogTop
