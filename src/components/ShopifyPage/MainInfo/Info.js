import React from "react";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery, Link } from 'gatsby'
import { route } from "../../../routes";
import CustomButton from "../../common/CustomButton/CustomButton";

const Info = ()=> {

    const MainInfoIcons = useStaticQuery(graphql`
        query {
          allFile(filter: {relativeDirectory: {eq: "shopify/mainInfo/icons"}}) {
            nodes {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
        `)

    const icons = MainInfoIcons.allFile.nodes.map(image => getImage(image))   

    return (
        <div className={'text-center md:text-left'}>
                    <StaticImage src={'../../../assets/images/shopify/mainInfo/shopify-logo.png'} alt="logo-shopify" className={'w-[100px] md:w-[215px] xl:w-auto mb-1 md:mb-[60px]'} />
                    <h2 className={'text-[#221f1f] font-bold mb-2 md:mb-10 text-[28px] md:text-[22px] lg:text-[32px] xl:text-[36px]'}>
                        eCommerce - Your Big<br /> Business Opportunity
                    </h2>
                    <div className={'flex gap-3 lg:gap-10 items-center justify-center md:justify-start mb-10'}>
                        {icons.map((icon, index) => {
                            return <GatsbyImage image={icons[index]} key={`${index}-icon-eCommerce`} alt="icon-eCommerce" className={'max-h-6 lg:max-h-8 xl:max-h-max'} objectFit="contain" />
                        })}
                    </div>
                    <Link to={route('home.contact-us')}>
                        <CustomButton classNameButton={'uppercase'}>
                            build now
                        </CustomButton>
                    </Link>
                </div>
    )
}

export default Info