import React, { useState } from "react"
import { Layout } from "../components/Layout"
import { MainInfo, AboutUs, ContactUs, OurServices, ContactUsForm, Portfolio, OurClients } from "../components/HomePage"
import { useIntersectionObserver } from "../hooks/useIntersectionObserver"



const IndexPage = () => {

  const [isIntersected, setIntersected] = useState(false)

  useIntersectionObserver((entries, observer) => {
    if (entries[0].isIntersecting || entries[0].target.offsetTop <= window.scrollY) {
      setIntersected(true)
      observer.unobserve(entries[0].target)
    }
  }, '#OurServices')

  return (
    <Layout>
      <MainInfo />
      <AboutUs />
      <ContactUs />
      <OurServices />
      <Portfolio load={isIntersected} />
      <OurClients load={isIntersected}/>
      <ContactUsForm />
    </Layout>
  )

}


export default IndexPage
