import React from "react";
import { route } from "../../../routes";
import { navigate } from "gatsby";
import CustomButton from "../../common/CustomButton/CustomButton";
import { StaticImage } from "gatsby-plugin-image";


const ContactUs = () => {

    return (
        <div className={'flex items-center justify-center mb-20'}>
            <div className={'relative'}>
                <StaticImage src={'../../../assets/images/contact-us/welcome-separator.png'} class={'w-full h-[112px]'} alt="background" />
            </div>
            <CustomButton onClick={() => navigate(route('home.contact-us'))} classNameButton={'absolute z-50'} >Contact Us</CustomButton>
        </div>
    )
}

export default ContactUs