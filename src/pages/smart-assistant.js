import React from "react";
import { Layout } from "../components/Layout";
import { MainInfo, MainInfoMobile, TypesBots, TasksForBots, Advantages, AlexaSkills } from "../components/SmartAssistantPage";


const SmartAssistantPage = () => {

    return (
        <Layout>
            <MainInfo />
            <MainInfoMobile />
            <TypesBots />
            <TasksForBots />
            <Advantages />
            <AlexaSkills />
        </Layout>
    )
}

export default SmartAssistantPage