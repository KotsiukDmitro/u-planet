import React from "react";
import { Link } from "gatsby";
import { route } from "../../../routes";


const Links = () => {

    const links = [
        { name: 'home', path: route('home')},
        { name: 'about us', path: '#' },
        { name: 'services', path: '#' },
        { name: 'qa', path: '#' },
        { name: 'portfolio', path: '#' },
        { name: 'our products', path: '#' },
        { name: 'clients', path: '#' },
        { name: 'contacts', path: '#' },
        { name: '+1(720)951-9470', path: '#' },
    ]

    return (
        <ul className={'flex uppercase gap-5 ml-auto'}>
            {links.map(link => <li key={link.name} className={'text-[#555] text-xs hover:text-[#24d5d1]'}><Link to={link.path}>{link.name}</Link></li>

            )}
        </ul>
    )
}

export default Links