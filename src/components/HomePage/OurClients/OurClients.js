import React from 'react'
import Slider from 'react-slick'
import { graphql, useStaticQuery } from 'gatsby'
import CustomTitleComponent from "../../common/CustomTitleComponent/CustomTitleComponent";
import ClientSlide from './ClientSlide';
import './OurClients.css'


const OurClients = ({ load }) => {

    const reviews = useStaticQuery(graphql`
    query {
      allNodeReview(sort: {field_node_weight: ASC}) {
        edges {
          node {
            id
            title
            field_company
            body {
              value
            }
          }
        }
      }
    }
    `).allNodeReview.edges

    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 2,
        lazyLoad: true,
        customPaging: (i) => (
            <div className="custom-dot"></div>
        ),
        dotsClass: "slick-dots custom-dots",
        responsive: [
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          }
      ]

    }

    return (
        <div id='OurClients' className={'ourClients container mx-auto flex flex-col justify-center items-center mb-14 sm:mb-28 xl:mb-40 px-10'}>
            <CustomTitleComponent name='Our Clients. Testimonials' />
            {load &&
                <div className={'w-full'}>
                    <Slider {...settings}>
                        {reviews.map((r) =>
                            <ClientSlide key={r.node.id} body={r.node.body.value} name={r.node.title}
                                location={r.node.field_company} />
                        )}
                    </Slider>
                </div>
            }
        </div>
    )
}

export default OurClients
