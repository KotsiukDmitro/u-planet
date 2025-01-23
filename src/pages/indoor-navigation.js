import React from "react";
import { Layout } from "../components/Layout";
import { MainInfo, EasyToNavigate, WhatIndoorNav } from "../components/IndoorNavigationPage";



const IndoorNavigationPage = () => {

    return (
        <Layout>
            <MainInfo />
            <EasyToNavigate />
            <WhatIndoorNav />
        </Layout>
    )
}

export default IndoorNavigationPage