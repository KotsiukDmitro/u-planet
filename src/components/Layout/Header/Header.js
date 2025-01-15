import React from "react";
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { StaticImage } from "gatsby-plugin-image";
import { route } from "../../../routes";
import HeaderLogo from "../../common/Logo/HeaderLogo";
import HeaderLogoWhite from "../../common/Logo/HeaderLogoWhite";
import Links from "./Links";
import SocialLinks from "./SocialLinks";
import DropdownSocial from "../DropdownSocial/DropdownSocial";
// import * as s from './header.module.css'


const Header = ({ scroll }) => {

    return (

        <div className={`fixed top-0 flex items-center w-full z-[100] pb-4 pl-5 lg:pl-10 lg:pr-5 xl:pr-10 transition-all duration-500 ease-in-out ${scroll ? 'bg-white border-b border-b-[#eee] pt-4' : 'pt-5'}`}>
            {scroll ? <HeaderLogo /> : <HeaderLogoWhite />}
            <Links scroll={scroll} />
            <div className={'hidden xl:flex pt-1 ml-5'}>
                <SocialLinks />
                <AnchorLink to={route('home.contact-us')} className={'pt-0.5 opacity-70 hover:opacity-100 ml-5 2xl:ml-7'}>
                    <StaticImage src={'../../../assets/images/social/contact-dark.png'} alt="contact-us" />
                </AnchorLink>
            </div>
            <div className={'xl:hidden mx-4 pt-1.5'}>
                <DropdownSocial />
            </div>
        </div>

    )
}

export default Header