import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import PrivacyPageTemplate from '../PrivacyPageTemplate/PrivacyPageTemplate'


const PrivacyPolicy = () => {

  const privacyPolicy = useStaticQuery(graphql`
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

    <PrivacyPageTemplate
      title={privacyPolicy.title}
      body={privacyPolicy.body.value}
    />
  )
}

export default PrivacyPolicy