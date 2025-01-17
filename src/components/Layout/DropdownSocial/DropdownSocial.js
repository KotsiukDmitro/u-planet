import React, { useState, useRef, useEffect } from "react";
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { route } from "../../../routes";
import iconPlus from '../../../assets/images/social/button-plus.svg'
import iconMinus from '../../../assets/images/social/button-minus.svg'
import SocialLinks from "../Header/SocialLinks"
import contact from '../../../assets/images/social/contact.svg'
import contact_dark from '../../../assets/images/social/contact-dark.svg'
import * as s from './DropdownSocial.module.css'

const DropdownSocial = ({ scroll }) => {

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
                <img src={isOpen ? iconMinus : iconPlus} alt={isOpen ? 'close' : 'open'} className={'opacity-85 hover:opacity-100'} />
            </button>
            {isOpen && <>
                <div className={['absolute -left-2 w-9 rounded mt-2.5 py-2 px-2', scroll ? s.modalScrolled : s.modal].join(' ')}>
                    <SocialLinks classNameGroup={'flex flex-col item-center text-center ml-0 mb-5'} scroll={scroll} />
                    <AnchorLink to={route('home.contact-us')}>
                        <img src={scroll ? contact_dark : contact} alt="contact-us" className={'h-[18px] opacity-50 hover:opacity-100'} />
                    </AnchorLink>
                </div>
            </>

            }
        </div>

    )
}

export default DropdownSocial