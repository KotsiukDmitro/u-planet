import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import CustomButton from "../../../common/CustomButton/CustomButton";
import { Link } from "gatsby";

const ServiceItem = ({ service, reverse }) => {
  return (
    <div className={`lg:flex ${reverse ? 'flex-row-reverse' : ''}`}>
      <div className='flex-1'>
        <GatsbyImage image={service.image} alt='image-service' />
      </div>
      <div className='flex-1'>
        <p className='text-[14px] text-greenCustom mb-3 mt-3 md:mt-0'>{service.title}</p>
        <p className='text-[20px] xl:text-[26px] mb-3'>{service.subTitle}</p>
        <p className='text-[#414042] text-[14px] xl:text-[16px] leading-8 mb-10 max-w-[540px]'>{service.content}</p>
        <div className='flex gap-2 mb-10'>
          {service.icons?.map((icon, idx) => (
            <img src={icon} key={`service-icon-${idx}`} alt='logo' className='opacity-30 w-7 h-7' />
          ))}
          {service.iconLink && (
            <Link to={service.iconLink.path}>
              <img src={service.iconLink.src} alt='logo' className='w-7 h-7' />
            </Link>
          )}
        </div>
        <div>
          <Link to={service.path}>
            <CustomButton classNameButton='bg-white !text-greenCustom hover:!text-white hover:!bg-greenCustom uppercase'>
              {service.btnName}
            </CustomButton>
          </Link>
        </div>
      </div>
    </div>
  )
}

const Service = ({ services }) => {
  return (
    <div className='flex flex-col gap-10'>
      {services.map((service, index) => (
        <ServiceItem key={service.title} service={service} reverse={index % 2 !== 0} />
      ))}
    </div>
  )
}

export default Service
