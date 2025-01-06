import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import CustomTitleComponent from "../../common/CustomTitleComponent/CustomTitleComponent";
import Service from "./Service/Service";


const OurServices = ()=> {

    const ImagesServices = useStaticQuery(graphql`
        query {
          allFile(filter: {relativeDirectory: {eq: "services/images"}}) {
            nodes {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
        `)
    const images = ImagesServices.allFile.nodes.map(image => getImage(image))

   
    const services = [
      {
        title: 'Web Design & Development',
        subTitle: <>Websites and web applications <br /> of any complexity</>,
        content: <>Full range of web development services: websites and web applications for all types of business, corporate web portals, social networking apps, landing pages. Creating comprehensive <Link to="#" className={'text-[#24d5d1]'}>eCommerce solutions</Link> on different platforms, custom <Link to="#" className={'text-[#24d5d1]'}>Shopify</Link> stores development, design and implementation</>,
        image: images[3],
        btnName: 'start project'
      },
      {
        title: 'Mobile apps development',
        subTitle: 'iOS/Android',
        content: 'Native mobile apps development. Messengers, Video, Social, GPS, etc.',
        image: images[0],
        btnName: 'start project'
      },
      {
        title: 'Comprehensive enterprise solutions',
        content: 'Full range of software development services for manufacturing, enterprises, banking, small and medium businesses, and consultancy services.',
        image: images[1],
        btnName: 'start project'
      },
      {
        title: 'Development & Software testing',
        subTitle: 'Quality Assurance',
        content: 'The testing process is a critical part of the software development cycle in our company. For each project, depending on its complexity and requirements, an individual testing plan is created. This plan allows us to release a product of the highest quality, while saving critical development time and resources.',
        image: images[2],
        btnName: 'learn more'
      },

    ]
    

    return (
        <div className={'max-w-[1170px] mb-20 px-10'} id="OurServices">
            <CustomTitleComponent name='Our Services' />
            <p className={'text-center text-[26px] max-w-[900px] mt-5 mb-20'}>Web Application Development, Mobile Application Development, Software Quality Assurance, Consultancy services.</p>
            <div className=" flex flex-col gap-10">
                <Service services={services} onClick={()=> {}} />
            </div>
        </div>

    )
}

export default OurServices