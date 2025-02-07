import React from "react"
import CustomButton from '../../../common/CustomButton/CustomButton'

const ButtonSubmit = ({ buttonName, isFormSubmitted }) => {

    return (
        <div>
            <CustomButton disabled={isFormSubmitted}>
                {buttonName}
            </CustomButton>
        </div>
    )
}

export default ButtonSubmit