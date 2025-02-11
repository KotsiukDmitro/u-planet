import React from "react"
import CustomButton from '../../../common/CustomButton/CustomButton'
// import '../WebForm.css'

const ButtonSubmit = ({ buttonName, isFormSubmitted }) => {

    return (
            <CustomButton disabled={isFormSubmitted}>
                {buttonName}
            </CustomButton>
    )
}

export default ButtonSubmit