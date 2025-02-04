import {useEffect, useState} from 'react'

export function useCheckLink(url) {
    const [isActive, setActive] = useState(false)
    useEffect(() => {
        if (url) {
            const formatUrl = new URL(url)
            formatUrl.protocol = 'https:';
            fetch(formatUrl.href, { mode: 'no-cors', method: 'HEAD'})
                .then(() => setActive(true))
                .catch(() => setActive(false))
        }

    }, [url])

    return isActive
}