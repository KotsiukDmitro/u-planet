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

  const botTypes = [
    { title: <>Social Messaging <br /> Facebook, Twitter</>, icons: [icons[3], icons[12]], borderColor: 'border-[#84d4f3]' },
    { title: <>Messengers <br /> Telegram / Slack / Skype</>, icons: [icons[6], icons[9], icons[8]], borderColor: 'border-[#ffd996]' },
    { title: <>Voice <br /> Amazon Alexa, Actions on Google</>, icons: [icons[1], icons[4]], borderColor: 'border-[#c2b1f2]' },
    { title: <>Support / Monitoring / <br /> Alerts automation</>, icons: [icons[7], icons[0]], borderColor: 'border-[#f9f088]' },
    { title: <>Email / SMS assistance <br /> for any tasks</>, icons: [icons[2], icons[10]], borderColor: 'border-[#fcc]' },
    { title: <>All support <br />for any kind of tasks</>, icons: [icons[11], icons[5]], borderColor: 'border-[#9ceba3]' }
  ]

  return (
    <div className={'max-w-[750px] lg:max-w-[970px] xl:max-w-[1200px] w-full m-auto mb-10 sm:mb-20 px-7 sm:px-5'}>
      <CustomTitleComponent name='Types of Bots:' />
      <div className={'grid sm:grid-cols-2 md:grid-cols-3 gap-[30px] mt-20'}>
        {botTypes.map((bot, index) => (
          <BotTemplate key={index} title={bot.title} icons={bot.icons} borderColor={bot.borderColor} />
        ))}
      </div>
    </div>
  )
}

export default TypesBots