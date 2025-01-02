import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import { apStyleTitleCase } from 'ap-style-title-case'

const SliderItem = ({ project }) => {

    const { title, field_goal: goal, relationships, path: { alias: path }, field_color_text: color } = project
    const gatsbyImageData = getImage(relationships.field_overview_image.localFile)

    const colorText = color?.trim() || '#fff'

    return (
        <Link to={path} onClick={event => event.stopPropagation()}>
            <div className={'flex justify-center items-start h-full relative overflow-hidden projectSlide'}
                role={'presentation'}>
                <div
                    className={`absolute flex m-auto h-full w-full items-center justify-center`}>
                    <GatsbyImage loading={'lazy'} alt={title} image={gatsbyImageData} className={'slide-image'}
                    objectFit={'cover'} />
                </div>
                <div className={'slide-info w-full h-full flex flex-col text-center absolute'} style={{color: `${colorText}`}}>
                    <p className={'detail-title font-bold mt-auto sm:mb-2'}>{apStyleTitleCase(title)}</p>
                    <div className={'detail-text'} dangerouslySetInnerHTML={{ __html: goal.value }} />
                    <span className={'sm:mt-5'}>
                        <span className={`text-center leading-normal border rounded-full p-1 px-2 sm:p-2 sm:px-5 detailsLink`} style={{borderColor: `${colorText}`}}>
                            view details
                        </span>
                    </span>
                </div>
            </div>
        </Link>
    )
}

export default SliderItem