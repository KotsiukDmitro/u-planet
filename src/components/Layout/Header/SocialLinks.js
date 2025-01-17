import React from "react";
import { route } from "../../../routes";
import fb from '../../../assets/images/social/facebook.svg'
import fb_dark from '../../../assets/images/social/facebook-dark.svg'
import twitter from '../../../assets/images/social/twitter.svg'
import twitter_dark from '../../../assets/images/social/twitter-dark.svg'
import skype from '../../../assets/images/social/skype.svg'
import skype_dark from '../../../assets/images/social/skype-dark.svg'
import linkedin from '../../../assets/images/social/linkedin.svg'
import linkedin_dark from '../../../assets/images/social/linkedin-dark.svg'



const SocialLinks = ({ scroll, classNameHover, classNameGroup }) => {

    return (
        <div className={['flex gap-5 2xl:gap-7', classNameGroup].join(' ')}>
            <a href={route('facebook')}>
                <img src={scroll ? fb_dark : fb} alt="facebook" className={['h-5 opacity-50 hover:opacity-100 pl-0.5', classNameHover].join(' ')}/>
            </a>
            <a href={route('twitter')}>
                <img src={scroll ? twitter_dark : twitter} alt="twitter" className={['h-5 opacity-50 hover:opacity-100', classNameHover].join(' ')}/>
            </a>
            <a href={route('skype')}>
                <img src={scroll ? skype_dark : skype} alt="skype" className={['h-5 opacity-50 hover:opacity-100', classNameHover].join(' ')}/>
            </a>
            <a href={route('linkedin')}>
                <img src={scroll ? linkedin_dark : linkedin} alt="linkedin" className={['h-5 opacity-50 hover:opacity-100', classNameHover].join(' ')}/>
            </a>
        </div>
    )
}

export default SocialLinks