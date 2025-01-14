import React from 'react'
import {Link} from 'gatsby'
import { route } from '../../../routes'
import { StaticImage } from 'gatsby-plugin-image'


const HeaderLogo = () => {
    return (
        <Link to={route('home')}>
            <StaticImage src={'../../../assets/images/logo-dark.png'} alt='logo' className={'w-36 lg:w-full'}/>
        </Link>
    )
}

export default HeaderLogo