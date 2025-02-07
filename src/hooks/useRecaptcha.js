import { useState, useEffect, useCallback } from 'react';

const siteKey = process.env.GATSBY_SITE_RECAPTCHA_PUBLIC_KEY

export function useRecaptcha() {
    const [recaptcha, setRecaptcha] = useState(null)

    const handleRecaptchaFocus = useCallback(() => {
        if (window.grecaptcha) {
            setRecaptcha(window.grecaptcha)
            return
        }

        const script = document.createElement('script')
        script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`
        script.async = true
        script.defer = true
        script.onload = () => {
            if (window.grecaptcha) {
                window.grecaptcha.ready(() => setRecaptcha(window.grecaptcha))
            }
        };

        document.head.appendChild(script)
    }, [])

    useEffect(() => {
        handleRecaptchaFocus()
    }, [handleRecaptchaFocus])

    const executeRecaptcha = useCallback((action) => {
        return new Promise((resolve, reject) => {
            if (recaptcha) {
                recaptcha.execute(siteKey, { action }).then(resolve).catch(reject)
            } else {
                reject(new Error('Recaptcha script not available'))
            }
        });
    }, [recaptcha])

    return [executeRecaptcha, handleRecaptchaFocus]
}
