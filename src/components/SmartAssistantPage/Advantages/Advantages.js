import React from "react";
import { useStaticQuery, graphql } from 'gatsby'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'
import CustomTitleComponent from "../../common/CustomTitleComponent/CustomTitleComponent";


const Advantages = () => {

  const ImagesAdvantages = useStaticQuery(graphql`
            query {
              allFile(filter: {relativeDirectory: {eq: "smart-assistant/advantages"}}) {
                nodes {
                  name
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
            `)

  const images = Object.fromEntries(ImagesAdvantages.allFile.nodes.map((node) => [node.name, getImage(node)]))

  const advantages = [
    { image: images['popularization'], body: 'Popularization of the existing service, attraction of new customers' },
    { image: images['implementation'], body: 'Easy and quick cross-platform implementation (web and messengers)' },
    { image: images['tools'], body: 'Top-notch development tools' },
    { image: images['apis'], body: 'Easy integrationEasy integration with existing systems / APIs / customer\'s software packages' },
    { image: images['consuming'], body: 'Less time-consuming content update' },
    { image: images['platforms'], body: 'Integration with different IoT platforms (smart home and other IoT devices)' },
    { image: images['reduction'], body: 'Reduction of the cost of development' },
    { image: images['flexible'], body: 'Flexible control of the bot\'s behaviour' },
    { image: images['cost'], body: 'Low-cost hosting, serverless solutions' },
    { image: images['teaching'], body: 'Machine learning, teaching the bot within a niche area of activity' },
  ]

  return (
    <div className={'max-w-[1200px] w-full m-auto mb-20 px-5'}>
      <CustomTitleComponent name='Advantages' />
      <div className={'mt-20 grid grid-cols-1 md:grid-cols-3 gap-5 xl:gap-6'}>
        {advantages.map((advantage, index) => {
          const isLast = index === advantages.length - 1
          return <div key={`${index}-advantage`} className={`flex gap-4 ${isLast && 'md:col-start-2'} sm:mb-10 md:mb-0`}>
            <div className={'min-w-10 min-h-10 sm:min-w-16 sm:min-h-16 md:min-w-[30px] md:min-h-[30px] lg:min-w-10 lg:min-h-10'}>
              <GatsbyImage image={advantage.image} alt="advantage" className={'max-w-10 max-h-10 sm:max-w-16 sm:max-h-16 md:max-w-[30px] md:max-h-[30px] lg:max-w-10 lg:max-h-10'} objectFit="contain" loading="lazy" />
            </div>

            <div className={'text-[#48494e] font-light md:pt-0.5 text-[19px] sm:text-[32px] md:text-[10px] lg:text-[13px] xl:text-[15px]'}>{advantage.body}</div>
          </div>
        })}

      </div>
    </div>
  )
}

export default Advantages