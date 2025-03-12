import React from "react"
import CustomButton from '../../../common/CustomButton/CustomButton'


const ButtonSubmit = ({ buttonName, isFormSubmitted }) => {

    return (
        <CustomButton disabled={isFormSubmitted}>
            {buttonName}
            {isFormSubmitted &&
                <span className={'absolute inset-0 bg-gray-600 bg-opacity-40 flex items-center justify-center'} >
                    <span className={'w-7 h-7 xl:w-10 xl:h-10 2xl:w-12 2xl:h-12 rounded-full border-t-4 border-greenCustom border-r-transparent animate-spin'}></span>
                </span>
            }
        </CustomButton>
    )
}

export default ButtonSubmit