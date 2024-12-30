import React from "react";
import { Link } from "gatsby";
import { route } from "../../../routes";


const Links = ({scroll}) => {

    const links = [
        { name: 'home', path: route('home')},
        { name: 'about us', path: route('home.about-us')},
        { name: 'services', path: '#services' },
        { name: 'qa', path: '#qa' },
        { name: 'portfolio', path: '#portfolio' },
        { name: 'our products', path: '#products' },
        { name: 'clients', path: '#clients' },
        { name: 'contacts', path: '#contacts' },
        { name: '+1(720)951-9470', path: '#phone' },
    ]

    return (
        <ul className={'flex uppercase gap-5 ml-auto'}>
            {links.map(link => <li key={link.name} className={[`text-slate-100 opacity-70 text-xs hover:text-white ${scroll && '!text-[#555] hover:!text-[#24d5d1]'}`].join(' ')}><Link to={link.path} activeClassName={'text-[#24d5d1]'} >{link.name}</Link></li>

            )}
        </ul>
    )
}

export default Links