import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { route } from "../../../../routes";

import CustomButton from "../../../common/CustomButton/CustomButton";



const SlideWeb = () => {

    return (
        <div className={'relative sm:min-h-screen flex items-center'}>
            <div className={'w-full h-full absolute z-[-10]'}>
                <StaticImage className={'w-full h-full'} src={'../../../../assets/images/main-info/slide-web/slide-bg.jpg'} alt={'main-bg'} loading={'lazy'} quality={100} />
            </div>

            <div className={'relative flex w-[1170px] m-auto px-10'}>
                <div>
                    <div className={'flex flex-col justify-start'}>
                        <h4 className={'text-[22px] font-bold uppercase leading-none mb-3'}>Hundreds of<br />international projects</h4>
                        <div className={'text-[100px] uppercase text-white leading-none font-bold mb-3'}>
                            Websites
                        </div>
                        <p className={'text-white mb-10 text-[22px]'}>and web applications of any complexity</p>
                        <div>
                            <CustomButton
                                classNameButton={'bg-white border-white !text-[#24d5d1] hover:!text-white hover:!bg-[#24d5d1]'}>                                   
                                <AnchorLink to={route('home.portfolio')}>View Portfolio</AnchorLink>
                            </CustomButton>
                        </div>
                    </div>
                </div>

                <div className={'mr-10'}>
                    <div className={'absolute top-[-20px] right-0'}>
                        <StaticImage src={'../../../../assets/images/main-info/slide-web/comp.png'} alt={'phone'} loading={'lazy'} quality={100} />
                    </div>
                    <div className={'absolute bottom-[-290px] right-[30%]'}>
                        <StaticImage src={'../../../../assets/images/main-info/slide-web/pad.png'} alt={'phone'} loading={'lazy'} quality={100} />
                    </div>
                    <div className={'absolute bottom-[-300px] right-[24%]'}>
                        <StaticImage src={'../../../../assets/images/main-info/slide-web/phone.png'} alt={'phone'} loading={'lazy'} quality={100} />
                    </div>
                </div>

            </div>

        </div>

    )
}

export default SlideWeb