import React, {useEffect, useState} from "react";
import { StaticImage } from "gatsby-plugin-image";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";



const Layout = ({ transparentHeader=false, children }) => {

    const [scroll, setScroll] = useState(false)

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
            <Header />
            {children}
            <ScrollTopButton className={`${scroll ? 'visible' : 'invisible'}`}/>
            <Footer />
        </div>
    )
}

const ScrollTopButton = (props) => {
    const handleClick = () => {
        window[`scrollTo`]({ top: 0, behavior: `smooth` })
    }
    return (
        <div
            className={'fixed bottom-1 right-5 transition-opacity duration-500 ease-linear cursor-pointer ' + props?.className}
            onClick={handleClick} onKeyDown={handleClick} role={'button'} aria-label="button open" tabIndex={0} >
            <StaticImage src={'../../../assets/images/rocket.png'} />
        </div>
    )
}

export default Layout