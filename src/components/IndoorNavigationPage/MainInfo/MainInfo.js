import React from "react";
import { useStaticQuery, graphql } from 'gatsby'
import { getImage, GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import CustomButton from '../../common/CustomButton/CustomButton'
import '../IndoorNavigation.css'


const MainInfo = () => {

    const IconsMainInfo = useStaticQuery(graphql`
        query {
            allFile(filter: {relativeDirectory: {eq: "indoor-navigation/mainInfo/icons"}}) {
                nodes {
                    childImageSharp {
                    gatsbyImageData
                    }
                }
            }
        }
    `)
    const icons = IconsMainInfo.allFile.nodes.map(image => getImage(image))

    const purposes = ['Museums', 'Expo Centers', 'Parkings', 'Warehouses', 'Shopping Malls', 'Business Centers', 'Airports']

    return (
        <div className={'relative w-full h-full min-h-[680px] sm:min-h-screen md:min-h-[510px] xl:min-h-[780px] flex overflow-hidden'}>

            <div className={'absolute w-full h-full'}>
                <StaticImage src={'../../../assets/images/indoor-navigation/mainInfo/main-bg.png'}
                    layout="fullWidth" alt="Background" className={'inset-0 w-full h-full'} loading={'lazy'} quality={100} objectFit="fill"
                />
            </div>
            <div className={'container relative m-auto z-10 uppercase'}>
                <div className={'xl:mb-10 sm:px-20 md:px-0'}>
                    <div className={'mb-5 flex gap-3 xl:gap-0'}>
                        {icons.map((icon, index) => {
                            return <GatsbyImage image={icon} key={`${index}-main-info-icon`} alt="main-info-icon" objectFit="contain" className={'h-7 w-9 md:h-6 md:w-8 xl:w-auto xl:h-9'} />
                        })}
                    </div>
                    <h1 className={'text-[60px] sm:text-[80px] xl:text-[128px] text-white font-extrabold leading-none'}>Indoor</h1>
                    <h2 className={'text-[28px] sm:text-[38px] xl:text-[62px] text-white font-extrabold mb-3 md:mb-8 xl:mb-10'}>Navigation</h2>
                    <div className={'md:hidden flex flex-col uppercase text-[13px] sm:text-[18px] text-[#24D5D1] font-light'}>
                    {purposes.map((purpose, index) => {
                        return <span key={`${index}-purpose-mobile`}>{purpose}</span>
                    })}
                </div>
                    <div className={'mt-[200px] sm:mt-[350px] md:mt-0 flex justify-center md:block'}>
                        <CustomButton classNameButton={'uppercase btn'}>get in touch</CustomButton>
                    </div>
                </div>
                <div className={'absolute right-0 top-[230px] sm:top-[290px] md:-top-10 xl:-top-24'}>
                    <StaticImage src={'../../../assets/images/indoor-navigation/mainInfo/map.png'} objectPosition="right bottom"
                        alt="Background" className={'max-w-[360px] sm:max-w-[500px] xl:max-w-full h-full'} loading={'lazy'} quality={100} objectFit="contain" />
                </div>
            </div>
           
            <div className={'container absolute bottom-4 xl:bottom-7 left-0 right-0 mx-auto hidden md:block'}>
                <div className={'flex justify-between mt-auto uppercase text-[10px] lg:text-[12px] xl:text-[16px] text-[#24D5D1] font-light'}>
                    {purposes.map((purpose, index) => {
                        return <span key={`${index}-purpose`}>{purpose}</span>
                    })}
                </div>
            </div>

        </div>
    )
}

export default MainInfo