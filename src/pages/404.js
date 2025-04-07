import * as React from "react"
import { Layout } from '../components/Layout'
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { route } from "../routes"
import CustomButton from "../components/common/CustomButton/CustomButton"



const NotFoundPage = () => (
  <Layout >
    <div className={'relative min-h-screen flex items-center'}>
      <div className={'w-full h-full absolute z-[-10]'}>
        <StaticImage className={'w-full min-h-full'} src={'../assets/images/page404/404-bg.png'} alt={'main-bg'} loading={'lazy'} quality={100} />
      </div>

      <div className={'container mx-auto px-5 flex flex-col md:flex-row items-center justify-center gap-10 lg:gap-20 2xl:gap-28 '}>
        <StaticImage className={'max-w-[300px] sm:max-w-[410px] lg:max-w-max'} src={'../assets/images/page404/404.png'} alt={'error 404'} loading={'lazy'} quality={100} objectFit="contain" />
        <div className='text-[#393939] font-semibold text-center md:text-left'>
          <span className='uppercase text-[3em] lg:text-[4.3em]'>Whoops!</span>
          <p className='text-[1em] lg:text-[1.6em] leading-[35px] mb-5 lg:mb-8'>We couldn't find that page <br /> Go to our <Link to={route('home')} className='text-greenCustom'>home page</Link> or</p>
          <AnchorLink to={route('home.contact-us')} className={''}>
            <CustomButton classNameButton={'lg:w-[220px]'}>Contact Us</CustomButton>
          </AnchorLink>
        </div>
      </div>
    </div>
  </Layout>
)


export default NotFoundPage
