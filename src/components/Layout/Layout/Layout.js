import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";



const Layout = ({ children }) => {

    return (
        <div className={'min-h-screen flex flex-col'}>
            <Header />
            {children}
            <div className={'fixed bottom-1 right-5 cursor-pointer'}>
                <StaticImage src={'../../../assets/images/rocket.png'} />
            </div>

            <Footer />
        </div>
    )
}

export default Layout