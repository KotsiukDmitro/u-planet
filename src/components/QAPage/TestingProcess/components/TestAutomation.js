import React from "react";

const TestAutomation = () => {

    const list = [
        <><strong>Functional testing</strong></>,
        <><strong>UI testing</strong></>,
        <><strong>Cross-browser and cross-platform testing</strong> - an automated check of the testing project that it works equally well on different platforms and in different browsers</>,
        <><strong>Regression testing</strong> - an automated check of the testing project that it works equally well on different platforms and in different browsers</>
    ]

    return (
        <div className={'mb-10'}>
            <h4 className={'text-[21px] sm:text-[24px] text-[#22bfb7] font-bold uppercase mb-2 sm:mb-5'}>Test automation:</h4>
            <div className={'text-[16px] sm:text-[14px] text-[#3A3A3A]'}>
                <p className={'mb-5'}>
                    For more effective implementation of testing tasks it is advisable to use a test automation in some types of testing, it significantly reduces the time for bugs` identification and manual labor. With the help of tools like <strong>Selenium WebDriver, Selenide</strong>and <strong>TestNG</strong> we can automate a work of different browsers (Chrome, Firefox, Opera, Edge) on various platforms (Windows, Linux, Mac OS, Android, iOS) and devices (desktop, mobile devices and tablets) which gives us the opportunity to conduct such kinds of testing in automatic mode:
                </p>
                <ul className={'space-y-1 mb-5'}>
                    {list.map((item, index) => <li key={'TestAutomation' + index} className={'relative before:absolute before:left-0 before:top-2 before:w-[5px] before:h-[5px] before:bg-[#747474] before:rounded-full pl-4'}>{item}</li>)}
                </ul>
                <p className={'mb-5'}>
                    For the test automation of mobile applications, we use a tool like <strong>Calabash</strong> and <strong>Appium</strong> in conjunction with <strong>Selenium WebDriver</strong>, it allows to run automated tests on platforms such as Android and iOS, as on "live" devices as well as on various emulators, you can automate both native apps and hybrids.
                </p>
                <p className={'mb-5'}>
                    For the test automation of back-end services (REST / SOAP), we use a tool such as <strong>Chakram</strong> REST API Framework, which, in conjunction with <strong>Jenkins CI</strong>, allows to verify the requests to the API server, and also check the responses according to pre-established criteria.
                </p>
                <p className={'mb-5'}>
                    For time saving of the implementation of automated tests, we use a tool like <strong>Selenium Grid</strong>, it allows to parallelize tests running and to run the same test in several browsers at a time on one or more local and/or remote machines or mobile devices.
                </p>
                <p>
                    In the end, tools like <strong>Allure Report</strong> and <strong>Jenkins CI</strong> allow us to get a clear picture of all the automated test results - what tests were successful and what were not. With the help of <strong>Jenkins</strong>, we implement a continuous integration system where our tests are run on an earlier specified schedule or scenario, you can configure tests run directly on a centralized server or on remote machines or mobile devices, and the results of the tests can be received by various convenient ways.
                </p>

            </div>
        </div>


    )
}

export default TestAutomation