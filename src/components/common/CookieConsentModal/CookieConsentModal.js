import React from 'react'
import {CookieConsent} from 'react-cookie-consent'
import {Link} from 'gatsby'
import {route} from '../../../routes'
import * as style from './CookieConsentModal.module.css'

const CookieConsentModal = () => {

    return (
        <CookieConsent
            disableStyles={true}
            buttonText="ACCEPT"
            cookieName="gatsby-gdpr-google-tagmanager"
            buttonClasses={['text-sm font-bold text-white pl-5 mt-4 lg:mt-0', style.cookieConsentButton].join(' ')}
            containerClasses={['flex flex-col lg:flex-row fixed text-center lg:text-start items-center z-50 py-5 lg:py-0 px-7 lg:px-8 bottom-28  right-0 left-0 m-auto bg-greenCustom w-[260px] h-[220px] lg:w-[905px] lg:h-[60px] rounded-[26px] lg:rounded-[45px] shadow-md', style.cookieConsentContainer].join(' ')}
            contentClasses={'text-sm font-normal text-[#EAEAEA]'}
            location='none'
        >
            <div className={'lg:flex'}>
                We use cookies to give you the best experience possible. By continuing we'll assume you're on board with
                our.
                <div className={'flex flex-col lg:block lg:whitespace-nowrap lg:m-auto underline'}>
                    <Link to={route('cookie-policy')} className={'mb-1 lg:mb-0 lg:mr-4'}>Cookie Policy</Link>
                    <Link to={route('privacy-policy')} className={'mb-1 lg:mb-0 lg:mr-4'}>Privacy Policy</Link>
                    <Link to={route('terms-conditions')} className={'lg:mr-4'}>Terms & Conditions</Link>
                </div>
            </div>
        </CookieConsent>
    )
}

export default CookieConsentModal
