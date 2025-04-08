import React from "react";
import { useStaticQuery, graphql } from 'gatsby'
import { getImage, GatsbyImage, StaticImage } from 'gatsby-plugin-image'


const PremisesForPlatform = () => {

    const data = useStaticQuery(graphql`
        query {
          allFile(filter: { relativeDirectory: { eq: "indoor-navigation/premises-for-platform/icons" } }) {
            nodes {
              name
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      `);

    const iconMap = Object.fromEntries(
        data.allFile.nodes.map(node => [node.name.toLowerCase(), getImage(node)])
    );

    const premises = [
        'Museums',
        'Expo Centers',
        'Parkings',
        'Warehouses',
        'Shopping Malls',
        'Business Centers',
        'Airports',
    ];

    return (
        <div className={'relative w-full h-full flex overflow-hidden mb-20 md:mb-40'}>

            <div className={'absolute w-full h-full'}>
                <StaticImage src={'../../../assets/images/indoor-navigation/premises-for-platform/premises-bg.png'}
                    layout="fullWidth" alt="Background" className={'inset-0 w-full h-full'} loading={'lazy'} quality={100}
                />
            </div>

            <div className={'container mx-auto py-14 lg:py-32 px-7 md:px-5 z-10'}>
                <h1 className={'text-left md:text-center text-[21px] md:text-[23px] xl:text-[40px] mb-14 md:mb-24 font-light text-white leading-none relative after:absolute  after:w-8 after:md:w-14 after:h-[3px] after:bg-white after:sm:m-auto after:left-0 after:right-0 after:-bottom-5 after:md:-bottom-10'}>What premises the Platform can be implemented in?</h1>
                <div className={'grid grid-cols-2 md:grid-cols-7 gap-y-5 gap-2 text-center'}>
                    {premises.map(name => (
                        <PremiseCard key={name} name={name} image={iconMap[name.toLowerCase()]} />
                    ))}
                </div>
            </div>
        </div >
    )
}

const PremiseCard = ({ name, image }) => (
    <div className='flex flex-col gap-5'>
        <div>
            <GatsbyImage image={image} alt={name} className='mx-auto' />
        </div>
        <span className='text-white font-bold uppercase whitespace-nowrap text-[11px] xl:text-[16px] mt-auto'>
            {name}
        </span>
    </div>
);

export default PremisesForPlatform