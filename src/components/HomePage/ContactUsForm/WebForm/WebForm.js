import React, { useState, useRef, useCallback } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { useUserLocation } from "../../../../hooks/useUserLocation";
import { useValidationWebForm } from "../../../../hooks/useValidationWebForm";
import { useRecaptcha } from "../../../../hooks/useRecaptcha";
import Webform from "gatsby-drupal-webform";
import { WebformInput, WebformTextarea, ButtonSubmit } from "../CustomWebForms";


import * as yup from 'yup'

const validationSchema = yup.object({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    message: yup.string().required("Message is required"),
})

const FormContact = ({ webformClass = 'webform', buttonName = 'Send Message' }) => {
    const webformContent = useStaticQuery(graphql`
    query {
      webformWebform(drupal_internal__id: {eq: "contact"}) {
        drupal_internal__id
        elements {
          name
          type
          attributes {
            name
            value
          }
        }
      }
    }
    `)

    const formRef = useRef(null)
    const token = useRef(null)
    const validate = useValidationWebForm(validationSchema)
    const { ip, location, getUserLocation } = useUserLocation()
    const [validationErrors, setValidationErrors] = useState([])
    const [isFormSubmitted, setFormSubmitted] = useState(false)
    const [isSubmitSuccesses, setSubmitSuccesses] = useState(false)
    // const [isSubmitMessageVisible, setSubmitMessageVisible] = useState(false)
    const [executeRecaptcha, handleRecaptchaFocus] = useRecaptcha()
    const handleReCaptchaVerify = useCallback(async () => {
        if (!executeRecaptcha) {
            return
        }
        setFormSubmitted(true)
        token.current = await executeRecaptcha('contact')
    }, [executeRecaptcha])

    const handleFocus = () => {
        handleRecaptchaFocus()
        getUserLocation()
    }

    const validationForm = (event) => {
        // setSubmitMessageVisible(false)
        if (!formRef.current) formRef.current = event.target
        const form = new FormData(event.target)
        const formData = Object.fromEntries(form.entries())
        validate(event, setValidationErrors)
        return validationSchema.isValidSync(formData)
    }

    const Button = () => {
        return (
            <ButtonSubmit buttonName={buttonName} isFormSubmitted={isFormSubmitted} />
        )
    }

    return (
        <div onFocus={handleFocus}>
        <Webform
            className={webformClass}
            webform={webformContent.webformWebform}
            endpoint={process.env.GATSBY_API_WEBFORM_SUBMIT_URL}
            onError={() => {
                setFormSubmitted(false)
                setSubmitSuccesses(false)
                // setSubmitMessageVisible(true)
            }}
            onSuccess={() => {
                setFormSubmitted(false)
                setSubmitSuccesses(true)
                // setSubmitMessageVisible(true)
                formRef?.current.reset()
            }}
            onValidate={(event) => validationForm(event)}
            onSubmit={() => handleReCaptchaVerify()}
            extraData={{ token, location, ip }}
            noValidate={true}
            buttonComponent={Button}
            customComponents={{
                email: WebformInput,
                textfield: WebformInput,
                textarea: WebformTextarea,
            }}
        />
       
    </div>
    )

}

export default FormContact