import React from "react";
import { useScrollContext } from "../../../hooks/useScrollContext";
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { route } from "../../../routes";
import HeaderLogo from "../../common/Logo/HeaderLogo";
import HeaderLogoWhite from "../../common/Logo/HeaderLogoWhite";
import Links from "./Links";
import SocialLinks from "./SocialLinks";
import DropdownSocial from "../DropdownSocial/DropdownSocial";
import contact from '../../../assets/images/social/contact.svg'
import contact_dark from '../../../assets/images/social/contact-dark.svg'



const Header = () => {

    const {scroll, isTransparent} = useScrollContext()

    return (

        <div className={`fixed top-0 flex items-center w-full z-[100] pb-4 pl-4 lg:pl-10 lg:pr-5 xl:pr-10 transition-all duration-500 ease-in-out ${scroll || isTransparent ? 'bg-white border-b border-b-[#eee] pt-4' : 'pt-5'}`}>
            {scroll || isTransparent ? <HeaderLogo /> : <HeaderLogoWhite />}
            <Links />
            <div className={'hidden xl:flex pt-1 ml-10'}>
                <SocialLinks scroll={scroll} isTransparent={isTransparent} />
                <AnchorLink to={route('home.contact-us')} className={'pt-0.5 ml-5 2xl:ml-7'}>
                    <img src={scroll || isTransparent ? contact_dark : contact} alt="contact-us" className={`h-[18px] opacity-50 hover:opacity-100 ${(scroll || isTransparent) ? 'hover:[filter:invert(62%)_sepia(78%)_saturate(800%)_hue-rotate(140deg)_brightness(85%)_contrast(110%)]': ''}`} />
                </AnchorLink>
            </div>
            <div className={'xl:hidden mx-4 pt-1.5'}>
                <DropdownSocial />
            </div>
        </div>

    )
}

export default Header