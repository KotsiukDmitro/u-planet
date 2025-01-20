import { route } from "../routes"


export const links = [
    { name: 'home', path: route('home') },
    { name: 'about us', path: route('home.about-us') },
    { name: 'services', path: route('home.services') },
    { name: 'qa', path: 'qa' },
    { name: 'portfolio', path: route('home.portfolio') },
    {
        name: 'our products',
        children: [
            { name: 'smart assistant', path: '#smart-assistant' },
            { name: 'indoor navigation', path: '#indoor-navigation' },
            { name: 'online streaming', path: '#online-streaming' }
        ]
    },
    { name: 'clients', path: route('home.clients') },
    { name: 'contacts', path: route('home.contact-us') },
]