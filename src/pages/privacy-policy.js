import React from "react";
import { Layout } from '../components/Layout'
import PrivacyPolicy from "../components/common/PrivacyPolicyPage/PrivacyPolicy";

const PrivacyPolicyPage = () => {
    return (
        <Layout isTransparent={true} >
            <PrivacyPolicy />
        </Layout>
    )
}

export default PrivacyPolicyPage
