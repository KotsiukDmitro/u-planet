const routes = {

    // Pages
    'home': {
        path: '/'
    },
    'qa': {
        path: '/quality-assurance'
    },
    'shopify': {
        path: '/shopify-development'
    },
    'privacy-policy': {
        path: '/privacy-policy'
    },
    'cookie-policy': {
        path: '/cookie-policy'
    },
    'terms-conditions': {
        path: '/terms-conditions'
    },
    

    // Anchors
    'home.about-us': {
        path: '/#AboutUs'
    },
    'home.services': {
        path: '/#OurServices'
    },
    'home.contact-us': {
        path: '/#ContactUsForm'
    },
    'home.portfolio': {
        path: '/#Portfolio'
    },
    'home.clients': {
        path: '/#OurClients'
    },
    'blog': {
        path: '/blog'
    },

    // Socials Links
    'facebook': {
        path: 'https://www.facebook.com/pages/uPlanet-Inc/799373986834372?fref=ts'
    },
    'linked-in': {
        path: 'https://www.linkedin.com/company/uplanet-inc'
    },
    'twitter': {
        path: 'https://twitter.com/uPlanetCo'
    },
    'skype': {
        path: 'skype:uplanet.inc'
    },
    'phone': {
        path: 'tel:+1 (647) 302 1020'
    },

    //Our products
    'smart-assistant': {
        path: '/smart-assistant'
    },
    'indoor-navigation': {
        path: '/indoor-navigation'
    },
    'online-streaming': {
        path: '/online-streaming'
    },

}


export const route = (routeName) => {
    return routes.hasOwnProperty(routeName) ? routes[routeName].path : '#'
}