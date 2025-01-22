import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { route } from "../../../../routes";

import CustomButton from "../../../common/CustomButton/CustomButton";



const SlideWeb = () => {

    return (
        <div className={'relative min-h-screen sm:flex items-center'}>
            <div className={'w-full h-full absolute z-[-10]'}>
                <StaticImage className={'w-full h-full'} src={'../../../../assets/images/main-info/slide-web/slide-bg.jpg'} alt={'main-bg'} loading={'lazy'} quality={100} />
            </div>

            <div className={'relative flex xl:w-[1170px] xl:m-auto px-10 pt-28 sm:pt-0'}>
                <div>
                    <div className={'flex flex-col justify-start sm:mt-0'}>
                        <h4 className={'text-[15px] sm:text-[22px] font-bold uppercase leading-none mb-3'}>Hundreds of<br />international projects</h4>
                        <div className={'text-[55px] sm:text-[100px] uppercase text-white leading-none font-bold mb-3'}>
                            Websites
                        </div>
                        <p className={'text-white mb-10 text-[14px] sm:text-[22px]'}>and web applications of any complexity</p>
                        <AnchorLink to={route('home.portfolio')}>
                            <CustomButton classNameButton={'bg-white border-white !text-[#24d5d1] hover:!text-white hover:!bg-[#24d5d1]'}>
                                View Portfolio
                            </CustomButton>
                        </AnchorLink>
                    </div>
                </div>

                <div className={'sm:mr-10'}>
                    <div className={'absolute bottom-[-320px] sm:top-[-20px] left-0 sm:left-auto right-0 sm:right-auto xl:right-0 w-[300px] lg:w-[380px] xl:w-[430px] m-auto'}>
                        <StaticImage src={'../../../../assets/images/main-info/slide-web/comp.png'} alt={'phone'} loading={'lazy'} quality={100} />
                    </div>
                    <div className={'absolute bottom-[-425px] sm:bottom-[-215px] right-1/2 sm:right-0 xl:right-1/4 w-[180px] xl:w-[230px]'}>
                        <StaticImage src={'../../../../assets/images/main-info/slide-web/pad.png'} alt={'phone'} loading={'lazy'} quality={100} />
                    </div>
                    <div className={'absolute bottom-[-450px] sm:bottom-[-230px] right-[135px] sm:right-0 xl:right-[220px] w-[85px] xl:w-[110px]'}>
                        <StaticImage src={'../../../../assets/images/main-info/slide-web/phone.png'} alt={'phone'} loading={'lazy'} quality={100} />
                    </div>
                </div>

            </div>

        </div>

    )
}

export default SlideWeb