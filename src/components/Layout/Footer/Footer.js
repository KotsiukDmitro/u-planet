import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import SocialLinks from "../Header/SocialLinks";
import LinksFooter from "./LinksFooter";
import profile from '../../../assets/images/footer/badges/view-profile.svg'
import deliver from '../../../assets/images/footer/badges/deliver.svg'
import member from '../../../assets/images/footer/badges/member.svg'
import mobile from '../../../assets/images/footer/badges/mobile.svg'
import { route } from "../../../routes";

const Footer = () => {

    const badges = [profile, deliver, member, mobile]

    return (
        <div className={'mt-auto bg-[#282b3e] w-full'}>
            <div className={'max-w-[1200px] px-4 m-auto pt-7 pb-3'}>
                <div className={'md:flex justify-between mb-8 md:mb-0'}>
                    <div>
                        <StaticImage src={'../../../assets/images/main-logo.png'} alt="logo" />
                        <div className="bg-greenCustom w-14 h-1 mt-8 mb-8"></div>
                    </div>
                    <div className={'flex md:flex-col items-end'}>
                        <div className={'text-[#5a5c69] text-[17px] md:text-[26px] md:mb-6 mr-5 md:mr-0'}>FOLLOW THE JOURNEY:</div>
                        <div className={'flex items-center md:mr-2 mb-1'}>
                            <SocialLinks />
                        </div>
                    </div>

                </div>
                <div className={'lg:flex mb-10'}>
                    <div className={'mb-3 lg:mb-0'}>
                        <LinksFooter />
                    </div>
                    <div className={'flex items-center ml-auto mt-auto mb-1 gap-3 md:gap-5 text-greenCustom text-[12px] md:text-[16px]'}>
                        <a href={route('skype')} className={'border-r border-r-greenCustom pr-3 md:pr-5'}>+1(720)951-9470</a>
                        <span>info@uplanet.biz</span>
                    </div>
                </div>
                <div className={'flex gap-5 mb-5 md:mb-0'}>
                    {badges.map((badge, index) => <img src={badge} key={'footer-badge' + index} className={'max-h-10 md:max-h-20 lg:max-h-[125px]'} alt="badge" />
                    )}
                </div>
                <p className={'md:text-right mt-auto text-[#9A9A9A] text-xs'}>©2008-{(new Date().getFullYear())} UPlanet, All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer