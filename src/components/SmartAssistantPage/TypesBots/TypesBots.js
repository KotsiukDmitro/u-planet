import React from "react";
import { getImage } from 'gatsby-plugin-image'
import { useStaticQuery, graphql } from 'gatsby'
import CustomTitleComponent from "../../common/CustomTitleComponent/CustomTitleComponent";
import BotTemplate from "./BotTemplate";


const TypesBots = () => {

    const IconsTypesBots = useStaticQuery(graphql`
        query {
          allFile(filter: {relativeDirectory: {eq: "smart-assistant/types-bots"}}) {
            nodes {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
        `)
    const icons = IconsTypesBots.allFile.nodes.map(image => getImage(image))

    const socialIcons = [icons[3], icons[10]]
    const messengersIcons = [icons[6], icons[9], icons[8]]
    const voiceIcons = [icons[1], icons[4]]
    const supportIcons = [icons[7], icons[0]]
    const messageIcons = [icons[2], icons[12]]
    const allIcons = [icons[11], icons[5]]
    

    const titleSocial = <>Social Messaging <br/> Facebook, Twitter</>
    const titleMessengers = <>Messengers <br/> Telegram / Slack / Skype</>
    const titleVoice = <>Voice <br/> Amazon Alexa, Actions on Googler</>
    const titleSupport = <>Support / Monitoring / <br/> Alerts automation</>
    const titleMessage = <>Email / SMS assistance <br/> for any tasks</>
    const titleAll = <>All support <br/>for any kind of tasks</>

    return (
        <div className={'max-w-[750px] lg:max-w-[970px] xl:max-w-[1200px] w-full m-auto mb-10 px-7 sm:px-5'}>
            <CustomTitleComponent name='Types of Bots:' />
            <div className={'grid sm:grid-cols-2 md:grid-cols-3 gap-[30px] mt-10'}>
                <BotTemplate title={titleSocial} icons={socialIcons} borderColor={'border-[#84d4f3]'} />
                <BotTemplate title={titleMessengers} icons={messengersIcons} borderColor={'border-[#ffd996]'} />
                <BotTemplate title={titleVoice} icons={voiceIcons} borderColor={'border-[#c2b1f2]'} />
                <BotTemplate title={titleSupport} icons={supportIcons} borderColor={'border-[#f9f088]'} />
                <BotTemplate title={titleMessage} icons={messageIcons} borderColor={'border-[#fcc]'} />
                <BotTemplate title={titleAll} icons={allIcons} borderColor={'border-[#9ceba3]'} />
            </div>
        </div>
    )
}

export default TypesBots