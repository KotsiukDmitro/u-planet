import React from "react";
import { Layout } from "../components/Layout";
import { MainInfo, MainInfoMobile, TypesBots } from "../components/SmartAssistantPage";


const SmartAssistantPage = () => {

    return (
        <Layout>
            <MainInfo />
            <MainInfoMobile />
            <TypesBots />
        </Layout>
    )
}

export default SmartAssistantPage