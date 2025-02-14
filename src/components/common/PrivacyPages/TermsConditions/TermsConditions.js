import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import PrivacyPageTemplate from '../PrivacyPageTemplate/PrivacyPageTemplate'


const TermsConditions = () => {

  const termsConditions = useStaticQuery(graphql`
    query {
      nodePage(path: {alias: {eq: "/terms-conditions"}}) {
        id
        title
        body {
          value
        }
      }
    }
`).nodePage

  return (

    <PrivacyPageTemplate
      title={termsConditions.title}
      body={termsConditions.body.value}
    />
  )
}

export default TermsConditions