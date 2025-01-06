const routes = {

    // Pages
    'home': {
        path: '/'
    },

    // Anchors
    'home.about-us': {
        path: '/#AboutUs'
    },
    'home.contact-us': {
        path: '/#ContactUs'
    },
    'home.portfolio': {
        path: '/#Portfolio'
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
    }
}


export const route = (routeName) => {
    return routes.hasOwnProperty(routeName) ? routes[routeName].path : '#'
}