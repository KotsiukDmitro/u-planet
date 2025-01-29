import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import CustomTitleComponent from '../CustomTitleComponent/CustomTitleComponent'
import * as s from './PrivacyPolicy.module.css'



const PrivacyPolicy = () => {

    const privacyPolicyPage = useStaticQuery(graphql`
    query {
      nodePage(path: {alias: {eq: "/privacy-policy"}}) {
        id
        title
        body {
          value
        }
      }
    }
`).nodePage

    return (
        <div className={'bg-slate-200'}>
            <div className={'container mx-auto mt-28 sm:mt-40 px-5 mb-20'}>
                    <CustomTitleComponent name={privacyPolicyPage.title} />
                <div className={['mt-20 sm:mt-28', s.privacyText].join(' ')} dangerouslySetInnerHTML={{ __html: privacyPolicyPage.body.value }} />
            </div>
        </div>
    )
}

export default PrivacyPolicy