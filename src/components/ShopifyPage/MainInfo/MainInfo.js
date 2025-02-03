import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Info from "./Info";


const MainInfo = () => {


    return (
        <>
            <div className={'relative w-full h-full md:min-h-[570px] xl:min-h-[720px] flex  overflow-hidden mb-20 2xl:mb-36'}>

                <div className={'absolute w-full h-full'}>
                    <StaticImage src={'../../../assets/images/shopify/mainInfo/main-bg.jpg'}
                        layout="fullWidth" alt="Background" className={'inset-0 w-full h-full'} loading={'lazy'} quality={100} objectFit="cover"
                    />
                </div>
                <div className={'container mx-auto z-50 flex flex-col-reverse md:flex-row justify-between gap-5 mt-28 md:mt-40'}>
                    <div className={'hidden md:block'}>
                        <Info />
                    </div>
                    <div >
                        <StaticImage src={'../../../assets/images/shopify/mainInfo/parralax-layer-1.png'}
                            alt="icons" className={'h-full w-[350px] lg:w-[527px] 2xl:w-full'} loading={'lazy'} quality={100} objectFit="contain"
                        />
                    </div>

                </div>
            </div>

            <div className={'md:hidden mb-28 px-5'}>
                <Info />
            </div>
        </>
    )
}

export default MainInfo