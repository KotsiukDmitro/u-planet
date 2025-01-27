import React from "react";

const CustomButton = ({ children, classNameButton, onClick }) => {

    return (
        <button
            className={'text-white bg-[#24d5d1] py-3 px-12 text-center border border-[#24d5d1] text-sm font-bold cursor-pointer rounded-full hover:bg-white hover:text-[#24d5d1] ' + classNameButton} onClick={onClick} >           
            {children}
        </button>
    )
}

export default CustomButton