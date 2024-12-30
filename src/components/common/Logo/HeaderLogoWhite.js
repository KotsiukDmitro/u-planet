import React from 'react'
import {Link} from 'gatsby'
import { route } from '../../../routes'
import { StaticImage } from 'gatsby-plugin-image'


const HeaderLogoWhite = () => {
    return (
        <Link to={route('home')}>
            <StaticImage src={'../../../assets/images/main-logo.png'} alt='logo'/>
        </Link>
    )
}

export default HeaderLogoWhite