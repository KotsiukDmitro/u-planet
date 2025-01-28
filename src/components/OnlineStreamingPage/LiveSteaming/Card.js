import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";

const Card = ({ card }) => {

    return (
        <div className={'flex items-center justify-center pl-3 md:pl-5 py-3 md:py-5 bg-[#030922] min-h-[120px]'}>
            <GatsbyImage image={card.icon} alt="case" className={'w-1/3'} objectFit="contain" />
            <div className={'text-[#e8e8e8] ml-2 leading-none w-2/3'}>
                <p className={'mb-2'}>{card.title}</p>
                <p className={'text-[12px] font-light'}>{card.body}</p>
            </div>


        </div>
    )
}

export default Card