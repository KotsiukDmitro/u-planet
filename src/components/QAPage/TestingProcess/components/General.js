import React from "react";

const General = () => {

    const advantages = [
{
    name: 'Testing of documentation',
    body: 'is used here at an early stage of software development, verifying: completeness, correctness, consistency, feasibility, verifiability, prioritization, necessity, etc.'
},
{
    name: 'Functional testing',
    body: 'checking the implementation of the functional application content for compliance and generally accepted standards.'
},
{
    name: 'UI testing',
    body: 'checking in what manner the various user interface elements (toolbars, menus, images, dialogues, input fields, list boxes, buttons, etc.) react to actions of a user.'
},
{
    name: 'Usability testing',
    body: 'checking usability, the detection of defects in the navigation and interface, as well as needless or insufficient information conten'
},
{
    name: 'Stress testing',
    body: 'checking of stability and fault tolerance of the system under normal operating conditions and peak loads for a long time. We use Apache jMeter tool.'
},
{
    name: 'Testing of localization',
    body: 'in cases when the project provides multilingualism, it is important to check that correct translations are available for all languages'
},
{
    name: 'Regression testing',
    body: 'checking that an improved system works as it follows: implemented improvements do not bring errors to the adjacent functionality and bug fixes haven\'t led to the appearance of a new one.'
},
{
    name: 'Security testing',
    body: 'checking the security of web applications or website. This test is aimed to diagnose the ways of hacking the system, security assessment of the web application or website, as well as risk analysis with an approach to the protection from hackers, the access to confidential data.'
},
{
    name: 'API testing',
    body: 'testing of back-end services (REST / SOAP), checking of server requests and checking the responses received on predetermined criteria'
}
    ]

    return (
        <div className={'mb-10'}>
        <h4 className={'text-[21px] sm:text-[24px] text-[#22bfb7] font-bold uppercase mb-2 sm:mb-5'}>General:</h4>
        {advantages.map(advantage => {
            return <p key={'general' + advantage.name} className={'text-[16px] sm:text-[14px] text-[#3A3A3A] mb-6 leading-[25px]'}>
                <strong>{advantage.name} - </strong>
                <span>{advantage.body}</span>
            </p>
        })}
        </div>
        

    )
}

export default General