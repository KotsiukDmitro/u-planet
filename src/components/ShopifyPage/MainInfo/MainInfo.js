import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Info from "./Info";
import * as s from '../Shopify.module.css'


const MainInfo = () => {

    return (
        <>
            <div className={'relative w-full h-full flex overflow-hidden mb-20 2xl:mb-36'}>

                <div className={'absolute w-full h-full'}>
                    <StaticImage src={'../../../assets/images/shopify/mainInfo/main-bg.jpg'}
                        layout="fullWidth" alt="Background" className={'inset-0 w-full h-full'} loading={'lazy'} quality={100} objectFit="cover"
                    />
                </div>
                <div className={'container mx-auto z-50 flex flex-col-reverse md:flex-row justify-between gap-5 mb-3 sm:mb-5 mt-20 md:mt-28 2xl:mt-40'}>
                    <div className={'hidden md:block 2xl:pt-20'}>
                        <Info />
                    </div>
                    <div >
                        <StaticImage src={'../../../assets/images/shopify/mainInfo/mix.png'}
                            alt="icons" className={s.imageMix} loading={'lazy'} quality={100} objectFit="contain"
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