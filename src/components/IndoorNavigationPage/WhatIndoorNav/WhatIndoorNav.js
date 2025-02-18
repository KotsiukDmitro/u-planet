import React from "react";
import { useStaticQuery, graphql } from 'gatsby'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'
import CustomTitleComponent from '../../common/CustomTitleComponent/CustomTitleComponent'

const WhatIndoorNav = () => {

    const ImagesWhatIndoorNav = useStaticQuery(graphql`
        query {
            allFile(filter: {relativeDirectory: {eq: "indoor-navigation/what-navigation"}}) {
                nodes {
                    childImageSharp {
                    gatsbyImageData
                    }
                }
            }
        }
    `)
    const images = ImagesWhatIndoorNav.allFile.nodes.map(image => getImage(image))

    const navigation = [
        { img: images[0], body: 'trying to find a car in a parking' },
        { img: images[2], body: 'attending a museum looking for the exhibit' },
        { img: images[5], body: 'wandering in an airport finding a registration desk or ATM' },
        { img: images[4], body: 'at a conference looking for the most interesting stands' },
        { img: images[3], body: 'roaming in a shopping mall trying to find necessary shop or department' },
        { img: images[1], body: 'looking for a particular office in a large business center' },
    ]


    return (
        <div className={'container mx-auto mb-14 md:mb-20'}>
            <CustomTitleComponent name='What is Indoor Navigation?' />
            <p className={'md:max-w-[500px] xl:max-w-[760px] m-auto text-[14px] sm:text-[18px] md:text-[13px] xl:text-[20px] text-[#515151] mt-12 md:mt-20 mb-14 px-5 md:px-0'}>
                Navigation has become a part of our everyday life, we use it wherever we go:
                while <strong>travelling or business trip</strong> or just <span className={'font-semibold'}>walking around</span>. But from time to time
                each of us feels a lack of assistance with navigation after entering a premises too:
            </p>
            <div className={'grid grid-cols-2 md:grid-cols-3 mb-10 md:mb-20'}>
                {navigation.map((item, index) => {
                    return (<div className={'relative w-full'} key={`${index}-navigation`}>
                        <GatsbyImage image={item.img} alt="navigation" className={'w-full'} />

                        <div className={'absolute top-[90px] sm:top-[130px] lg:top-[170px] z-10 text-[12px] sm:text-[20px] md:text-[12px] lg:text-[14px] xl:text-[22px] text-white font-bold pr-3 pl-5 sm:pl-10 lg:pl-20 max-w-[200px] sm:max-w-[250px] xl:max-w-[320px]'}>
                            {item.body}
                        </div>

                    </div>)
                })}
            </div>

            <div className={'md:flex'}>
                <h2 className={'text-[23px] xl:text-[36px] text-[#48494e] px-5 relative md:w-2/6 mb-5'}>Sounds familiar?</h2>
                <div className={'px-5 md:w-4/6'}>
                    <h2 className={'text-[18px] sm:text-[24px] md:text-[19px] xl:text-[30px] text-[#24D5D1] font-bold '}>
                        Indoor Navigation is the exact<br /> solution in such situations
                    </h2>
                    <p className={'text-[13px] sm:text-[18px] md:text-[13px] xl:text-[20px] text-[#48494e] relative after:absolute after:w-8 md:after:w-16 after:h-0.5 md:after:h-[3px] after:bg-[#24d5d1]  after:left-0 after:right-0 after:-bottom-8 mb-16'}>For starting a navigation all the visitor needs is a smartphone</p>
                    <p className={'text-[13px] sm:text-[18px] md:text-[11px] xl:text-[16px] text-[#515151] mb-5'}>
                        Indoor navigation systems use techniques different from those used in outdoor navigations systems like GPS for the purpose of finding a route to an object in a premises. Today numerous types of indoor navigation systems are available.
                    </p>
                    <strong className={'text-[13px] sm:text-[18px] md:text-[11px] xl:text-[16px] text-[#515151]'}>
                        We at Uplanet provide a unique Platform that allows quickly build systems of high-precision Indoor Navigation with iBeacons using a mobile application.
                    </strong>
                </div>

            </div>

        </div>

    )
}

export default WhatIndoorNav