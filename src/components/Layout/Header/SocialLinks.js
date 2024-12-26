import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { route } from "../../../routes";
import { Link } from "gatsby";


const SocialLinks = ({classNameHover})=> {

    return (
        <div className={'ml-5'}>
            <a href={route('facebook')} className={['opacity-70 hover:opacity-100', classNameHover].join(' ')}>
                <StaticImage src={'../../../assets/images/social/facebook-dark.png'} alt="facebook" />
            </a>
            <a href={route('twitter')}className={['opacity-70 hover:opacity-100 ml-3', classNameHover].join(' ')} >
                <StaticImage src={'../../../assets/images/social/twitter-dark.png'} alt="twitter" />
            </a>
            <a href={route('skype')} className={['opacity-60 hover:opacity-100 ml-3', classNameHover].join(' ')}>
                <StaticImage src={'../../../assets/images/social/skype.png'} alt="skype" />
            </a>
            <a href={route('linkedin')} className={['opacity-70 hover:opacity-100 ml-3', classNameHover].join(' ')}>
                <StaticImage src={'../../../assets/images/social/linkedin-dark.png'} alt="linkedin" />
            </a>

        </div>
    )
}

export default SocialLinks