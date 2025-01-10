import React, { useState, useRef, useEffect } from "react";
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { StaticImage } from "gatsby-plugin-image";
import { route } from "../../../routes";
import iconPlus from '../../../assets/images/social/button-plus.svg'
import iconMinus from '../../../assets/images/social/button-minus.svg'
import SocialLinks from "../Header/SocialLinks";
import * as s from './DropdownSocial.module.css'

const DropdownSocial = () => {

    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef(null)

    const toggleDropdown = () => {
        setIsOpen((prev) => !prev)
    }

    const handleClickClose = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false)
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickClose)
        return () => {
            document.removeEventListener('mousedown', handleClickClose)
        }
    }, [])

    return (

        <div className={'relative inline-block'} ref={dropdownRef}>
            <button onClick={toggleDropdown} className={'focus:outline-none'}>
                <img src={isOpen ? iconMinus : iconPlus} alt={isOpen ? 'close' : 'open'} />
            </button>
            {isOpen && <>
                {/* <div className={s.showModal}></div> */}
                <div className={['absolute -left-2 w-9 rounded mt-2.5 py-2', s.modal].join(' ')}>
                    <SocialLinks classNameGroup={'flex flex-col item-center text-center ml-0 mb-3'} />
                    <AnchorLink to={route('home.contact-us')} className="opacity-70 hover:opacity-100 ml-1.5 ">
                        <StaticImage src={'../../../assets/images/social/contact-dark.png'} alt="contact-us" />
                    </AnchorLink>
                </div>
            </>

            }
        </div>

    )
}

export default DropdownSocial