import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { route } from "../../../../routes";
import CustomButton from "../../../common/CustomButton/CustomButton";


const SlideSolutions = () => {

    return (
        <div className={'relative min-h-screen flex items-center'}>
            <div className={'w-full h-full absolute z-[-10]'}>
                <StaticImage className={'w-full h-full'} src={'../../../../assets/images/main-info/slide-solutions/slide-bg.jpg'} alt={'main-bg'} loading={'lazy'} quality={100} />
            </div>
            <div className={'container mx-auto'}>
                <div className={'text-center leading-none'}>
                    <h4 className={'text-[16px] sm:text-[22px] font-bold uppercase mb-3'}>dozens of regulars customers</h4>
                    <div className={'text-[48px] sm:text-[80px] uppercase text-white font-bold mb-3'}>
                        enterprise<br /> solutions
                    </div>
                    <p className={'text-white mb-10 text-[13px] sm:text-[22px]'}>
                        comprehensive solutions for company's software<br />
                        infrastructure (CRM / ERP business progress<br />
                        management system)
                    </p>
                    <AnchorLink to={route('home.portfolio')}>
                        <CustomButton classNameButton={'bg-white border-white !text-[#24d5d1] hover:!text-white hover:!bg-[#24d5d1]'}>
                            View Portfolio
                        </CustomButton>
                    </AnchorLink>
                </div>
            </div>
        </div>
    )
}

export default SlideSolutions