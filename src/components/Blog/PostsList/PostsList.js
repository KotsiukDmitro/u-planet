import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { route } from '../../../routes'
import PostItem from './PostItem/PostItem'
import BlogTop from '../BlogTop/BlogTop'
import './post-list.css'

const PostsList = ({ posts, currentPage, totalPages, hasPreviousPage, hasNextPage }) => {
    const prevPage = currentPage > 2 ? `/blog/page/${currentPage - 1}` : '/blog'
    const nextPage = hasNextPage ? `/blog/page/${currentPage + 1}` : `/blog/page/${currentPage}`

    const renderPagination = () => {
        return Array.from({ length: totalPages }, (_, idx) => {
            const page = idx + 1

            if (page <= 2 || page >= totalPages - 1 || (page >= currentPage - 1 && page <= currentPage + 1)) {
                return (
                    <Link
                        key={page}
                        to={route('blog') + (page > 1 ? `/page/${page}` : '')}
                        className="pagination-link"
                        activeClassName="active"
                    >
                        {page}
                    </Link>
                )
            }
            if ((page === 3 && currentPage > 4) || (page === totalPages - 2 && currentPage < totalPages - 3)) {
                return <span key={page} className="text-slate-400 sm:text-2xl pt-1 sm:pt-1.5 tracking-widest">...</span>
            }
            return null
        })
    }

    return (
        <>
            {!!posts.length &&
                <BlogTop post={posts[0]} currentPage={currentPage} isBlogPage />
            }
            <div className="flex justify-start items-start flex-wrap post-list-wrapper">
                {posts.slice(1).map(post => (
                    <PostItem key={post.id} post={post} />
                ))}
            </div>

            <div className="pt-0 pb-10 sm:pt-10 sm:pb-16 lg:pt-16 lg:pb-28 sm:flex items-baseline justify-center">
                <div className="flex mb-3">
                    <Link className={['pagination-link pagination-arrow', !hasPreviousPage ? 'disabled' : ''].join(' ')} to={prevPage}>
                        <StaticImage src="../../../assets/images/icons/pagination-svg.svg" alt="arrow" />
                    </Link>

                    {renderPagination()}

                    <Link className={['pagination-link pagination-arrow', !hasNextPage ? 'disabled' : ''].join(' ')} to={nextPage}>
                        <StaticImage className="rotate-180" src="../../../assets/images/icons/pagination-svg.svg" alt="arrow" />
                    </Link>
                </div>
                <span className='text-[#929292] text-xs sm:text-lg pl-5 sm:pl-7'>Page {currentPage} of {totalPages}</span>
            </div>
        </>
    )
}

export default PostsList
