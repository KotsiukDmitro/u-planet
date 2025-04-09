import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Skills from "./Skills";


const AlexaSkills = () => {

    return (
        <>
            <div className={'relative w-full h-full flex justify-center md:items-center px-5 min-h-[390px] sm:min-h-[700px]'}>
                <div className={'absolute w-full h-full'}>
                    <StaticImage src={'../../../assets/images/smart-assistant/alexa/alexa-bg.png'}
                        layout="fullWidth" alt="Background" className={'hidden md:block inset-0 w-full h-full'} loading={'lazy'} quality={100} objectFit="cover"
                    />
                    <StaticImage src={'../../../assets/images/smart-assistant/alexa/alexa-mobile-bg.png'}
                        layout="fullWidth" alt="Background" className={'md:hidden inset-0 w-full h-full'} loading={'lazy'} quality={100} objectFit="cover"
                    />
                </div>
                <div className={'relative z-10 xl:max-w-[1200px] pt-8 md:pt-24 md:w-full grid md:grid-cols-2 justify-between md:gap-5 overflow-hidden'}>
                    <div className={'hidden md:block pb-20 pt-5'}>
                        <Skills />
                    </div>
                    <div className={'text-right'}>
                        <h1 className={'text-[27px] sm:text-[57px] md:text-[35px] lg:text-[45px] xl:text-[55px] text-[#2b2e36] font-light'}>Why create</h1>
                        <h2 className={'text-[27px] sm:text-[58px] md:text-[30px] lg:text-[40px] xl:text-[50px] text-[#2b2e36] font-bold'}>Alexa <span className={'text-[#f6f1f1]'}>Custom Skills:</span></h2>
                        <p className={'text-[15px] sm:text-[32px] md:text-[18px] lg:text-[22px] xl:text-[28px] text-[#f6f1f1] font-bold'}>easy integration<br /> secure cloud-based service handling<br /> reaching customers in a natural way</p>

                    </div>
                    <div className={'absolute bottom-[-130px] sm:-bottom-[380px] md:bottom-0 xl:-bottom-20 right-0'}>
                        <StaticImage src={'../../../assets/images/smart-assistant/alexa/alexa.png'} loading={'lazy'} quality={100} alt="tasks" className={'md:max-w-[350px] lg:max-w-[450px] xl:max-w-full'} />
                    </div>
                </div>
            </div>
            <div className={'block md:hidden mt-10'}>
                <Skills />
            </div>
        </>
    )
}

export default AlexaSkills