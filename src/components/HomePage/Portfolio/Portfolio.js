import React, {useEffect, useMemo, useRef, useState} from 'react'
import useNodeProjects from '../../../hooks/useNodeProjects'
import useWindowSize from '../../../hooks/useWindowSize'
import ProjectSlider from './Slider/ProjectSlider'
import SliderItem from './Slider/SliderItem'
import CategoryButtons from './CategoryButtons/CategoryButtons'
import CustomTitleComponent from '../../common/CustomTitleComponent/CustomTitleComponent'
import './Portfolio.css'

const Portfolio = ({ load, defaultSelectedCategory = 0 }) => {

    const slider = useRef(null)
    const [selectedCategory, setSelectedCategory] = useState(defaultSelectedCategory)
    const projects = useNodeProjects(selectedCategory)
    const width = useWindowSize()
    const phone = useMemo(() => width <= 600, [width])
    const [allCases, setAllCases] = useState({
        expanded: false,
        shown: 0
    })

    useEffect(() => {
        setAllCases({
            expanded: phone,
            shown: phone ? 10 : 0
        })
    }, [phone])


    return (
        <div className={'whatComesOut relative flex flex-col justify-center items-center mb-20'}>
            <CustomTitleComponent name='Portfolio' />
            <p className='mb-10'>10 years of successful work, hundreds of international projects</p>

                <CategoryButtons selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}
                    setAllCases={setAllCases} />

            {load ?
                <>
                    {!phone &&
                        <div className={!allCases.expanded ? 'w-full h-full' : 'hidden'}>
                            <ProjectSlider sliderRef={slider} projects={projects}/>
                        </div>
                    }

                    {allCases.expanded &&
                        <div
                            className={'flex flex-row flex-wrap w-full whatComesOut-projects'}>
                            {projects.filter((p, i) => i < allCases.shown).map(p =>
                                <div className={'expanded-project-slide'} key={p.drupal_id}>
                                    <SliderItem project={p}/>
                                </div>
                            )}
                        </div>
                    }
                </>
                :
                <div className={'skeleton animate-pulse bg-gray-300'}></div>
            }
        </div>
    )
}


export default Portfolio

