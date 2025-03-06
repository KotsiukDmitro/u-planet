import React from "react";
import { Link } from "gatsby";
import { links } from "../../../helpers/Links";
import { route } from "../../../routes";


const LinksFooter = () => {

    return (
        <>
            <ul className={'flex flex-wrap uppercase gap-y-3 gap-9 sm:gap-4 lg:gap-7 ml-auto mb-6'}>
                {links
                    .filter(link => !link.children)
                    .map(link => <li key={'footer' + link.name} className={'text-white text-[13px] hover:text-[#24d5d1]'}>
                        <Link to={link.path}>{link.name}</Link>
                    </li>
                    )}
            </ul>

            <div className={'uppercase flex flex-wrap text-white gap-y-2 gap-5 text-[13px]'}>
                <span className={'text-[#747474]'}>Our products:</span>
                <Link to={route('smart-assistant')} className={'hover:text-[#24d5d1] cursor-pointer pr-5 border-r border-r-[#747474]'}>Smart Assistant</Link>
                <Link to={route('indoor-navigation')} className={'hover:text-[#24d5d1] cursor-pointer pr-5 border-r border-r-[#747474]'}>Indoor Navigation</Link>
                <Link to={route('online-streaming')} className={'hover:text-[#24d5d1] cursor-pointer'}>Online streaming</Link>
            </div>
        </>
    )
}

export default LinksFooter