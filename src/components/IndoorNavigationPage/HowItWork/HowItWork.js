import React from "react";
import { useStaticQuery, graphql } from 'gatsby'
import { getImage, GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import CustomTitleComponent from '../../common/CustomTitleComponent/CustomTitleComponent'


const HowItWork = () => {

    const Images = useStaticQuery(graphql`
        query {
          mainImages: allFile(filter: { relativeDirectory: { eq: "indoor-navigation/how-it-work/main" } }) {
            nodes {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          systemsImages: allFile(filter: { relativeDirectory: { eq: "indoor-navigation/how-it-work/systems" } }) {
            nodes {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      `)

    const mainImages = Images.mainImages.nodes.map(image => getImage(image))
    const systemsImages = Images.systemsImages.nodes.map(image => getImage(image))

    const mainFunctionality = [
        { img: mainImages[3], body: 'Viewing', id: Math.random() },
        { img: mainImages[0], body: 'Editing', id: Math.random() },
        { img: mainImages[2], body: <>Searching and<br /> adding new data</>, id: Math.random() },
        { img: mainImages[1], body: <>Creating graphical<br /> plans for navigation</>, id: Math.random() },
    ]
    const mainFunctionalityTitle = 'Its main functionality:'

    const systems = [
        { img: systemsImages[2], body: <>Interactive<br /> Guide-Navigator<br /> for Museums</>, id: Math.random() },
        { img: systemsImages[0], body: <>Interactive<br /> Guide-Navigator<br /> for Expo Centers</>, id: Math.random() },
        { img: systemsImages[1], body: <>Navigator<br /> for Shopping<br /> Malls</>, id: Math.random() },
        { img: systemsImages[3], body: <>Navigator<br /> for<br /> Warehouses</>, id: Math.random() },
    ]
    const systemsTitle = <>On the basis of the Platform following systems <br />can be quickly created and deployed:</>

    const problems = [
        { title: 'to determine', body: 'a location (in our case, in premises)' },
        { title: 'to find', body: 'a route to the desired object' },
        { title: 'to get', body: 'an information about POI (sights or "points of interest").' },

    ]

    return (
        <div className={'bg-slate-100 pt-14 pb-10 md:pt-28 md:pb-20 text-[#515151]'}>
            <div className={'container mx-auto'}>
                <CustomTitleComponent name='How it works?' />
                <p className={'mt-14 mb-14 xl:mb-20 text-center text-[14px] md:text-[17px] xl:text-[26px] px-5'}>
                    The technical solution is based on using of iBeacons and a unique internally developed<br />
                    mathematical algorithm. <b>The Platform is a combination of an engine and a set of tools.</b><br />
                    The server side of the Platform is responsible for managing plans of premises.
                </p>
                <div>
                    <TemplateItem title={mainFunctionalityTitle} functional={mainFunctionality} titleColor={'text-[#49bfaa]'} />
                    <TemplateItem title={systemsTitle} functional={systems} titleColor={'text-[#69bbe0]'} />
                </div>
                <div className={'flex flex-col md:flex-row justify-center items-center gap-5'}>
                    <StaticImage src={'../../../assets/images/indoor-navigation/how-it-work/solved-problems.png'} alt="phone" className={'w-[270px] xl:w-[390px]'}/>
                    <div className={'px-5'}>
                        <h3 className={'text-[19px] md:text-[17px] xl:text-[26px] font-bold uppercase leading-none mb-3'}>The problem solved by the Platform</h3>
                        <p className={'text-[14px] md:text-[11px] xl:text-[16px] font-bold mb-10 xl:mb-14'}>is analogous to the problem solved by already familiar to us GPS navigators, namely:</p>
                        <div className={'flex flex-col gap-8'}>
                            {problems.map(item => {
                                return <div key={item.body} className={'flex flex-col pl-14 xl:pl-24 relative after:absolute after:w-7 after:xl:w-10 after:h-0.5 md:after:h-[3px] after:bg-[#24d5d1] after:left-0 after:top-5 after:md:bottom-4 after:xl:bottom-8'}>
                                    <span className={'font-bold text-[18px] md:text-[16px] xl:text-[24px] uppercase'}>{item.title}</span>
                                    <span className={'text-[14px] md:text-[11px] xl:text-[16px]'}>{item.body}</span>
                                </div>
                            })}
                        </div>

                    </div>
                </div>
            </div>

        </div>

    )
}

const TemplateItem = ({ title, titleColor, functional }) => {
    return (
        <div className={'mb-12 xl:mb-20'}>
            <h2 className={`text-center px-7 text-[15px] xl:text-[26px] font-bold uppercase mb-5 md:mb-14 xl:mb-20 ${titleColor}`}>{title}</h2>
            <div className={'grid grid-cols-2 md:grid-cols-4 gap-y-10'}>
                {functional.map(item => {
                    return <div key={item.id} className={'flex flex-col items-center'}>
                        <GatsbyImage image={item.img} alt="functionality" className={'mb-6 md:mb-8 xl:mb-14'} />
                        <span className={'text-center text-[11px] xl:text-[16px] text-[#515151] font-bold uppercase'}>{item.body}</span>
                    </div>
                })}
            </div>

        </div>
    )
}

export default HowItWork