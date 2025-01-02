import { useState, useEffect } from 'react'

const useWindowSize = ()=> {
    const [width, setWidth] = useState(null)
    useEffect(() => {
        function updateSize() {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', updateSize)
        updateSize()
        return () => {
            window.removeEventListener('resize', updateSize)
        }
    }, [])
    if (!width) return
    return width
}

export default useWindowSize