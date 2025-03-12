import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { route } from "../../../../routes";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import CustomButton from "../../../common/CustomButton/CustomButton";


const SlideMobileApp = () => {

    return (
        <div className={'relative min-h-screen sm:flex xl:items-center'}>
            <div className={'w-full h-full absolute z-[-10]'}>
                <StaticImage className={'w-full h-full'} src={'../../../../assets/images/main-info/slide-mob-app/slide-bg.jpg'} alt={'main-bg'} loading={'lazy'} quality={100} />
            </div>
            <div className={'container mx-auto pl-5 pt-20 sm:pt-28'}>
                <div className={'flex flex-col justify-start xl:mb-10'}>
                    <h4 className={'text-[18px] sm:text-[20px] font-bold uppercase leading-none mb-3'}>10 years of <br /> successful work</h4>
                    <div className={'uppercase text-white leading-none font-bold mb-3'}>
                        <span className={'text-[60px] sm:text-[80px] lg:text-[100px]'}>mobile</span><br />
                        <span className={'text-[40px] sm:text-[60px] lg:text-[80px]'}>applications</span>
                    </div>
                    <p className={'text-white mb-5 sm:mb-10 text-[15px] sm:text-[17px]'}>native mobile apps iOS, Android</p>
                    <AnchorLink to={route('home.portfolio')}>
                        <CustomButton classNameButton={'bg-white border-white !text-greenCustom hover:!text-white hover:!bg-greenCustom'}>
                            View Portfolio
                        </CustomButton>
                    </AnchorLink>
                </div>
            </div>
            <div className={'absolute right-[-65px] sm:right-0 lg:right-[10%] bottom-[-30px] -z-10 w-[350px] sm:w-[400px] lg:w-[470px]'}>
                <StaticImage src={'../../../../assets/images/main-info/slide-mob-app/phone.png'} alt={'phone'} loading={'lazy'} quality={100} />
            </div>
        </div>
    )
}

export default SlideMobileApp