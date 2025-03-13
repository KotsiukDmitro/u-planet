import React, { useMemo } from 'react'
import Slider from 'react-slick'
import { graphql, useStaticQuery } from 'gatsby'
import CustomTitleComponent from "../../common/CustomTitleComponent/CustomTitleComponent";
import ClientSlide from './ClientSlide';
import './OurClients.css'


const OurClients = ({ load }) => {

  const data = useStaticQuery(graphql`
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
    `)
  const reviews = useMemo(() => data.allNodeReview.edges, [data])

  const settings = useMemo(() => ({
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 2,
    lazyLoad: true,
    customPaging: () => <div className="custom-dot" />,
    dotsClass: 'slick-dots custom-dots',
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1 }
      }
    ]
  }), [])

  return (
    <div id='OurClients' className={'ourClients container mx-auto flex flex-col justify-center items-center mb-14 sm:mb-28 xl:mb-40 px-5'}>
      <CustomTitleComponent name='Our Clients. Testimonials' />
      {load &&
        <Slider {...settings}>
          {reviews.map(({ node }) => (
            <ClientSlide key={node.id} body={node.body.value} name={node.title} location={node.field_company} />
          ))}
        </Slider>
      }
    </div>
  )
}

export default OurClients
