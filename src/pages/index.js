import React, {useState} from "react"
import { Layout } from "../components/Layout"
import { HomePage, AboutUs, ContactUs, OurServices, ContactUsForm, Portfolio } from "../components/HomePage"
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
      <div className="mt-24 m-auto">
        <HomePage />
        <AboutUs />
      </div>
      <ContactUs />
      <div className="m-auto">
      <OurServices />
      </div>
      <Portfolio load={isIntersected} />
      <ContactUsForm />
    </Layout>
  )

}


export default IndexPage
