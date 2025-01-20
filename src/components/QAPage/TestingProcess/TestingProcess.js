import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import General from "./components/General";
import WebProjects from "./components/WebProjects";
import MobileApp from "./components/MobileApp";
import TestAutomation from "./components/TestAutomation";
import * as s from './testingProcess.module.css'


const TestingProcess = () => {

    return (
        <div className={'bg-[#e7e8e9] pt-10'}>
            <div className={'flex md:gap-5 max-w-[1170px] w-full m-auto mb-10'}>
                <div className={s.img}>
                    <StaticImage src={'../../../assets/images/qa/quality-target.png'} alt="quality-target" loading={'lazy'} quality={100} />
                </div>
                <div className={s.container}>
                    <div className={'text-[#5E5E5E] text-[16px] sm:text-[14px] mb-10'}>
                        <h2 className={'text-[24px] sm:text-[42px] mb-3 sm:mb-10 font-bold sm:font-normal'}>The testing process</h2>
                        <p className={'leading-[25px] mb-5 sm:mb-8'}>
                            is a critical part of the software development cycle in our company. For each project, depending on its complexity and requirements, an individual testing plan is created. This plan allows us to release a product of the highest quality, while saving critical development time and resources.
                        </p>
                        <p className={'mb-5 sm:mb-10'}>
                            Depending on the kind of the developing project, we apply the following testing types:
                        </p>
                        <p>..................</p>
                    </div>

                    <General />
                    <WebProjects />
                    <MobileApp />
                    <TestAutomation />
                </div>
            </div>
        </div>
    )
}

export default TestingProcess