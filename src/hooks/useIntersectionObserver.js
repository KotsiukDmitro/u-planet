import { useEffect } from "react"

export const useIntersectionObserver = (callback = (entries, observer) => { }, selector, options = { threshold: 0 }) => {

    useEffect(() => {
        const intersectionBlock = document.querySelector(selector)
        const observer = new IntersectionObserver(callback, options)
        observer.observe(intersectionBlock)

        return () => {
            observer.unobserve(intersectionBlock)
        }
    }, [callback, selector, options])
}