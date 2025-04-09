import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from 'gatsby'
import * as s from '../OnlineStreame.module.css'

const TechStack = () => {

    const TechStackContent = useStaticQuery(graphql`
        query TechStack {
          allFile(filter: {relativeDirectory: {eq: "online-stream/tech-stack"}}) {
            nodes {
              name
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
        `)

    const images = Object.fromEntries(TechStackContent.allFile.nodes.map((node) => [node.name, getImage(node)]))

    const techStack = [
        { image: images['rtc'], name: 'WebRTC' },
        { image: images['rtp'], name: 'RTP forward' },
        { image: images['rest'], name: 'REST API' },
        { image: images['socket'], name: 'WebSockets' },
        { image: images['ffmpeg'], name: 'FFmpeg' },
        { image: images['browsers'], name: "Browsers WebRTC API's" },
        { image: images['ios-android'], name: 'iOS/Android' },
        { image: images['gstream'], name: 'GStreamer' },
        { image: images['html5'], name: "HTML5 Audio/Video API's" },
        { image: images['janus'], name: 'Janus' },
        { image: images['hls'], name: 'RTMP/HLS streaming' },
        { image: images['node'], name: 'Node.js' },
    ]

    return (
        <div className={'container font-lato text-[#3b3e49] px-5 xl:px-0 sm:mx-auto py-[120px] '}>
             <h1 className={['relative text-center mb-20 sm:mb-28 font-bold leading-none after:absolute after:w-14 after:h-[3px] after:bg-[#1f9be7] after:m-auto after:left-0 after:right-0 after:-bottom-6', s.techStackTitle].join(' ')}>Tech stack</h1>
            <div className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-2'}>
                {techStack.map(item => {
                    return (
                        <div key={item.name} className={'flex items-center gap-3 md:gap-0'}>
                              <GatsbyImage image={item.image} alt="icon-feature" objectFit="contain" className={'min-w-[90px]'} />
                            <p className={s.techStackName}>{item.name}</p>
                        </div>
                    )
                })}

            </div>

        </div>
    )
}

export default TechStack