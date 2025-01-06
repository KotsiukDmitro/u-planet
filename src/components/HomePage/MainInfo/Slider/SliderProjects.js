import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import SlideMobileApp from './SlideMobileApp'
import SlideSolutions from './SlideSolutions'
import SlideWeb from './SlideWeb'
import './Slider.css'

const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    speed: 1000,
    dots: true,
    customPaging: (i) => (
        <div className="custom-dot"></div>
      ),
      dotsClass: "slick-dots custom-dots"
}

const SliderProjects = () => {

    return (     
            <Slider className={'w-full cursor-move'} {...settings}>
                <SlideMobileApp />
                <SlideSolutions />
                <SlideWeb />
            </Slider>
    )
}

export default SliderProjects