import React from "react";
import { useScrollContext } from "../../../hooks/useScrollContext";
import { route } from "../../../routes";
import fb from '../../../assets/images/social/facebook.svg'
import fb_dark from '../../../assets/images/social/facebook-dark.svg'
import twitter from '../../../assets/images/social/twitter.svg'
import twitter_dark from '../../../assets/images/social/twitter-dark.svg'
import skype from '../../../assets/images/social/skype.svg'
import skype_dark from '../../../assets/images/social/skype-dark.svg'
import linkedin from '../../../assets/images/social/linkedin.svg'
import linkedin_dark from '../../../assets/images/social/linkedin-dark.svg'



const SocialLinks = ({ classNameGroup }) => {

    const {scroll, isTransparent} = useScrollContext()

    const socialLinks = [
        { name: 'facebook', src: fb, darkSrc: fb_dark },
        { name: 'twitter', src: twitter, darkSrc: twitter_dark },
        { name: 'skype', src: skype, darkSrc: skype_dark },
        { name: 'linkedin', src: linkedin, darkSrc: linkedin_dark },
    ]

    return (
        <div className={`flex gap-5 2xl:gap-7 ${classNameGroup}`}>
            {socialLinks.map(({ name, src, darkSrc }, index) => (
                <a key={name} href={route(name)}>
                    <img
                        src={scroll || isTransparent ? darkSrc : src}
                        alt={name}
                        className={`h-5 opacity-50 hover:opacity-100 ${index === 0 ? 'pl-0.5' : ''}
                            ${(scroll || isTransparent)
                                ? 'hover:[filter:invert(62%)_sepia(78%)_saturate(800%)_hue-rotate(140deg)_brightness(85%)_contrast(110%)]'
                                : ''
                            }`}
                    />
                </a>
            ))}
        </div>
    );
}

export default SocialLinks