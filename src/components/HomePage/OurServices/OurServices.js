import React from "react";
import { useStaticQuery, graphql } from "gatsby";
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

   
    

    const titleWeb = 'Web Design & Development'
    const subTitleWeb =<>Websites and web applications <br /> of any complexity</>
    const contentWeb = 'Full range of web development services: websites and web applications for all types of business, corporate web portals, social networking apps, landing pages. Creating comprehensive eCommerce solutions on different platforms, custom Shopify stores development, design and implementation.'
    const imageWeb = images[3]
    

    return (
        <div className={'max-w-[1170px]'}>
            <CustomTitleComponent name='Our Services' />
            <p className={'text-center text-[26px] max-w-[900px] mt-5 mb-20'}>Web Application Development, Mobile Application Development, Software Quality Assurance, Consultancy services.</p>
            <div>
                <Service title={titleWeb} subTitle={subTitleWeb} content={contentWeb} onClick={()=> {}} image={imageWeb} />
            </div>
        </div>

    )
}

export default OurServices