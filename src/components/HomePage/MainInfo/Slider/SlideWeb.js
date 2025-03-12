import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { route } from "../../../../routes";
import CustomButton from "../../../common/CustomButton/CustomButton";


const SlideWeb = () => {

    return (
        <div className={'relative min-h-screen sm:flex items-center'}>
            <div className={'w-full h-full absolute z-[-10]'}>
                <StaticImage className={'w-full min- h-full'} src={'../../../../assets/images/main-info/slide-web/slide-bg.jpg'} alt={'main-bg'} loading={'lazy'} quality={100} />
            </div>

            <div className={'container flex flex-col lg:flex-row lg:gap-10 mx-auto px-5 pt-20 sm:pt-0'}>
                <div className={'mb-10 lg:mb-0 sm:mt-20 lg:mt-0 xl:mt-14 text-center lg:text-left'}>
                    <div className={'flex flex-col justify-start sm:mt-0'}>
                        <h4 className={'text-[15px] sm:text-[22px] font-bold uppercase leading-none mb-3'}>Hundreds of<br />international projects</h4>
                        <div className={'text-[55px] sm:text-[80px] lg:text-[100px] uppercase text-white leading-none font-bold mb-3'}>
                            Websites
                        </div>
                        <p className={'text-white mb-5 text-[14px] sm:text-[22px]'}>and web applications of any complexity</p>
                        <AnchorLink to={route('home.portfolio')}>
                            <CustomButton classNameButton={'bg-white border-white !text-greenCustom hover:!text-white hover:!bg-greenCustom'}>
                                View Portfolio
                            </CustomButton>
                        </AnchorLink>
                    </div>
                </div>

                <div>
                <StaticImage src={'../../../../assets/images/main-info/slide-web/group.png'} alt={'phone'} loading={'lazy'} quality={100} objectFit='contain' className={'sm:max-h-[350px] lg:max-h-max'} />
                </div>
            </div>

        </div>

    )
}

export default SlideWeb