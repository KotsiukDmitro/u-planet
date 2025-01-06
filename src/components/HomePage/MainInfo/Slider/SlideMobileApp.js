import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { navigate } from "gatsby";
import { route } from "../../../../routes";
import CustomButton from "../../../common/CustomButton/CustomButton";



const SlideMobileApp = () => {

    return (
        <div className={'relative sm:min-h-screen flex items-center'}>
            <div className={'w-full h-full absolute z-[-10]'}>
                <StaticImage className={'w-full h-full'} src={'../../../../assets/images/main-info/slide-mob-app/slide-bg.jpg'} alt={'main-bg'} loading={'lazy'} quality={100} />
            </div>

            <div className={'w-[1170px] m-auto pl-10'}>

            <div className={'flex flex-col justify-start'}>
                <h4 className={'text-[22px] font-bold uppercase leading-none mb-3'}>10 years of <br /> successful work</h4>
                <div className={'uppercase text-white leading-none font-bold mb-3'}>
                    <span className={'text-[100px]'}>mobile</span><br />
                    <span className={'text-[80px]'}>applications</span>
                </div>
                <p className={'text-white mb-10 text-[22px]'}>native mobile apps iOS, Android</p>
                <div>
                <CustomButton
                    onClick={() => navigate(route('home.portfolio'))}
                    classNameButton={'bg-white border-white !text-[#24d5d1] hover:!text-white hover:!bg-[#24d5d1]'}>
                    View Portfolio
                </CustomButton>
                </div>
            </div>
            </div>
            <div className={'absolute right-[10%] bottom-0 -z-10'}>
                <StaticImage src={'../../../../assets/images/main-info/slide-mob-app/phone.png'} alt={'phone'} loading={'lazy'} quality={100} />
            </div>
        </div>

    )
}

export default SlideMobileApp