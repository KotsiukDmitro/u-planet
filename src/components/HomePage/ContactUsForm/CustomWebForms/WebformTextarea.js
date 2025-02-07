import React, { useContext } from 'react'
import { WebformElementWrapper, useWebformElement } from 'gatsby-drupal-webform'


const WebformTextarea = ({ element }) => {

    const [inputProps, settings] = useWebformElement(element, {
        className: `form-control `,
        name: element.name,
        type: element.type
    })

    return (
        <WebformElementWrapper settings={settings} className={'relative'}>
            <textarea {...inputProps} />
            {/* <div className='absolute'>place for error</div> */}
        </WebformElementWrapper>
    )
}

export default WebformTextarea