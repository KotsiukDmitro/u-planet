import React from "react";
import { Layout } from "../components/Layout";
import { MainInfo, Platform, Services, Dream } from "../components/ShopifyPage";


const ShopifyDevPage = ()=> {

    return (
        <Layout>
            <MainInfo />
            <Platform />
            <Services />
            <Dream />
        </Layout>
    )
}

export default ShopifyDevPage