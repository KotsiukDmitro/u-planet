import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { route } from "../../../../routes";
import CustomButton from "../../../common/CustomButton/CustomButton";



const SlideSolutions = () => {

    return (
        <div className={'relative min-h-screen flex items-center'}>
            <div className={'w-full h-full absolute z-[-10]'}>
                <StaticImage className={'w-full h-full'} src={'../../../../assets/images/main-info/slide-solutions/slide-bg.jpg'} alt={'main-bg'} loading={'lazy'} quality={100}/>
            </div>

            <div className={'xl:w-[1170px] m-auto'}>

                <div className={'text-center leading-none'}>
                    <h4 className={'sm:text-[22px] font-bold uppercase mb-3'}>dozens of regulars customers</h4>
                    <div className={'sm:text-[80px] uppercase text-white font-bold mb-3'}>
                        enterprise<br /> solutions
                    </div>
                    <p className={'text-white mb-10 sm:text-[22px]'}>
                        comprehensive solutions for company's software<br />
                        infrastructure (CRM / ERP business progress<br />
                        management system)
                    </p>
                    <div>
                        <CustomButton
                            classNameButton={'bg-white border-white !text-[#24d5d1] hover:!text-white hover:!bg-[#24d5d1]'}>
                           <AnchorLink to={route('home.portfolio')}>View Portfolio</AnchorLink>
                        </CustomButton>
                    </div>
                </div>
            </div>


        </div>

    )
}

export default SlideSolutions