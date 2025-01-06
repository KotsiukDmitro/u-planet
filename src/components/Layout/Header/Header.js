import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { route } from "../../../routes";
import HeaderLogo from "../../common/Logo/HeaderLogo";
import HeaderLogoWhite from "../../common/Logo/HeaderLogoWhite";
import Links from "./Links";
import SocialLinks from "./SocialLinks";
import * as s from './header.module.css'


const Header = ({scroll}) => {

    return (

        <div className={[`fixed top-0 flex items-center w-full z-[100] ${scroll && 'bg-white border border-b-[#eee]'}`, s.container].join(' ')}>
            {scroll ?  <HeaderLogo /> : <HeaderLogoWhite />}
            <Links scroll={scroll} />
            <SocialLinks scroll={scroll} />
            <Link to={route('contact-us')} className="pt-0.5 opacity-70 hover:opacity-100 ml-3">
                <StaticImage src={'../../../assets/images/social/contact-dark.png'} alt="contact-us" />
            </Link>
        </div>

    )
}

export default Header