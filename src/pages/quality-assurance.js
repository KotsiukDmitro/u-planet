import React from "react";
import { Layout } from '../components/Layout'
import { MainInfo, TestingProcess } from "../components/QAPage";

const QAPage = () => {

    return (
        <Layout>
            <MainInfo />
            <TestingProcess />
        </Layout>
    )
}

export default QAPage