import React from "react";
import { Link } from "gatsby";
import { route } from "../../../routes";


const LinksFooter = () => {

    const links = [
        { name: 'home', path: route('home')},
        { name: 'about us', path: '#' },
        { name: 'services', path: '#' },
        { name: 'qa', path: '#' },
        { name: 'portfolio', path: '#' },
        { name: 'clients', path: '#' },
        { name: 'contacts', path: '#' },
    ]

    return (
        <ul className={'flex uppercase gap-7 ml-auto'}>
            {links.map(link => <li key={link.name} className={'text-white text-[13px] hover:text-[#24d5d1]'}><Link to={link.path}>{link.name}</Link></li>

            )}
        </ul>
    )
}

export default LinksFooter