import React from "react";
import { route } from "../../../routes";
import CustomButton from "../../common/CustomButton/CustomButton";
import { StaticImage } from "gatsby-plugin-image";
import { AnchorLink } from "gatsby-plugin-anchor-links";


const ContactUs = () => {

    return (
        <div className={'flex items-center justify-center mb-20'}>
            <div className={'relative w-full'}>
                <StaticImage src={'../../../assets/images/contact-us/welcome-separator.png'} class={'w-full h-[112px]'} alt="background" />
            </div>

            <AnchorLink to={route('home.contact-us')} className={'absolute z-50'}>
                <CustomButton >Contact Us</CustomButton>
            </AnchorLink>

        </div>
    )
}

export default ContactUs