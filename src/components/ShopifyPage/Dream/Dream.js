import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import CustomTitleComponent from "../../common/CustomTitleComponent/CustomTitleComponent";
import CustomButton from "../../common/CustomButton/CustomButton";

const Dream = () => {

    return (
        <div className={'relative w-full h-full flex justify-center items-center overflow-hidden'}>

            <div className={'absolute w-full h-full'}>
                <StaticImage src={'../../../assets/images/shopify/dream/main-bg.png'}
                    layout="fullWidth" alt="Background" className={'inset-0 w-full h-full'} loading={'lazy'} quality={100} objectFit="cover"
                />
            </div>

            <div className={'container mx-auto z-10 pt-14 md:pt-32 xl:pt-40 pb-16 md:pb-20 xl:pb-24 text-center px-5'}>
                <CustomTitleComponent name='If you dream about an online store then drop us a line!' />
                <p className={'text-[#1c1c1c] mt-12 md:mt-20 mb-8 md:mb-12 lg:mb-16 leading-7 font-light tracking-wider text-[15px] md:text-[13px] lg:text-[16px] xl:text-[18px]'}>
                    We are ready to create your own full-scale eStore, extend the existing one or develop for you custom <br className='hidden lg:block' />
                    Shopify App and theme using our deep experience in eCommerce. Just let us know what you want your <br className='hidden lg:block' />
                    eStore to look like, get your custom eCommerce solution and stand out!
                </p>
                <CustomButton classNameButton={'uppercase md:!text-[16px] lg:text-[20px] font-normal'}>
                    contact us
                </CustomButton>

            </div>

        </div>
    )
}

export default Dream