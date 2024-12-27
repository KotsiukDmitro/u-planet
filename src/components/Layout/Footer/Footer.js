import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import SocialLinks from "../Header/SocialLinks";
import LinksFooter from "./LinksFooter";
import profile from '../../../assets/images/footer/badges/view-profile.svg'
import deliver from '../../../assets/images/footer/badges/deliver.svg'
import member from '../../../assets/images/footer/badges/member.svg'
import mobile from '../../../assets/images/footer/badges/mobile.svg'

const Footer = () => {

    const badges = [profile, deliver, member, mobile]

    return (
        <div className={'mt-auto bg-[#282b3e] max-h-[410px] w-full'}>
            <div className={'max-w-[1200px] px-4 m-auto pt-7 pb-3'}>
                <div className={'flex justify-between mb-5'}>
                    <div>
                        <StaticImage src={'../../../assets/images/main-logo.png'} alt="logo" />
                        <div className="bg-[#24d5d1] w-14 h-1 mt-8 mb-8"></div>
                        <LinksFooter />
                        <div className={'mt-8 uppercase flex text-white gap-5 text-[13px]'}>
                            <span className={'text-[#747474]'}>Our products:</span>
                            <span className={'hover:text-[#24d5d1] cursor-pointer'}>Smart Assistant</span>
                            <span className={'bg-[#747474] w-[1px] h-6'}></span>
                            <span className={'hover:text-[#24d5d1] cursor-pointer'}>Indoor Navigation</span>
                            <span className={'bg-[#747474] w-[1px] h-6'}></span>
                            <span className={'hover:text-[#24d5d1] cursor-pointer'}>online streaming</span>
                        </div>
                    </div>
                    <div className={'flex flex-col'}>
                        <div className={'text-[#5a5c69] text-[26px] text-right mb-6'}>FOLLOW THE JOURNEY:</div>
                        <div className={'text-right'}>
                            <SocialLinks classNameHover={'hover:bg-[#24d5d1]'} />
                        </div>
                        <div className={'flex items-center float-right mt-auto mb-1 gap-5 text-[#24d5d1]'}>
                            <span>+1(720)951-9470</span>
                            <span className={'bg-[#24d5d1] w-0.5 h-4'}></span>
                            <span>info@uplanet.biz</span>
                        </div>

                    </div>
                </div>
                <div className={'flex gap-5'}>
                    {badges.map((badge, index) => <img src={badge} key={'footer-badge' + index} className={'max-w-[145px] max-h-[125px]'} />                       
                    )}
                </div>
                <p className={'text-right mt-auto text-[#9A9A9A] text-xs'}>©2008-{(new Date().getFullYear())} UPlanet, All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer