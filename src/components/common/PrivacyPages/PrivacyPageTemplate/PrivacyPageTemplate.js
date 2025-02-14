import React from 'react'
import CustomTitleComponent from '../../CustomTitleComponent/CustomTitleComponent'
import * as s from './PrivacyPages.module.css'




const PrivacyPageTemplate = ({title, body}) => {

    return (
        <div className={'bg-slate-200'}>
            <div className={'container mx-auto mt-28 sm:mt-40 px-5 mb-20'}>
                    <CustomTitleComponent name={title} />
                <div className={['mt-20 sm:mt-28', s.privacyText].join(' ')} dangerouslySetInnerHTML={{ __html: body }} />
            </div>
        </div>
    )
}

export default PrivacyPageTemplate