import React from "react";
import { Layout } from "../components/Layout";
import {
    MainInfo,
    EasyToNavigate,
    WhatIndoorNav,
    HowItWork,
    WhyChooseUs,
    Advantages,
    PremisesForPlatform, 
    WhoUses
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
            <PremisesForPlatform />
            <WhoUses />
        </Layout>
    )
}

export default IndoorNavigationPage