import React from 'react'
import { useCheckLink } from '../../../hooks/useCheckLink'


const ProjectLink = ({viewLink}) => {

    const isLinkActive = useCheckLink(viewLink?.uri)

    return (
        <>
            {(viewLink && isLinkActive) &&
                <button onClick={() => window.open(viewLink?.uri, '_blank')}
                      className={'hover:cursor-pointer hover:underline text-[#24d5d1] text-base'}>
                    {viewLink?.uri}
                </button>
            }
        </>
    )
}

export default ProjectLink