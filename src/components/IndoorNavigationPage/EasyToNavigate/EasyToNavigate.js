import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import CustomTitleComponent from '../../common/CustomTitleComponent/CustomTitleComponent'

const EasyToNavigate = () => {

    return (
        <div className={'relative w-full h-full flex overflow-hidden border-b border-gray-100 mb-20'}>

            <div className={'absolute w-full h-full'}>
                <StaticImage src={'../../../assets/images/indoor-navigation/easy-navigate/navigate-bg.png'}
                    layout="fullWidth" alt="Background" className={'inset-0 w-full h-full'} loading={'lazy'} quality={100} objectFit="fill"
                />
            </div>

            <div className={' w-full py-14 lg:py-32 px-5 sm:px-10 text-center z-10'}>
                <span className={'text-[15px] lg:text-[20px] text-[#24D5D1] mb-2'}>Make your large premises</span>
                <CustomTitleComponent name='Easy to navigate' />
                <p className={'m-auto max-w-[910px] text-[15px] lg:text-[26px] text-[#515151] font-light lg:leading-[50px]'}>Let your guests <span className={'text-[#24D1D5] font-semibold'}>find their way</span> to the desired object in your premises fast and easy. All you need is a <span className={'text-[#24D1D5] font-semibold'}>powerful Indoor Navigation</span> system installed in your premises.</p>
            </div>
        </div>
    )
}

export default EasyToNavigate