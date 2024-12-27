import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import CustomTitleComponent from "../../common/CustomTitleComponent/CustomTitleComponent";



const AboutUs = () => {

    return (
        <div id="AboutUs" className={'flex flex-col text-center max-w-[1170px] px-5 pt-5 mb-20'}>
            <span className={'text-[20px] text-[#A6A6A6] mb-5'}>Briefly About us</span>
            <CustomTitleComponent name='We are technology solutions company' />
            <strong className={'text-[16px] text-[#3E3E3E] font-semibold mb-8'}>Our specialization is software development.</strong>
            <p className={'mb-10'}>The development centers are in Bulgaria, our development specialists are from Ukraine, and our offices are located in the USA,<br className={'hidden lg:block'} /> Bulgaria and Ukraine.</p>
            <div className={'m-auto'}>
                <StaticImage src={'../../../assets/images/about-us/map.png'} className={'max-w-[715px]'} alt="map" />
            </div>

        </div>
    )
}

export default AboutUs