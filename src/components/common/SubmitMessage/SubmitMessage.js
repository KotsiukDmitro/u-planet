import React, { useEffect } from 'react'
import { StaticImage } from "gatsby-plugin-image";


const SubmitMessage = ({ success, visible, setVisible }) => {

    useEffect(() => {
        let hideMessage
        if (visible) {
            hideMessage = setTimeout(() => setVisible(false), 5000)
        }
        return () => {
            clearTimeout(hideMessage)
        }
    }, [visible, setVisible])

    const message = success ? 'Success! Your message was sent!' : 'Error! Message not sent!'

    return (
        <>
            {visible &&
                <div
                    className={`text-lg mt-5  text-center flex items-center justify-center ${success ? 'text-[#24d5d1]' : 'text-[#C34C4C]'}`}>
                    {success
                        ? <StaticImage src={'../../../assets/images/icons/submit-success.svg'} quality={100} alt={'submit-success'} />
                        : <StaticImage src={'../../../assets/images/icons/submit-error.svg'} quality={100} alt={'submit-error'} />
                    }
                    {message}
                </div>
            }
        </>
    )
}

export default SubmitMessage
