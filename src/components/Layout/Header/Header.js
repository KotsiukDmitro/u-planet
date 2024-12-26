import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { route } from "../../../routes";
import HeaderLogo from "../../common/Logo/HeaderLogo";
import Links from "./Links";
import SocialLinks from "./SocialLinks";
import * as s from './header.module.css'


const Header = () => {

    return (
        <div className={['fixed top-0 flex items-center w-full', s.container].join(' ')}>
            <HeaderLogo />
            <Links />
            <SocialLinks />
            <Link to={route('contact-us')} className="pt-0.5 opacity-70 hover:opacity-100 ml-3">
                <StaticImage src={'../../../assets/images/social/contact-dark.png'} alt="contact-us" />
            </Link>
        </div>
    )
}

export default Header