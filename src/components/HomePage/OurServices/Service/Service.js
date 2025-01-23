import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import CustomButton from "../../../common/CustomButton/CustomButton";
import { Link } from "gatsby";


const Service = ({ services }) => {

    return (
        <div className={'flex flex-col gap-10'}>
            {
                services.map((service, index) => {
                    return (
                        <div key={service.title + index} className={`sm:flex ${index % 2 && 'flex-row-reverse'}`}>
                            <div className={'flex-1'}>
                                <GatsbyImage image={service.image} alt="image-service" />
                            </div>
                            <div className={'flex-1'}>
                                <p className={'text-lg text-[#24d5d1] mb-3'}>{service.title}</p>
                                <p className={'text-[26px] mb-3'}>{service.subTitle}</p>
                                <p className={'text-[#414042] leading-8 mb-10 max-w-[540px]'}>{service.content}</p>
                                <div className={'flex gap-2 mb-10'}>
                                    {service.icons?.map((icon, index) => <img src={icon} key={'service icons' + index} alt="logo" className={'opacity-30 w-7 h-7'} />)}
                                    {service.iconLink &&
                                        <Link to={service.iconLink.path}>
                                            <img src={service.iconLink.src} alt="logo" className={'w-7 h-7'} />
                                        </Link>
                                    }

                                </div>
                                <div>
                                    {<Link to={service.path}>
                                        <CustomButton
                                            classNameButton={'bg-white !text-[#24d5d1] hover:!text-white hover:!bg-[#24d5d1] uppercase'}>
                                            {service.btnName}
                                        </CustomButton>
                                    </Link>
                                    }
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div >
    )
}

export default Service