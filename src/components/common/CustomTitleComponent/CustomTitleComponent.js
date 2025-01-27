import React from "react";

const CustomTitleComponent = ({name}) => {

    return (
        <div className={'text-center'}>
            <h1 className={'relative mb-10 text-[24px] md:text-[40px] font-light text-[#3e3e3e] leading-none after:absolute after:w-14 after:h-[3px] after:bg-[#24d5d1] after:m-auto after:left-0 after:right-0 after:-bottom-6'}>{name}</h1>
        </div>

    )
}

export default CustomTitleComponent