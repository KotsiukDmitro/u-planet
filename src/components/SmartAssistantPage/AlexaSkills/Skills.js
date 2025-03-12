import React from "react";
import CustomButton from '../../common/CustomButton/CustomButton'
import { Link } from "gatsby";
import { route } from "../../../routes";

const Skills = () => {

    const skills = [
        'The Skills are voice driven applications for Alexa. Users invoke them using specific keywords. Custom Skills can interact with any web service and Alexa can be integrated with your service easily.',
        'Handling an interaction between Alexa and the server side of the Skill in a cloud based service makes possible to integrate the Skill with external APIs in easy and secure way.',
        'Alexa\'s built-in capability to connect the account with the Alexa-enabled device makes possible to personalize user\'s stored data and to login with social media, for instance, Facebook.',
        'Present your customers an easy and natural way to interact with your service. Wherever they need to reach you all they have to do is to ask Alexa.',
        'Uplanet is ready to help you to implement your own virtual assistant, whether chatbot, messenger or Alexa voice assistant to deliver effective customer experience for your service.'

    ]

    return (
        <div className={'px-6 md:px-0 mb-20 md:mb-0 xl:max-w-[585px]'}>
            <h1 className={'mb-8 sm:mb-12  text-[30px] sm:text-[60px] md:text-[32px] xl:text-[40px] font-light text-[#3e3e3e] leading-none relative after:absolute md:after:w-16 after:h-[3px] after:bg-greenCustom after:-bottom-6 after:left-0'}>Want to give your brand a voice?<br className={'hidden md:block'} />Create Alexa Skills with Uplanet!</h1>

            <p className={'font-bold mb-8  text-[17px] sm:text-[32px] md:text-[12px] lg:text-[14px] xl:text-[16px]'}>
                Voice activation comes to the fore in any life situation. Let your customers be in touch with you every minute they need! Make a conversation with your audience more natural. Give your brand a voice with Amazon Alexa.
            </p>

            <ul className={'text-[#2b2a2a] font-light text-[17px] sm:text-[32px] md:text-[12px] lg:text-[14px] xl:text-[16px] mb-9'}>
                {skills.map((task, index) => {
                    return <li key={index + task} className={'mb-[30px] md:mb-4'}>{task}</li>
                })}
            </ul>
            <div className={'mb-9 text-center md:text-left'}>
                <Link to={route('home.contact-us')}>
                    <CustomButton classNameButton='uppercase !text-[18px]'>create my skill</CustomButton>
                </Link>
            </div>
            <div className={'text-[20px] font-semibold text-[#27d3d3]'}>
                We can help your business to reach more customers by implementing your own top-notch, easy integrated and effective solution.
            </div>
        </div>

    )
}

export default Skills