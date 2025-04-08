import React from "react";
import { useStaticQuery, graphql } from 'gatsby'
import { getImage, GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import CustomTitleComponent from '../../common/CustomTitleComponent/CustomTitleComponent'


const HowItWork = () => {

    const { mainImages, systemsImages } = useStaticQuery(graphql`
        query {
          mainImages: allFile(filter: { relativeDirectory: { eq: "indoor-navigation/how-it-work/main" } }) {
            nodes {
              id
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          systemsImages: allFile(filter: { relativeDirectory: { eq: "indoor-navigation/how-it-work/systems" } }) {
            nodes {
              id
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      `)

    const getImageData = (images) => images.nodes.map((node) => ({
        id: node.id,
        image: getImage(node)
    }));

    const main = getImageData(mainImages)
    const systems = getImageData(systemsImages)

    const mainFunctionality = [
        { img: main[3].image, body: 'Viewing', id: main[3].id },
        { img: main[0].image, body: 'Editing', id: main[0].id },
        { img: main[2].image, body: <>Searching and<br /> adding new data</>, id: main[2].id },
        { img: main[1].image, body: <>Creating graphical<br /> plans for navigation</>, id: main[1].id },
    ]

    const systemItems = [
        { img: systems[2].image, body: <>Interactive<br /> Guide-Navigator<br /> for Museums</>, id: systems[2].id },
        { img: systems[0].image, body: <>Interactive<br /> Guide-Navigator<br /> for Expo Centers</>, id: systems[0].id },
        { img: systems[1].image, body: <>Navigator<br /> for Shopping<br /> Malls</>, id: systems[1].id },
        { img: systems[3].image, body: <>Navigator<br /> for<br /> Warehouses</>, id: systems[3].id },
    ]

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
                    <TemplateItem title='Its main functionality:' functional={mainFunctionality} titleColor={'text-[#49bfaa]'} />
                    <TemplateItem
                        title={<>On the basis of the Platform following systems <br />can be quickly created and deployed:</>}
                        functional={systemItems}
                        titleColor={'text-[#69bbe0]'} />
                </div>
                <div className={'flex flex-col md:flex-row justify-center items-center gap-5'}>
                    <StaticImage src={'../../../assets/images/indoor-navigation/how-it-work/solved-problems.png'} alt="phone" className={'w-[270px] xl:w-[390px]'} />
                    <div className={'px-5'}>
                        <h3 className={'text-[19px] md:text-[17px] xl:text-[26px] font-bold uppercase leading-none mb-3'}>The problem solved by the Platform</h3>
                        <p className={'text-[14px] md:text-[11px] xl:text-[16px] font-bold mb-10 xl:mb-14'}>is analogous to the problem solved by already familiar to us GPS navigators, namely:</p>
                        <div className={'flex flex-col gap-8'}>
                            {problems.map(item => {
                                return <div key={item.body} className={'flex flex-col pl-14 xl:pl-24 relative after:absolute after:w-7 after:xl:w-10 after:h-0.5 md:after:h-[3px] after:bg-greenCustom after:left-0 after:top-5 after:md:bottom-4 after:xl:bottom-8'}>
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