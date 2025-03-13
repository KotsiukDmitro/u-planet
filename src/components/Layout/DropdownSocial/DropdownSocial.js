import React, { useState, useEffect } from "react";
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { useScrollContext } from "../../../hooks/useScrollContext";
import { route } from "../../../routes";
import iconPlus from '../../../assets/images/social/button-plus.svg'
import iconMinus from '../../../assets/images/social/button-minus.svg'
import SocialLinks from "../Header/SocialLinks"
import contact from '../../../assets/images/social/contact.svg'
import contact_dark from '../../../assets/images/social/contact-dark.svg'
import * as s from './DropdownSocial.module.css'

const DropdownSocial = () => {

    const { scroll, isTransparent } = useScrollContext()
    const [isOpen, setIsOpen] = useState(false)

    const isScrolled = scroll || isTransparent

    const toggleDropdown = () => setIsOpen((prev) => !prev)

    useEffect(() => {
        const handleClickClose = (event) => {
            if (!event.target.closest('.dropdown-social')) {
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickClose)
        return () => document.removeEventListener('mousedown', handleClickClose)
    }, [])

    return (
        <div className={'relative inline-block dropdown-social'}>
            <button onClick={toggleDropdown} className={'focus:outline-none'}>
                <img src={isOpen ? iconMinus : iconPlus}
                    alt={isOpen ? 'close' : 'open'}
                    className={'opacity-85 hover:opacity-100'} />
            </button>
            {isOpen &&
                <div className={`absolute -left-2 w-9 rounded mt-2.5 py-2 px-2 ${isScrolled ? s.modalScrolled : s.modal}`}>
                    <SocialLinks classNameGroup={'flex flex-col item-center text-center ml-0 mb-5'} />
                    <AnchorLink to={route('home.contact-us')}>
                        <img src={isScrolled ? contact_dark : contact}
                            alt="contact-us"
                            className={`h-[18px] opacity-50 hover:opacity-100 ${isScrolled ? 'hover:[filter:invert(62%)_sepia(78%)_saturate(800%)_hue-rotate(140deg)_brightness(85%)_contrast(110%)]' : ''}`} />
                    </AnchorLink>
                </div>
            }
        </div>
    )
}

export default DropdownSocial