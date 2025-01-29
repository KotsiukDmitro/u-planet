import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { route } from "../../../routes";
import CustomTitleComponent from "../../common/CustomTitleComponent/CustomTitleComponent"
import CustomButton from "../../common/CustomButton/CustomButton";
import * as yup from "yup";



const ContactUsForm = () => {

    const schema = yup.object().shape({
        name: yup.string().required("Name is required"),
        email: yup.string().email("Invalid email").required("Email is required"),
        company: yup.string().required("Company is required"),
        message: yup.string().required("Message is required"),
        recaptcha: yup.boolean()
            .oneOf([true], "Please confirm that you are not a bot.")
            .required("Confirmation is required"),
        privacyPolicy: yup.boolean()
            .oneOf([true], "Privacy policy field is required.")
            .required(),
    })

    const { register, handleSubmit, formState: { errors, touchedFields, isSubmitted }, reset, clearErrors, } = useForm({
        resolver: yupResolver(schema),
        mode: "onBlur"
    })

    const onSubmit = () => {
        alert("Form submitted successfully!")
        reset()
    }

    const handleReset = () => {
        reset()
        clearErrors()
    }

    const getInputClasses = (fieldName) => {
        if (errors[fieldName]) {
          return "border-red-700 focus:border-red-700 focus:ring-red-700 focus:shadow-sm focus:shadow-red-400"
        }
        if (touchedFields[fieldName] || isSubmitted) {
          return "border-green-800 focus:border-green-800 focus:ring-green-800 focus:shadow-sm focus:shadow-green-400"
        }
        return "border-gray-300 focus:border-blue-700 focus:ring-blue-700 focus:shadow-sm focus:shadow-blue-400"
      }

    return (

        <div id="ContactUsForm" className={'flex items-center justify-center relative w-full px-5'}>
            <div className="absolute h-full w-full text-center -z-10">
                <StaticImage src={'../../../assets/images/contact-us-form/contact-us.jpg'} class={'h-full'} alt="background" />
            </div>
            <div className={'py-20 z-50 max-w-[1170px] xl:min-w-[1170px]'}>
                <div className={''}>
                    <CustomTitleComponent name='Contact Us' />
                    <div className={'flex flex-col lg:flex-row items-start lg:items-center mt-14 sm:mt-28 mb-10'}>
                        <div className={'flex flex-col relative mb-10 lg:mb-0'}>
                            <span className={'absolute right-0 sm:-right-2.5 -top-4 sm:-top-6 sm:text-[26px] font-bold text-[#24d5d1]'}>Get in touch with us:</span>
                            <StaticImage src={'../../../assets/images/contact-us-form/logo-contact.png'} alt="logo" className={'w-72 sm:w-full'} objectFit="contain" />
                        </div>
                        <div className={'flex flex-col lg:flex-row gap-10 lg:ml-auto lg:mr-10'}>
                            <a href={route('skype')} className={'flex items-center justify-center gap-2'}>
                                <StaticImage src={'../../../assets/images/contact-us-form/phone.png'} alt="phone" />
                                <span className={'hover:text-[#24d5d1]'}>+1(720)951-9470</span>
                            </a>

                            <div className={'flex items-center justify-center gap-2'}>
                                <StaticImage src={'../../../assets/images/contact-us-form/envelope.png'} alt="envelope" />
                                <span className={'hover:text-[#24d5d1]'}>info@uplanet.biz</span>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className={'mb-10'}>
                        <div className={'flex flex-col lg:flex-row gap-5 mb-5 lg:mb-10'}>
                            <div className={'flex-1'}>
                                  <input
                                    type="text"
                                    placeholder="NAME"
                                    {...register("name")}
                                    className={`text-[14px] w-full px-3 py-2 border rounded-md outline-none ${getInputClasses('name')}`}
                                />
                                {errors.name && <p className={'text-red-700 text-sm'}>{errors.name.message}</p>}
                            </div>
                            <div className={'flex-1'}>
                                <input
                                    type="email"
                                    placeholder="EMAIL"
                                    {...register("email")}
                                    className={`text-[14px] w-full px-3 py-2 border rounded-md outline-none ${getInputClasses('email')}`}
                                />
                                {errors.email && <p className={'text-red-700 text-sm'}>{errors.email.message}</p>}
                            </div>
                            <div className={'flex-1'}>
                                <input
                                    type="text"
                                    placeholder="COMPANY"
                                    {...register("company")}
                                    className={`text-[14px] w-full px-3 py-2 border rounded-md outline-none ${getInputClasses('company')}`}
                                />
                                {errors.company && <p className={'text-red-700 text-sm'}>{errors.company.message}</p>}
                            </div>
                        </div>
                        <div className={'mb-5'}>
                            <textarea
                                placeholder="MESSAGE"
                                {...register("message")}
                                className={`w-full px-3 py-2 border rounded-md outline-none ${getInputClasses('message')}`}
                                rows="4"
                            />
                            {errors.message && <p className={'text-red-700 text-sm'}>{errors.message.message}</p>}
                        </div>
                        <div className={'lg:flex items-center justify-between gap-2 xl:gap-10'}>
                            <div className={'flex flex-col sm:flex-row gap-2 xl:gap-20 justify-between mb-5 lg:mb-0'}>
                                <label htmlFor="recaptcha" className={'relative border border-gray-300 rounded-md outline-none p-3 flex items-center justify-between w-[300px] cursor-pointer'}>
                                    <div className={'flex items-center'}>
                                        <input
                                            type="checkbox"
                                            id="recaptcha"
                                            {...register("recaptcha")}
                                            className={'mr-2 cursor-pointer'}
                                        />
                                        <span >I'm not a robot</span>
                                    </div>
                                    <div className={'flex flex-col items-center'}>
                                        <StaticImage src={'https://www.gstatic.com/recaptcha/api2/logo_48.png'} className={'w-8'} alt="recaptcha" />
                                        <span className={'text-[#555] text-[10px]'}>reCAPTCHA</span>
                                        <span className={'text-[8px] text-[#555]'}>
                                            <a href="https://policies.google.com/privacy?hl=en" target={'_blank'} rel={'noopener noreferrer'} className={'hover:underline'}>Privacy</a> -
                                            <a href="https://policies.google.com/terms?hl=en" target={'_blank'} rel={'noopener noreferrer'} className={'hover:underline'}>Terms</a>
                                        </span>
                                    </div>
                                </label>
                                {errors.recaptcha && (
                                    <p className={'text-red-700 text-sm absolute bottom-20'}>{errors.recaptcha.message}</p>
                                )}
                                <div className={'flex items-center relative cursor-pointer'}>
                                    <input
                                        type="checkbox"
                                        id="privacyPolicy"
                                        {...register("privacyPolicy")}
                                        className={'mr-2 cursor-pointer'}
                                    />
                                    <label htmlFor="privacyPolicy" className={'max-w-[300px] text-[13px] text-gray-500 cursor-pointer'}>
                                        Check here to send the form and to indicate that you have read and agree to our <Link to={route('privacy-policy')} className={'text-[#24d5d1]'}>Privacy Policy</Link>. We are committed to respecting your privacy.
                                    </label>

                                    {errors.privacyPolicy && (
                                        <p className={'text-red-700 text-sm absolute -bottom-10 left-5'}>{errors.privacyPolicy.message}</p>
                                    )}
                                </div>
                            </div>
                            <div className={'flex flex-col items-center lg:flex-row gap-2 xl:gap-20'}>
                                <button onClick={handleReset} className={'text-[14px] text-[#5F6467] underline hover:no-underline hover:cursor-pointer'}>Clear Form</button>
                                <div className={'xl:mr-10'}>
                                    <CustomButton>Send Message</CustomButton>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default ContactUsForm