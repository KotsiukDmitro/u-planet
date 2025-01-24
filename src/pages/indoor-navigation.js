import React from "react";
import { Layout } from "../components/Layout";
import {
    MainInfo,
    EasyToNavigate,
    WhatIndoorNav,
    HowItWork,
    WhyChooseUs,
    Advantages
} from "../components/IndoorNavigationPage";



const IndoorNavigationPage = () => {

    return (
        <Layout>
            <MainInfo />
            <EasyToNavigate />
            <WhatIndoorNav />
            <HowItWork />
            <WhyChooseUs />
            <Advantages />
        </Layout>
    )
}

export default IndoorNavigationPage