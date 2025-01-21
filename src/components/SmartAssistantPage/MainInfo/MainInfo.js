import React from "react";
import { StaticImage } from "gatsby-plugin-image"


const MainInfo = () => {

    return (
        <div className={'relative w-full h-full min-h-[230px] sm:min-h-[440px] md:min-h-[770px] flex justify-center items-center overflow-hidden mb-20'}>

            <div className={'absolute w-full h-full'}>
                <StaticImage src={'../../../assets/images/smart-assistant/mainInfo/main-bg.png'}
                    layout="fullWidth" alt="Background" className={'inset-0 w-full h-full'} loading={'lazy'} quality={100} objectFit="fill"
                />
            </div>

            <div className={'absolute top-0 right-[-200px] sm:right-[-121px] md:right-[-340px] lg:right-[-240px] xl:right-[-160px] 2xl:right-[-30px] h-full w-auto'}>
                <StaticImage src={'../../../assets/images/smart-assistant/mainInfo/black-robot.png'}
                    alt="black-robot" className={'h-full'} loading={'lazy'} quality={100} objectFit="contain"
                />
            </div>

            <div className={'absolute top-0 left-[-207px] sm:left-[-130px] md:left-[-340px] lg:left-[-240px] xl:left-[-160px] 2xl:left-[-30px] h-full w-auto'}>
                <StaticImage src={'../../../assets/images/smart-assistant/mainInfo/white-robot.png'}
                    alt="white-robot" className={'h-full'} loading={'lazy'} quality={100} objectFit="contain"
                />
            </div>

            <div className={'relative px-5 text-center text-[#fefefe] z-10 hidden md:block'}>
                <h1 className={'text-[76px] xl:text-[90px] uppercase font-extrabold leading-[1.1] mb-10'}>
                    smart <br />assistant
                </h1>
                <p className={'text-[16px] max-w-[390px] lg:max-w-[480px] xl:max-w-[570px] m-auto'}>
                    Dialogue is nature's way of human interaction, but nowadays it's getting so that this way suits for human-computer interaction best. Most services and business models can be entirely replaced or supplemented by connecting a smart assistant - a bot with necessary level of AI
                </p>
            </div>
        </div>
    )
}

export default MainInfo