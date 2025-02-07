import { useState } from "react"


export const useUserLocation = () => {

    const [ip, setIP] = useState('')
    const [location, setLocation] = useState('')

    const getUserLocation = async () => {
        if (!ip || !location) {
            try {
                const res = await fetch(process.env.GATSBY_CHECK_LOCATION)
                const response = await res.json()
                setIP(response.ip)
                setLocation(`Country: ${response.country_name}, city: ${response.city}`)
            } catch (error) {
                console.log('Request failed:', error)
            }
        }
    }
    return {
        ip,
        location,
        getUserLocation
    }
}