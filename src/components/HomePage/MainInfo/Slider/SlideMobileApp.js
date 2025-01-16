import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { route } from "../../../../routes";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import CustomButton from "../../../common/CustomButton/CustomButton";



const SlideMobileApp = () => {

    return (
        <div className={'relative min-h-screen sm:flex sm:items-center'}>
            <div className={'w-full h-full absolute z-[-10]'}>
                <StaticImage className={'w-full h-full'} src={'../../../../assets/images/main-info/slide-mob-app/slide-bg.jpg'} alt={'main-bg'} loading={'lazy'} quality={100} />
            </div>
            <div className={'xl:w-[1170px] xl:m-auto pl-10 pt-28 sm:pt-0'}>
                <div className={'flex flex-col justify-start sm:mt-0'}>
                    <h4 className={'sm:text-[22px] font-bold uppercase leading-none mb-3'}>10 years of <br /> successful work</h4>
                    <div className={'uppercase text-white leading-none font-bold mb-3'}>
                        <span className={'sm:text-[100px]'}>mobile</span><br />
                        <span className={'sm:text-[80px]'}>applications</span>
                    </div>
                    <p className={'text-white mb-10 sm:text-[22px]'}>native mobile apps iOS, Android</p>
                    <div>
                        <CustomButton
                            classNameButton={'bg-white border-white !text-[#24d5d1] hover:!text-white hover:!bg-[#24d5d1]'}>
                                <AnchorLink to={route('home.portfolio')}>View Portfolio</AnchorLink>                           
                        </CustomButton>
                    </div>
                </div>
            </div>
            <div className={'absolute right-[-65px] sm:right-[10%] bottom-[-30px] -z-10 w-[350px] sm:w-[400px] xl:w-[470px]'}>
                <StaticImage src={'../../../../assets/images/main-info/slide-mob-app/phone.png'} alt={'phone'} loading={'lazy'} quality={100} />
            </div>
        </div>

    )
}

export default SlideMobileApp