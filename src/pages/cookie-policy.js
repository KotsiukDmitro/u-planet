import React from "react"
import { Layout } from '../components/Layout'
import {CookiePolicy} from "../components/common/PrivacyPages"

const CookiePolicyPage = () => {
    return (
        <Layout isTransparent >
            <CookiePolicy />
        </Layout>
    )
}

export default CookiePolicyPage
