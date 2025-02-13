import React, { useEffect, useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Drawer from "../Drawer/Drawer";
import HeaderLogoWhite from "../../common/Logo/HeaderLogoWhite";
import iconBars from '../../../assets/images/icon-bars.svg'
import CookieConsentModal from "../../common/CookieConsentModal/CookieConsentModal";


const Layout = ({ children, isTransparent=false }) => {

    const [scroll, setScroll] = useState(false)
    const [isDrawerIsOpen, setDrawerIsOpen] = useState(false)

    const handleDrawerToggle = () => {
        setDrawerIsOpen(!isDrawerIsOpen)
    }

    useEffect(() => {
        const handleScroll = () => {
            if ((!scroll && window.scrollY < 200) || (scroll && window.scrollY >= 200)) {
                return
            }
            setScroll(() => window.scrollY >= 200)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [scroll])


    return (
        <div className={'min-h-screen flex flex-col'}>
            <div>
                <div className={'hidden md:block'}>
                    <Header scroll={scroll} isTransparent={isTransparent} />
                </div>
                <div className={`fixed w-full flex items-center justify-between transition-all duration-500 ease-in-out ${scroll || isTransparent ? 'pt-4 border-b border-b-[#eee] bg-slate-100' : 'pt-5'} pb-5 px-7 z-[100] md:hidden`}>
                    <div className={'max-w-[120px]'}>
                        <HeaderLogoWhite />
                    </div>
                    <button onClick={handleDrawerToggle} className={'transition-all duration-300'}
                        style={{ transform: `translateX(${isDrawerIsOpen ? 50 : 0}px)` }}>
                        <img src={iconBars} alt="iconBars" />
                    </button>
                </div>
            </div>
            <Drawer toggleOpen={handleDrawerToggle} isOpen={isDrawerIsOpen} />

            {children}
            <ScrollTopButton className={`${scroll ? 'visible' : 'invisible'}`} />
            <Footer />
            <CookieConsentModal />
        </div >
    )
}

const ScrollTopButton = (props) => {
    const handleClick = () => {
        window[`scrollTo`]({ top: 0, behavior: `smooth` })
    }
    return (
        <div
            className={'fixed bottom-1 right-5 transition-opacity duration-500 ease-linear cursor-pointer z-50 ' + props?.className}
            onClick={handleClick} onKeyDown={handleClick} role={'button'} aria-label="button open" tabIndex={0} >
            <StaticImage src={'../../../assets/images/rocket.png'} alt="rocket" />
        </div>
    )
}

export default Layout