import React from "react";

const WebProjects = () => {

    const advantages = [
{
    name: 'Cross-browser and cross-platform testing',
    body: 'an identification of defects and differences in system behavior when the user interacts with the product in various operating systems, browsers and on different devices. As an auxiliary tool BrowserStack service is used.'
},
{
    name: 'Responsive testing',
    body: 'checking UI project on screens of different devices both desktop and mobile (mobile phones, tablets.) with different resolutions and diagonals. Checking User Experience points on PageSpeed Insights.'
},
{
    name: 'Code quality test',
    body: 'checking the validity and conformity of W3C standards, HTML and CSS validation, searching for broken links.'
},
{
    name: 'Client-side performance optimization test',
    body: 'a testing process, where the page download speed is being verified and also the optimization of CSS and JS, the optimization of images, the presence of caching of static content, use of CDN, etc. For this kind of testing the tools are used: GTMetrix, Google Page Speed and others.'
},

    ]

    return (
        <div className={'mb-10'}>
        <h4 className={'text-[21px] sm:text-[24px] text-[#22bfb7] font-bold uppercase mb-2 sm:mb-5'}>for web projects:</h4>
        {advantages.map(advantage => {
            return <p key={'for web projects' + advantage.name} className={'text-[16px] sm:text-[14px] text-[#3A3A3A] mb-6 leading-[25px]'}>
                <strong>{advantage.name} - </strong>
                <span>{advantage.body}</span>
            </p>
        })}
        </div>
        

    )
}

export default WebProjects