import React from "react";
import { StaticImage } from "gatsby-plugin-image";


const MainInfo = () => {

    return (
        <div className={'relative w-full min-h-[560px] lg:min-h-[490px] flex items-end lg:items-center'}>
            <div className={'absolute w-full h-full hidden lg:block'}>
                <StaticImage src={'../../../assets/images/qa/main-bg.png'} layout="fullWidth" alt="Background" className={'inset-0 w-full h-full'} loading={'lazy'} quality={100} objectFit="fill" />
            </div>

            <div className={'absolute w-full h-full lg:hidden'}>
                <StaticImage src={'../../../assets/images/qa/quality-mobile.jpg'} layout="fullWidth" alt="Background" className={'inset-0 w-full h-full'} loading={'lazy'} quality={100} objectFit="fill" />
            </div>

            <div className={'relative container px-5 lg:pl-20 mb-36 sm:mb-28 mx-auto flex justify-center lg:justify-start text-center lg:text-left'}>
                <h1 className={'text-[42px] sm:text-[56px] text-white uppercase font-extrabold leading-[1.1]'}>quality <br /> assurance</h1>
            </div>

        </div>
    )
}


export default MainInfo