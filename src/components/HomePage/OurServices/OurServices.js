import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { route } from "../../../routes";
import CustomTitleComponent from "../../common/CustomTitleComponent/CustomTitleComponent";
import Service from "./Service/Service";
import icon_html5 from '../../../assets/images/services/icons/html5.svg'
import icon_css3 from '../../../assets/images/services/icons/css3.svg'
import icon_drupal from '../../../assets/images/services/icons/drupal.svg'
import icon_wordpress from '../../../assets/images/services/icons/wordpress.svg'
import icon_shopify from '../../../assets/images/services/icons/shopify.svg'
import icon_android from '../../../assets/images/services/icons/android.svg'
import icon_apple from '../../../assets/images/services/icons/apple.svg'
import icon_windows from '../../../assets/images/services/icons/windows.svg'
import icon_file from '../../../assets/images/services/icons/file.svg'
import icon_object from '../../../assets/images/services/icons/object.svg'
import icon_cart from '../../../assets/images/services/icons/cart.svg'
import icon_chrome from '../../../assets/images/services/icons/chrome.svg'



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
        btnName: 'start project',
        path: route('home.contact-us'),
        icons: [icon_html5, icon_css3, icon_drupal, icon_wordpress],
        iconLink: {
          src: icon_shopify,
          path: '#'
        }
      },
      {
        title: 'Mobile apps development',
        subTitle: 'iOS/Android',
        content: 'Native mobile apps development. Messengers, Video, Social, GPS, etc.',
        image: images[0],
        btnName: 'start project', 
        path: route('home.contact-us'),
        icons: [icon_android, icon_apple, icon_windows]
      },
      {
        title: 'Comprehensive enterprise solutions',
        content: 'Full range of software development services for manufacturing, enterprises, banking, small and medium businesses, and consultancy services.',
        image: images[1],
        btnName: 'start project', 
        path: route('home.contact-us'),
        icons: [icon_file, icon_object, icon_cart],
      },
      {
        title: 'Development & Software testing',
        subTitle: 'Quality Assurance',
        content: 'The testing process is a critical part of the software development cycle in our company. For each project, depending on its complexity and requirements, an individual testing plan is created. This plan allows us to release a product of the highest quality, while saving critical development time and resources.',
        image: images[2],
        btnName: 'learn more', 
        path: route('qa'),
        icons: [icon_android, icon_apple, icon_chrome],
      },
    ]
    

    return (
        <div className={'container m-auto mb-10 md:mb-20 px-5 md:px-10'} id="OurServices">
            <CustomTitleComponent name='Our Services' />
            <p className={'text-center m-auto text-[16px] md:text-[24px] xl:text-[26px] max-w-[900px] mt-5 mb-20'}>Web Application Development, Mobile Application Development, Software Quality Assurance, Consultancy services.</p>
            <div className=" flex flex-col gap-10">
                <Service services={services} />
            </div>
        </div>

    )
}

export default OurServices