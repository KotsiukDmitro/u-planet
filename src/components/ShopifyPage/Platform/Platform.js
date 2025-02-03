import React from "react";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery, Link } from 'gatsby'
import { route } from "../../../routes";
import CustomButton from "../../common/CustomButton/CustomButton";
import CustomTitleComponent from '../../common/CustomTitleComponent/CustomTitleComponent'


const Platform = () => {

    const PlatformIcons = useStaticQuery(graphql`
        query {
          allFile(filter: {relativeDirectory: {eq: "shopify/platform/icons"}}) {
            nodes {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
        `)
    const icons = PlatformIcons.allFile.nodes.map(image => getImage(image))

    const solutions = [
        {
            img: icons[0],
            body: 'With a complete Shopify eCommerce solution you can set up a custom online store, organize your goods, accept online payments, manage orders - all in one place with a few clicks.'
        },
        {
            img: icons[2],
            body: 'We at UPlanet have plenty of experience in building Shopify online stores, apps and themes. We have successfully implemented a number of Shopify eCommerce stores and now we\'re maintaining them.'
        },
        {
            img: icons[1],
            body: 'We handle all the cycle of online Shopify store development from themes design and Shopify apps development to responsive web design and SEO optimization. It allows us create full-scale and outstanding eStores for you!'
        },
    ]

    return (
        <div className={'container mx-auto text-center mb-20 md:mb-40 px-5'}>
            <p className={'text-[#24D5D1] text-[14px] sm:text-[16px] mb-3'}>Shopify is a well known platform</p>
            <CustomTitleComponent name={`For Development Online Stores <br/>of Any Level and Size.`} />
            <StaticImage src={'../../../assets/images/shopify/platform/main-logo.png'} alt="shopify" className={'mt-10 lg:mt-20 mb-10 lg:mb-20 max-w-[340px] sm:max-w-max sm:w-[450px] lg:w-[600px] xl:w-auto'} objectFit="contain" />
            <div className={'columns-1 md:columns-3 gap-4 md:mb-20'}>
                {solutions.map(solution => {
                    return <div key={solution.body} className={'px-3'}>
                        <div className={'relative after:absolute after:w-[50px] after:h-[3px] after:bg-[#24d5d1] after:m-auto after:left-0 after:right-0 after:-bottom-7 mb-14 lg:mb-20'}>
                            <GatsbyImage image={solution.img} alt="solution-icon" className={'w-[65px] sm:w-auto'} />
                        </div>
                        <p className={'text-[#3a3d48] leading-5 lg:leading-6 xl:leading-7 tracking-wide text-[15px] md:text-[10px] lg:text-[13px] xl:text-[16px] max-w-[300px] sm:max-w-max m-auto mb-10 md:mb-0'}>{solution.body}</p>
                    </div>
                })}
            </div>
            <Link to={route('home.contact-us')} className={'hidden md:block'}>
                <CustomButton classNameButton={'uppercase lg:px-20 lg:!text-[17px]'}>
                    build now
                </CustomButton>
            </Link>
        </div>
    )
}

export default Platform