import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'


const ClientSlide = ({ body, name, location }) => {
    return (
        <div className={'mt-10 px-6 sm:px-10'}>
            <div className={'flex'}>
                <div>
                    <StaticImage src={'../../../assets/images/review.png'} alt='review' className={'w-14'} />
                </div>
                <div className='pl-5 pt-5'>
                    <div dangerouslySetInnerHTML={{ __html: body }} className='mb-5' />
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