import React from "react";
import { StaticImage } from "gatsby-plugin-image";


const WhyChooseUs = () => {

    return (
        <div className={'bg-[#3055be] h-full mb-20 md:mb-28 flex items-center justify-end'}>
            <div className={'h-full hidden md:block'}>
                <StaticImage src={'../../../assets/images/indoor-navigation/why-choose-us/choose-bg.png'} alt="background" objectFit="contain" className={''} />
            </div>
            <div className={'container m-auto z-10 px-5 md:px-10 pt-14 md:pt-0'}>
                <div className={'z-10 text-white max-w-[700px]'}>
                    <h1 className={'text-[26px] md:text-[23px] xl:text-[36px] mb-14 relative after:absolute after:w-14 after:h-0.5 after:md:h-[3px] after:bg-[#24d5d1] after:left-0 after:-bottom-6'}>Why choose us?</h1>
                    <p className={'text-[15px] md:text-[11px] xl:text-[16px] mb-5 '}>
                        The Platform we have created provides <b>the highest positioning accuracy - 0.5 - 1 meter.</b> That is what makes it possible for guests to determine their precise and accurate location.
                    </p>
                    <p className={'text-[15px] md:text-[11px] xl:text-[16px]'}>
                        The Platform has <b>a built-in possibility of integration</b> with third-party systems, such as an
                        electronic queue or corporate CRM. This nonvolatile and secure solution requires no modification of premises.
                    </p>
                </div>
                <div className={'md:hidden px-10'}>
                <StaticImage src={'../../../assets/images/indoor-navigation/why-choose-us/choose-mobile.png'} alt="mobile" />
            </div>
            </div>
            
        </div>

    )
}

export default WhyChooseUs