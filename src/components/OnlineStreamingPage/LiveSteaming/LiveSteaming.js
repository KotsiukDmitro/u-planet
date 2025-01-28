import React from "react";
import { useStaticQuery, graphql } from 'gatsby'
import { getImage, StaticImage } from 'gatsby-plugin-image'
import Card from "./Card";
import * as s from '../OnlineStreame.module.css'

const LiveSteaming = () => {

    const IconsLiveSteaming = useStaticQuery(graphql`
        query {
            allFile(filter: {relativeDirectory: {eq: "online-stream/live-steaming/icons"}}) {
                nodes {
                    childImageSharp {
                    gatsbyImageData
                    }
                }
            }
        }
    `)
    const icons = IconsLiveSteaming.allFile.nodes.map(image => getImage(image))

    const cases = [
        { title: <>Real-Time<br/> broadcasting of events</>, icon: icons[1], body: 'Speeches, conferences, presentations' },
        { title: <>Online conferencing/meeting<br/> applications, audio/video<br/> communicating</>, icon: icons[3], body: 'collaboration tools with screen sharing, teaching sessions, webinars, etc'},
        { title: <>Gaming and<br/> multimedia streaming</>, icon: icons[0] },
        { title: <>TV broadcasting<br/> and Social TV</>, icon: icons[2] },
    ]

    return (
        <div className={'relative flex text-white font-lato min-h-[calc(100vh-80px)]'}>

            <div className={'absolute w-full h-full'}>
                <StaticImage src={'../../../assets/images/online-stream/live-steaming/main-bg.png'}
                    layout="fullWidth" alt="Background" className={'inset-0 w-full h-full'} loading={'lazy'} quality={100} objectFit="cover"
                />
            </div>

            <div className={'container md:mx-auto z-10 py-20 md:pt-32 px-5 '}>
                <h1 className={['relative text-[#1f9be7] after:absolute after:w-14 after:h-[3px] after:bg-[#1f9be7] after:left-0 after:top-24 after:md:top-28', s.liveStreamingTitle].join(' ')}>Live Streaming</h1>
                <h2 className={s.liveStreamingSubTitle}>Case Studies</h2>
                <div className={'mt-20 md:mt-28 ml-auto grid grid-cols-1 md:grid-cols-2 gap-[2px] xl:w-2/3 2xl:w-3/4'}>
                    {cases.map((card, index) => <Card card={card} key={`${index}-Case Studies`} />)}                   
                </div>
            </div>
        </div>
    )
}

export default LiveSteaming