import React from "react";
import { Link } from "gatsby";
import { route } from "../../../routes";


const LinksFooter = () => {

        const links = [
            { name: 'home', path: route('home')},
            { name: 'about us', path: route('home.about-us')},
            { name: 'services', path: route('home.services') },
            { name: 'qa', path: '#qa' },
            { name: 'portfolio', path: route('home.portfolio') },
            { name: 'clients', path: route('home.clients') },
            { name: 'contacts', path: route('home.contact-us') },
        ]

    return (
        <ul className={'flex flex-wrap uppercase gap-y-3 gap-9 sm:gap-4 lg:gap-7 ml-auto'}>
            {links.map(link => <li key={link.name} className={'text-white text-[13px] hover:text-[#24d5d1]'}><Link to={link.path}>{link.name}</Link></li>

            )}
        </ul>
    )
}

export default LinksFooter