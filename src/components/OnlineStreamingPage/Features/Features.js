import React from "react";
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image'
import * as s from '../OnlineStreame.module.css'


const Features = () => {

    const IconsFeatures = useStaticQuery(graphql`
        query {
            allFile(filter: {relativeDirectory: {eq: "online-stream/features/icons"}}) {
                nodes {
                    childImageSharp {
                    gatsbyImageData
                    }
                }
            }
        }
    `)
    const icons = IconsFeatures.allFile.nodes.map(image => getImage(image))

    const features = [
        { icon: icons[6], body: 'Audio/Video streaming in real-time (broadcasting)' },
        { icon: icons[2], body: 'Media stream recording and converting' },
        { icon: icons[3], body: 'Collaboration in shared Audio/Video rooms' },
        { icon: icons[1], body: 'Any media recording can be stored, uploaded to cloud or any online service' },
        { icon: icons[7], body: 'Real-time transcoding of media streams' },
        { icon: icons[0], body: 'Text chat integration' },
        { icon: icons[4], body: 'Screen capturing/sharing' },
        { icon: icons[5], body: 'Statistic' },
    ]


    return (
        <div className={'relative flex font-lato'}>

            <div className={'absolute w-full h-full'}>
                <StaticImage src={'../../../assets/images/online-stream/features/main-bg.png'}
                    layout="fullWidth" alt="Background" className={'inset-0 w-full h-full'} loading={'lazy'} quality={100} objectFit="cover"
                />
            </div>

            <div className={'container mx-5 md:mx-auto bg-white z-10 p-5 lg:p-16 xl:p-20 my-20 md:my-36'}>
                <h1 className={['relative text-[#3d4653] after:absolute after:w-14 after:h-[3px] after:bg-[#1f9be7] after:left-0 after:top-12 after:md:top-16', s.FeaturesTitle].join(' ')}>Features</h1>
                <ul className={'mt-14 sm:mt-20 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4'}>
                    {features.map(item => <li key={item.body} className={'flex items-center gap-3 md:gap-5'}>
                        <GatsbyImage image={item.icon} alt="icon-feature" objectFit="contain" className={'max-w-10 md:max-w-none md:min-w-[56px]'} />
                        <div className={s.FeaturesLiTitle}>{item.body}</div>
                    </li>

                    )}
                </ul>

            </div>
        </div>
    )
}

export default Features