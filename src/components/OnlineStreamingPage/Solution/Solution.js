import React from "react";
import { StaticImage } from 'gatsby-plugin-image'
import CustomButton from '../../common/CustomButton/CustomButton'
import * as s from '../OnlineStreame.module.css'


const Solution = () => {

    return (
        <div className={'relative md:flex font-lato'}>

            <div className={'absolute w-full h-full hidden md:block'}>
                <StaticImage src={'../../../assets/images/online-stream/solution/main-bg.png'}
                    layout="fullWidth" alt="Background" className={'inset-0 w-full h-full'} loading={'lazy'} quality={100} objectFit="fill"
                />
            </div>
            <div className={'container sm:mx-5 md:mx-auto z-10 p-5 mb-5 sm:my-14 lg:my-32'}>
                <h1 className={['relative after:absolute after:w-14 after:h-[3px] after:bg-[#1f9be7] after:left-0 after:top-20 after:sm:top-24 after:lg:top-36 mb-14 lg:mb-28 text-[#3b3e49] font-bold', s.solutionTitle].join(' ')}>
                    Uplanet is ready to help<br />you to implement your own<br />streaming solution
                </h1>
                <p className={['max-w-[350px] lg:max-w-[450px] xl:max-w-[570px] text-[#3b3e49] mb-10', s.solutionText].join(' ')}>
                    We can offer a combined solution based on web and mobile applications that will run in a cloud, easily scalable infrastructure.
                </p>
                <div className={'flex items-center gap-4 sm:gap-10 mb-10'}>
                    <StaticImage src={'../../../assets/images/online-stream/solution/ic-solution.png'} alt="solution-icon" className={'max-w-14 sm:max-w-max'}/>
                    <div className={['text-[#488cd9]', s.solutionTextIcon].join(' ')}>Available on the<br/>desktop and mobile</div>
                </div>
                <a href="https://video-room.devserver.app/" target="_blanc">
                    <CustomButton classNameButton={'bg-[#db1e46] border-[#db1e46] hover:text-[#db1e46]'}>Try a demo</CustomButton>
                </a>

            </div>
            <div className={'w-full h-full md:hidden'}>
                <StaticImage src={'../../../assets/images/online-stream/solution/main-bg.png'}
                    alt="Background" className={' w-full h-full'} loading={'lazy'} quality={100} objectFit="fill"
                />
            </div>
        </div>
    )
}

export default Solution