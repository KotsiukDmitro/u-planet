import React, { useState, useRef, useCallback } from "react";
import { graphql, useStaticQuery } from "gatsby";
import Webform from "gatsby-drupal-webform";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useUserLocation } from "../../../../hooks/useUserLocation";
import { useValidationWebForm } from "../../../../hooks/useValidationWebForm";
import { useRecaptcha } from "../../../../hooks/useRecaptcha";
import { WebformInput, WebformTextarea, ButtonSubmit } from "../CustomWebForms";
import { FormContext } from "../../../../helpers/FormContext";
import SubmitMessage from "../../../common/SubmitMessage/SubmitMessage";
import * as yup from 'yup'
import '../WebForm.css'


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

    const { register, watch, formState: { touchedFields } } = useForm({
        resolver: yupResolver(validationSchema),
        mode: "onBlur"
    })


    const formRef = useRef(null)
    const token = useRef(null)
    const validate = useValidationWebForm(validationSchema)
    const { ip, location, getUserLocation } = useUserLocation()
    const [validationErrors, setValidationErrors] = useState([])
    const [isFormSubmitted, setFormSubmitted] = useState(false)
    const [isSubmitSuccesses, setSubmitSuccesses] = useState(false)
    const [isSubmitMessageVisible, setSubmitMessageVisible] = useState(false)
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
        setSubmitMessageVisible(false)
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

    const getInputClasses = (fieldName) => {
        const inputValue = watch(fieldName)
        const inputErrors = validationErrors.filter(err => err.name === fieldName)
        const value = inputValue?.trim() || ''
        const isTouched = touchedFields[fieldName]
        const hasError = inputErrors.length || (isTouched && value === '')

        if (hasError) {
            return "border-red-700 focus:border-red-700 focus:ring-red-700 focus:shadow-sm focus:shadow-red-400"
        }
        if (isTouched) {
            return "border-green-800 focus:border-green-800 focus:ring-green-800 focus:shadow-sm focus:shadow-green-400"
        }
        return "border-gray-300 focus:border-blue-700 focus:ring-blue-700 focus:shadow-sm focus:shadow-blue-400"
    }

    return (
        <FormContext.Provider value={{ register, validationErrors, getInputClasses }}>
            <SubmitMessage success={isSubmitSuccesses} visible={isSubmitMessageVisible} setVisible={setSubmitMessageVisible} />
            {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
            <div onFocus={handleFocus}>
                <Webform
                    className={webformClass}
                    webform={webformContent.webformWebform}
                    endpoint={process.env.GATSBY_API_WEBFORM_SUBMIT_URL}
                    onError={() => {
                        setFormSubmitted(false)
                        setSubmitSuccesses(false)
                        setSubmitMessageVisible(true)
                    }}
                    onSuccess={() => {
                        setFormSubmitted(false)
                        setSubmitSuccesses(true)
                        setSubmitMessageVisible(true)
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
                <div className={'recaptcha-message text-gray-500 text-center mt-8 sm:mt-14 font-semibold text-xs'}>
                    This site is protected by reCAPTCHA and the Google&nbsp;
                    <a href={'https://policies.google.com/privacy?hl=en'} target={'_blank'} rel={'noopener noreferrer'} 
                    className={'text-[#24d5d1]'}>
                        Privacy Policy</a> and&nbsp;
                    <a href={'https://policies.google.com/terms?hl=en'} target={'_blank'} rel={'noopener noreferrer'}
                    className={'text-[#24d5d1]'}>
                        Terms of Service
                    </a> apply.
                </div>
            </div>
        </FormContext.Provider>
    )
}

export default FormContact