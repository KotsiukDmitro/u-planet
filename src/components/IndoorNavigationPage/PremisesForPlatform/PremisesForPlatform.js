import React from "react";
import { useStaticQuery, graphql } from 'gatsby'
import { getImage, GatsbyImage, StaticImage } from 'gatsby-plugin-image'


const PremisesForPlatform = () => {

    const IconsPremisesForPlatform = useStaticQuery(graphql`
        query {
            allFile(filter: {relativeDirectory: {eq: "indoor-navigation/premises-for-platform/icons"}}) {
                nodes {
                    childImageSharp {
                    gatsbyImageData
                    }
                }
            }
        }
    `)
    const icons = IconsPremisesForPlatform.allFile.nodes.map(image => getImage(image))

    const premises = [
        { name: 'Museums', img: icons[3] },
        { name: 'Expo Centers', img: icons[1] },
        { name: 'Parkings', img: icons[5] },
        { name: 'Warehouses', img: icons[6] },
        { name: 'Shopping Malls', img: icons[2] },
        { name: 'Business Centers', img: icons[4] },
        { name: 'Airports', img: icons[0] },
    ]

    return (
        <div className={'relative w-full h-full flex overflow-hidden mb-20 md:mb-40'}>

            <div className={'absolute w-full h-full'}>
                <StaticImage src={'../../../assets/images/indoor-navigation/premises-for-platform/premises-bg.png'}
                    layout="fullWidth" alt="Background" className={'inset-0 w-full h-full'} loading={'lazy'} quality={100} objectFit="fill"
                />
            </div>

            <div className={'container m-auto py-14 lg:py-32 px-7 md:px-5 z-10'}>
                <h1 className={'text-left md:text-center text-[21px] md:text-[23px] xl:text-[40px] mb-14 md:mb-24 font-light text-white leading-none relative after:absolute  after:w-8 after:md:w-14 after:h-[3px] after:bg-white after:sm:m-auto after:left-0 after:right-0 after:-bottom-5 after:md:-bottom-10'}>What premises the Platform can be implemented in?</h1>
                <div className={'grid grid-cols-2 md:grid-cols-7 gap-y-5 gap-2 text-center'}>
                    {premises.map(premise => {
                        return <div key={`${premise.name}-premise for platform`} className={'flex flex-col gap-5'}>
                            <div>
                                <GatsbyImage image={premise.img} alt="premise for platform" objectFit="contain" />
                            </div>
                            <span className={'text-white font-bold uppercase whitespace-nowrap text-[11px] xl:text-[16px] mt-auto'}>{premise.name}</span>
                        </div>
                    })}
                </div>
            </div>
        </div >
    )
}

export default PremisesForPlatform