import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import PrivacyPageTemplate from '../PrivacyPageTemplate/PrivacyPageTemplate'


const CookiePolicy = () => {

  const cookiePolicy = useStaticQuery(graphql`
    query {
      nodePage(path: {alias: {eq: "/cookie-policy"}}) {
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
      title={cookiePolicy.title}
      body={cookiePolicy.body.value}
    />
  )
}

export default CookiePolicy