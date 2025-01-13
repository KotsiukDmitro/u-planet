import React from "react";
import { Link } from "gatsby";
import { route } from "../../../routes";


const Links = ({ scroll }) => {

    const links = [
        { name: 'home', path: route('home') },
        { name: 'about us', path: route('home.about-us') },
        { name: 'services', path: route('home.services') },
        { name: 'qa', path: '#qa' },
        { name: 'portfolio', path: route('home.portfolio') },
        { name: 'our products', path: '#products' },
        { name: 'clients', path: route('home.clients') },
        { name: 'contacts', path: route('home.contact-us') },
    ]

    return (
        <ul className={'flex uppercase gap-5 ml-auto'}>
            {links.map(link => <li key={link.name} className={[`text-slate-100 opacity-70 text-xs hover:text-white ${scroll && '!text-[#555] hover:!text-[#24d5d1]'}`].join(' ')}><Link to={link.path} activeClassName={'text-[#24d5d1]'}>{link.name}</Link></li>
            )}
            <li className={[`text-slate-100 opacity-70 text-xs hover:text-white ${scroll && '!text-[#555] hover:!text-[#24d5d1]'}`].join(' ')}><a href={route('skype')}>+1(720)951-9470</a></li>
        </ul>
    )
}

export default Links