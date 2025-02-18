import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { route } from "../../../routes";
import CustomTitleComponent from "../../common/CustomTitleComponent/CustomTitleComponent"
// import CustomForm from "./CustomForm/CustomForm";
import FormContact from "./WebForm/WebForm";
import './WebForm.css'

const ContactUsForm = () => {

    return (

        <div id="ContactUsForm" className={'flex items-center justify-center relative w-full px-5'}>
            <div className="absolute h-full w-full text-center -z-10">
                <StaticImage src={'../../../assets/images/contact-us-form/contact-us.jpg'} class={'h-full'} alt="background" />
            </div>
            <div className={'container py-20 z-50'}>
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
                    {/* <CustomForm /> */}
                    <FormContact />
                </div>
            </div>
        </div>

    )
}

export default ContactUsForm