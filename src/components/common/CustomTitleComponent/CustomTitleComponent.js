import React from "react";

const CustomTitleComponent = ({name}) => {

    return (
        <div className={'text-center'}>
            <h1 className={'mb-5 text-[40px] text-[#3e3e3e]'}>{name}</h1>
            <div className={'w-14 h-[3px] bg-[#24d5d1] mb-5 m-auto'}></div>
        </div>

    )
}

export default CustomTitleComponent