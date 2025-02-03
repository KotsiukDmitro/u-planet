import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from 'gatsby'
import CustomTitleComponent from '../../common/CustomTitleComponent/CustomTitleComponent'

const Services = () => {

    const ServicesIcons = useStaticQuery(graphql`
        query {
          allFile(filter: {relativeDirectory: {eq: "shopify/services"}}) {
            nodes {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
        `)
    const icons = ServicesIcons.allFile.nodes.map(image => getImage(image))

    const services = [
        { icon: icons[3], body: 'Custom full-scale<br/> ecommerce store<br/> development' },
        { icon: icons[6], body: 'Ecommerce store<br/> maintenance<br/> and support' },
        { icon: icons[0], body: 'Shopify App<br/> development<br/> - public and private' },
        { icon: icons[2], body: 'Shopify App<br/> Customization' },
        { icon: icons[7], body: 'Themes building' },
        { icon: icons[1], body: 'Custom themes<br/> with theme.liquid' },
        { icon: icons[4], body: 'Responsive<br/> web design' },
        { icon: icons[5], body: 'SEO<br/> optimization' }
    ]


    return (
        <div className={'container mx-auto mb-28 md:mb-40'}>
            <CustomTitleComponent name='Our team provides full range of development services for Shopify eCommerce platform.' />
            <div className={'mt-20 lg:mt-40 px-5 grid grid-cols-2 md:grid-cols-4 gap-y-14 md:gap-y-28'}>
                {services.map(service => {
                    return <div key={service.body} className={'flex flex-col justify-center'}>
                        <div className={'h-[75px] lg:h-[145px] mb-10 flex justify-center'}>
                            <GatsbyImage image={service.icon} alt="service-icon" objectFit="contain" className={'max-h-[75px] lg:max-h-max'} />
                        </div>

                        <p dangerouslySetInnerHTML={{ __html: service.body }}
                            className={'text-center uppercase mt-auto text-[#5f6467] font-light leading-6 text-[14px] lg:text-[16px]'}
                        />
                    </div>
                })}
            </div>

        </div>
    )
}

export default Services