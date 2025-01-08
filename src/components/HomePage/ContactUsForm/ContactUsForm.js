import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
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

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
        mode: "onBlur"
    })

    const onSubmit = () => {
        alert("Form submitted successfully!")
        reset()
    }

    const handleReset = () => {
        reset()
    }

    return (

        <div className={'flex items-center justify-center relative w-full'}>
            <div className="absolute h-full w-full text-center -z-10">
                <StaticImage src={'../../../assets/images/contact-us-form/contact-us.jpg'} class={'h-full'} alt="background" />
            </div>
            <div className={'py-20 z-50 max-w-[1170px] xl:min-w-[1170px]'}>
                <div className={''}>
                    <CustomTitleComponent name='Contact Us' />
                    <div className={'flex items-center mt-28 mb-10'}>
                        <div className={'flex flex-col relative'}>
                            <span className={'absolute -right-2.5 -top-6 text-[26px] font-bold text-[#24d5d1]'}>Get in touch with us:</span>
                            <StaticImage src={'../../../assets/images/contact-us-form/logo-contact.png'} alt="logo" />
                        </div>
                        <div className={'flex gap-10 ml-auto mr-10'}>
                            <div>+1(720)951-9470</div>
                            <div>info@uplanet.biz</div>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className={'mb-10'}>
                        <div className={'flex gap-5 mb-10'}>
                            <div className={'flex-1'}>
                                <input
                                    type="text"
                                    placeholder="NAME"
                                    {...register("name")}
                                    className={`text-[14px] w-full px-3 py-2 border rounded-md outline-none ${errors.name ? "border-red-700" : "border-gray-300"}`}
                                />
                                {errors.name && <p className={'text-red-700 text-sm'}>{errors.name.message}</p>}
                            </div>
                            <div className={'flex-1'}>
                                <input
                                    type="email"
                                    placeholder="EMAIL"
                                    {...register("email")}
                                    className={`text-[14px] w-full px-3 py-2 border rounded-md outline-none ${errors.email ? "border-red-700" : "border-gray-300"}`}
                                />
                                {errors.email && <p className={'text-red-700 text-sm'}>{errors.email.message}</p>}
                            </div>
                            <div className={'flex-1'}>
                                <input
                                    type="text"
                                    placeholder="COMPANY"
                                    {...register("company")}
                                    className={`text-[14px] w-full px-3 py-2 border rounded-md outline-none ${errors.company ? "border-red-700" : "border-gray-300"
                                        }`}
                                />
                                {errors.company && <p className={'text-red-700 text-sm'}>{errors.company.message}</p>}
                            </div>
                        </div>
                        <div className={'mb-5'}>
                            <textarea
                                placeholder="MESSAGE"
                                {...register("message")}
                                className={`w-full px-3 py-2 border rounded-md outline-none ${errors.message ? "border-red-700" : "border-gray-300"}`}
                                rows="4"
                            />
                            {errors.message && <p className={'text-red-700 text-sm'}>{errors.message.message}</p>}
                        </div>
                        <div className={'flex items-center justify-between'}>
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
                                    <StaticImage src={'https://www.gstatic.com/recaptcha/api2/logo_48.png'} className={'w-8'} />
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
                                    Check here to send the form and to indicate that you have read and agree to our Privacy Policy. We are committed to respecting your privacy.
                                </label>

                                {errors.privacyPolicy && (
                                    <p className={'text-red-700 text-sm absolute -bottom-10 left-5'}>{errors.privacyPolicy.message}</p>
                                )}
                            </div>

                            <span onClick={handleReset} className={'text-[14px] text-[#5F6467] underline hover:no-underline hover:cursor-pointer'}>Clear Form</span>
                            <div className={'mr-10'}>
                                <CustomButton>Send Message</CustomButton>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default ContactUsForm