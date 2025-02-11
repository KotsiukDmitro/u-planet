import React, { useContext } from 'react'
import { FormContext } from '../../../../helpers/FormContext'
import { WebformElementWrapper, useWebformElement } from 'gatsby-drupal-webform'
import '../WebForm.css'

const WebformInput = ({ element }) => {

    const { register, validationErrors, getInputClasses } = useContext(FormContext)
    const inputErrors = validationErrors.filter(err => err.name === element.name)
    const [inputProps, settings] = useWebformElement(element, {
        className: `form-control`,
        name: element.name,
        type: element.type
    })


    return (
        <WebformElementWrapper
            settings={settings}
            className={'relative lg:mb-3 w-full lg:w-[calc(50%-15px)]'} >

            <input
                {...inputProps}
                {...register(element.name)}
                className={`text-[14px] px-3 py-2 border rounded-md outline-none w-full ${getInputClasses(element.name)}`} />
            {inputErrors.length ? <div className='absolute text-red-500 text-xs ml-1'>{inputErrors[0].error}</div> : ''}

        </WebformElementWrapper>
    )
}

export default WebformInput