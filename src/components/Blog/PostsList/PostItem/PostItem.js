import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import { apaStyleBlogTitle } from '../../../../helpers/apaStyleBlogTitle'
import * as s from './post-item.module.css'

const PostItem = ({ post }) => {
    const {
        title,
        path: {
            alias: path
        },
        created: time,
        relationships: {
            field_image: { localFile }
        }
    } = post

    const image = getImage(localFile)

    return (
        <div className={['flex mb-10 md:mb-8', s.articleWrapper].join(' ')}>
            <Link to={path} className={'h-full w-full cursor-pointer'}>
                <GatsbyImage className={'w-full rounded-xl'} loading={'lazy'} alt={title} image={image} objectFit='contain' />
                <p className={['mt-5 2xl:mb-5 2xl:text-[22px]', s.title].join(' ')}>{apaStyleBlogTitle(title)}</p>
                <p className={['leading-normal font-semibold text-[#929292] 2xl:text-base', s.date].join(' ')}>{time}</p>
            </Link>
        </div>
    )
}

export default PostItem
