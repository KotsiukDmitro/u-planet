import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";

const BotTemplate = ({ title, icons, borderColor }) => {

    return (
        <div className={['border-[5px] pb-[45px] pt-[45px] xl:pt-[75px] px-2 flex flex-col items-center', borderColor].join(' ')}>
            <div className={'flex items-center gap-5 md:gap-3 lg:gap-5 mb-5'}>
                {icons.map((icon, index) =>
                    <GatsbyImage
                        key={'botsIcons' + index}
                        image={icon}
                        alt="icon"
                        className={'md:max-h-[45px] lg:max-h-[60px] xl:max-h-[75px]'}
                        objectFit="contain" />
                )}
            </div>
            <div className={'text-center text-[24px] sm:text-[28px] md:text-[13px] lg:text-[17px] xl:text-[21px] text-[#37363a] font-light'}>
                {title}
            </div>
        </div>

    )
}

export default BotTemplate