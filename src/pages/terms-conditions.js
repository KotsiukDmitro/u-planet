import React from "react"
import { Layout } from '../components/Layout'
import {TermsConditions} from "../components/common/PrivacyPages"

const TermsConditionsPage = () => {
    return (
        <Layout isTransparent={true} >
            <TermsConditions />
        </Layout>
    )
}

export default TermsConditionsPage
