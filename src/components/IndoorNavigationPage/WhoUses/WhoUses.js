import React from "react";
import { useStaticQuery, graphql } from 'gatsby'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'
import CustomTitleComponent from "../../common/CustomTitleComponent/CustomTitleComponent";

const WhoUses = () => {

    const WhoUsesPlatform = useStaticQuery(graphql`
        query {
            allFile(filter: {relativeDirectory: {eq: "indoor-navigation/who-uses"}}) {
                nodes {
                    childImageSharp {
                    gatsbyImageData
                    }
                }
            }
        }
    `)
    const photos = WhoUsesPlatform.allFile.nodes.map(image => getImage(image))

    const places = [
        { name: <>Zaporizhzhya<br />Regional Lore Museum,<br />Ukraine</>, img: photos[2] },
        { name: <>Kozak Palace<br />Zaporizhzha, Ukraine</>, img: photos[0], logo: photos[1] },
        { name: <>The Museum of<br />Textile Industry in<br />Bulgaria</>, img: photos[3] },
    ]

    return (
        <div className={'container m-auto px-5 mb-16 xl:mb-28'}>
            <CustomTitleComponent name='Who uses the Platform today?' />
            <div className={'grid md:grid-cols-3 gap-3 lg:gap-10 mb-10 md:mb-20 mt-16 xl:mt-28'}>
                {places.map((place, index) => {
                    return <div key={`${index}-Who Uses Platform Today`} className={'relative px-5 md:px-0 m-auto'}>
                        <div className={'m-auto'}>
                            <GatsbyImage image={place.img} className="w-full sm:max-w-[400px] md:max-x-max h-full" alt="place" objectFit="contain" />
                        </div>
                        <div className={'absolute z-10 flex bottom-6 lg:bottom-10 left-14 sm:left-20 md:left-5 lg:left-8 items-center'}>
                            {place.logo && <GatsbyImage image={place.logo} alt="Kozak Palace" objectFit="contain" className={'max-w-16 sm:max-w-max'} />}
                            <div className={'text-white font-bold ml-2 text-[15px] lg:text-[18px]'}>{place.name}</div>
                        </div>


                    </div>
                })}

            </div>
            <p className={'text-[#1c1c1c] mb-6 xl:mb-10 text-center text-[13px] xl:text-[20px] leading-7 xl:leading-10 md:px-10 xl:px-20'}>
                Whenever indoor navigation technologies attract your attention and you would like to implement
                a positioning system in your premises or you are interested in investing in such technologies
                and further development with us, we will be happy to see a message from you!
            </p>
            <p className={'text-[#24D5D1] text-center text-[27px] xl:text-[43px]'}>Let's get it navigated!</p>
        </div>
    )
}

export default WhoUses