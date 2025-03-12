import React from "react";

const CustomTitleComponent = ({name}) => {

    return (
        <div className={'text-center'}>
            <h1 className={'relative max-w-[800px] m-auto mb-10 text-[24px] md:text-[40px] font-light text-[#3e3e3e] leading-none after:absolute after:w-14 after:h-[3px] after:bg-greenCustom after:m-auto after:left-0 after:right-0 after:-bottom-6'} dangerouslySetInnerHTML={{ __html: name }} />
        </div>

    )
}

export default CustomTitleComponent