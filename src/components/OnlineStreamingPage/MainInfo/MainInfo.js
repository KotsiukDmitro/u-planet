import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import CustomButton from '../../common/CustomButton/CustomButton'
import * as s from '../OnlineStreame.module.css'


const MainIfo = () => {

    return (
        <div className={'relative min-h-screen grid place-items-center text-white font-lato'}>

            <div className={'absolute w-full h-full'}>
                <StaticImage src={'../../../assets/images/online-stream/mainInfo/main-bg.png'}
                    layout="fullWidth" alt="Background" className={'inset-0 w-full h-full'} loading={'lazy'} quality={100} objectFit="cover"
                />
            </div>

            <div className={'text-center font-extrabold uppercase leading-none z-10'}>
                <h1 className={s.mainInfoTitle}>Online</h1>
                <h2 className={['mb-8', s.mainInfoSubTitle].join(' ')}>Streaming</h2>
                <a href="https://video-room.devserver.app/" target="_blanc">
                    <CustomButton classNameButton={'bg-[#db1e46] border-[#db1e46] hover:text-[#db1e46]'}>Try a demo</CustomButton>
                </a>

            </div>

            <div className={'absolute right-0 bottom-0 z-10 hidden md:block'}>
                <StaticImage src={'../../../assets/images/online-stream/mainInfo/popup-demo.png'}
                    alt="demo" loading={'lazy'} quality={100}
                />
            </div>
            <div className={'absolute right-0 bottom-0 z-10 p-5 lg:p-10 hidden md:block'}>
                <div className={'flex leading-none gap-2 text-[#0579b9]'}>
                    <span className={'mt-auto pb-2'}>in</span>
                    <span className={'text-[65px] font-light'}>2018</span>
                    <span className={'text-[21px] mt-auto pb-2'}>live streaming<br></br> REACHED</span>
                    <span className={'text-[64px] font-extrabold'}>79%</span>
                </div>
                <p className={'text-[#ccc] text-[27px] uppercase font-bold tracking-widest'}>Of all internet traffic</p>
                <p className={'text-[#ccc] text-[15px] font-bold'}>Latest studies say that in the near future this figure will grow.</p>
            </div>
        </div>
    )
}

export default MainIfo