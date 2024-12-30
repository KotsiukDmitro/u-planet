import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import CustomTitleComponent from "../../common/CustomTitleComponent/CustomTitleComponent";

const ContactUsForm = () => {

    return (

        <div className={'flex items-center justify-center relative w-full'}>
            <div className="absolute h-full w-full text-center -z-10">
                <StaticImage src={'../../../assets/images/contact-us-form/contact-us.jpg'} class={'h-full'} alt="background" />
            </div>
            <div className={'py-20 z-50 max-w-[1170px] xl:min-w-[1170px]'}>
                <div className={''}>
                    <CustomTitleComponent name='Contact Us' />
                    <div className={'flex items-center mt-28'}>
                            <div className={'flex flex-col relative'}>
                                <span className={'absolute -right-2.5 -top-6 text-[26px] font-bold text-[#24d5d1]'}>Get in touch with us:</span>
                                <StaticImage src={'../../../assets/images/contact-us-form/logo-contact.png'} alt="logo" />
                            </div>
                            <div className={'flex gap-10 ml-auto mr-10'}>
                                <div>+1(720)951-9470</div>
                                <div>info@uplanet.biz</div>
                            </div>
                    </div>
                    <form className={'h-[300px] mb-10'}>

                    </form>
                </div>
            </div>
        </div>

    )
}

export default ContactUsForm