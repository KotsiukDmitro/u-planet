import React, {useEffect, useState} from 'react'
import Slider from 'react-slick'
import SliderItem from './SliderItem'
import {NextArrow, PrevArrow} from './CustomArrows'


const settings = {
    infinite: true,
    // autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    slidesToShow: 6,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
    responsive: [
        {
            breakpoint: 2300,
            settings: {
                slidesToShow: 5,
            }
        },
        {
            breakpoint: 1921,
            settings: {
                slidesToShow: 4.8,
            }
        },
        {
            breakpoint: 1536,
            settings: {
                slidesToShow: 4.5,
            }
        },
        {
            breakpoint: 1280,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        },
    ]
}

const ProjectSlider = ({projects, sliderRef}) => {

    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    return (
        <>
            {isMounted &&
                <Slider className={'w-full SliderProjects'} {...settings} ref={sliderRef}>
                    {projects.map(p =>
                        <SliderItem key={p.drupal_id} project={p}/>
                    )}
                </Slider>
            }
        </>
    )
}

export default ProjectSlider
