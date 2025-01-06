import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { navigate } from "gatsby";
import { route } from "../../../../routes";
import CustomButton from "../../../common/CustomButton/CustomButton";



const SlideSolutions = () => {

    return (
        <div className={'relative sm:min-h-screen flex items-center'}>
            <div className={'w-full h-full absolute z-[-10]'}>
                <StaticImage className={'w-full h-full'} src={'../../../../assets/images/main-info/slide-solutions/slide-bg.jpg'} alt={'main-bg'} loading={'lazy'} quality={100} />
            </div>

            <div className={'w-[1170px] m-auto'}>

                <div className={'text-center leading-none'}>
                    <h4 className={'text-[22px] font-bold uppercase mb-3'}>dozens of regulars customers</h4>
                    <div className={'text-[80px] uppercase text-white font-bold mb-3'}>
                        enterprise<br /> solutions
                    </div>
                    <p className={'text-white mb-10 text-[22px]'}>
                        comprehensive solutions for company's software<br />
                        infrastructure (CRM / ERP business progress<br />
                        management system)
                    </p>
                    <div>
                        <CustomButton
                            onClick={() => navigate(route('home.portfolio'))}
                            classNameButton={'bg-white border-white !text-[#24d5d1] hover:!text-white hover:!bg-[#24d5d1]'}>
                            View Portfolio
                        </CustomButton>
                    </div>
                </div>
            </div>


        </div>

    )
}

export default SlideSolutions