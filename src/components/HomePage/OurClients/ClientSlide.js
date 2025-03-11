import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'


const ClientSlide = ({ body, name, location }) => {
    return (
        <div className={'mt-5 sm:mt-10 px-2 sm:px-6'}>
            <div className={'flex'}>
                <div>
                    <StaticImage src={'../../../assets/images/review.png'} alt='review' className={'w-8 sm:w-10 lg:w-14'} />
                </div>
                <div className={'pl-1.5 pb-5 md:pl-5 pt-3 md:pt-5'}>
                    <div dangerouslySetInnerHTML={{ __html: body }} className={'mb-5 text-[10px] sm:text-[16px]'} />
                    <div className={'flex items-center gap-2'} >
                        <span className={'text-[#24d5d1]'}>{name}</span>
                        <span>{location}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientSlide