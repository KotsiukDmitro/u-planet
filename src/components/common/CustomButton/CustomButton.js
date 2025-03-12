import React from "react";

const CustomButton = ({ children, classNameButton, onClick }) => {

    return (
        <button
            className={'text-white bg-greenCustom py-3 px-12 text-center border border-greenCustom text-sm font-bold cursor-pointer rounded-full hover:bg-white hover:text-greenCustom ' + classNameButton} onClick={onClick} >           
            {children}
        </button>
    )
}

export default CustomButton