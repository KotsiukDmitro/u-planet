import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Tasks from "./Tasks";

const TasksForBots = () => {

    return (
        <>
            <div className={'relative w-full h-full flex justify-center items-center pt-24 pb-20 px-5 mb-20'}>
                <div className={'absolute w-full h-full'}>
                    <StaticImage src={'../../../assets/images/smart-assistant/tasks/tasks-bg.png'}
                        layout="fullWidth" alt="Background" className={'inset-0 w-full h-full'} loading={'lazy'} quality={100} objectFit="cover"
                    />
                </div>

                <div className={'xl:max-w-[1200px] md:w-full grid items-center  md:grid-cols-2 justify-between md:gap-5 z-10'}>
                    <div className={'hidden md:block'}>
                        <Tasks />
                    </div>
                    <div className={'m-auto'}>
                        <StaticImage src={'../../../assets/images/smart-assistant/tasks/tasks.png'} loading={'lazy'} quality={100} alt="tasks" />
                    </div>
                </div>

            </div>
            <div className={'block md:hidden'}>
                <Tasks />
            </div>
        </>
    )
}

export default TasksForBots