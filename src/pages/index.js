import * as React from "react"
import { Layout } from "../components/Layout"
import { HomePage, AboutUs, ContactUs, OurServices, ContactUsForm } from "../components/HomePage"


const IndexPage = () => {

  return (
    <Layout>
      <div className="mt-24 m-auto">
        <HomePage />
        <AboutUs />
      </div>
      <ContactUs />
      <div className="m-auto">
      <OurServices />
      </div>
      <ContactUsForm />
    </Layout>
  )

}


export default IndexPage
