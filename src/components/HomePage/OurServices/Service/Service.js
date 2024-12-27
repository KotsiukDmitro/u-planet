import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import CustomButton from "../../../common/CustomButton/CustomButton";


const Service = ({ title, subTitle, content, image, onClick, className, btnName='start project' }) => {

    return (
        <div className={'flex gap-5'}>
            <GatsbyImage image={image} alt="image-service" className={'max-w-[500px] flex-1'} />
            <div className={'flex-1'}>
                <p className={'text-lg text-[#24d5d1] mb-3'}>{title}</p>
                <p className={'text-[26px] mb-3'}>{subTitle}</p>
                <p className={'text-[#414042] leading-8 mb-10 max-w-[540px]'}>{content}</p>
                <div>
                    <CustomButton 
                    onClick={onClick}
                    classNameButton={'bg-white !text-[#24d5d1] hover:!text-white hover:!bg-[#24d5d1] uppercase'}>
                        {btnName}
                    </CustomButton>
                </div>
            </div>

        </div>
    )
}

export default Service