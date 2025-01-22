import React from "react";

const Tasks = () => {

    const tasks = [
        'Not time-consuming Intelligent Customer Support',
        'Acceptance of requests for goods/services',
        'Boosting Sales',
        'Conducting highly targeted surveys, questionnaires, collecting information from customers',
        'Accepting recurring payments through various payment systems (Stripe, Facebook, Apple, Amazon, Paypal etc), monitoring and reminding customers',
        'Perfect substitute for a mobile app - connecting a bot can be more profitable than creating several apps for different platforms and thus reduce the cost of development and raise product\'s flexibility',
        '"Smart" control of Customers Satisfaction',
        'Analysis of user behaviour'
    ]

    return (
        <div className={'px-6 md:px-0 mb-20 md:mb-0'}>
            <h1 className={'mb-8 sm:mb-12 md:mb-20 text-[30px] sm:text-[60px] md:text-[32px] lg:text-[40px] font-light text-[#3e3e3e] leading-none relative after:absolute md:after:w-16 after:h-[3px] after:bg-[#24d5d1] after:-bottom-6 after:left-0'}>Tasks that can be solved <br className={'hidden md:block'} />by chatbots:</h1>
            <ul className={'xl:max-w-[520px] text-[#2b2a2a] font-light text-[19px] sm:text-[32px] md:text-[11px] lg:text-[16px]'}>
                {tasks.map((task, index) => {
                    return <li key={index + task} className={'relative before:absolute before:left-0 before:top-3 sm:before:top-5 md:before:top-1.5 before:lg:top-[9px] before:w-1 before:h-1 before:bg-[#747474] before:rounded-full mb-[30px] md:mb-5 pl-4 lg:pl-6'}>{task}</li>
                })}
            </ul>
        </div>
    )
}

export default Tasks