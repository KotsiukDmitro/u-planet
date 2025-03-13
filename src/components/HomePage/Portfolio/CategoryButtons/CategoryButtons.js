import React, { useMemo, useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import useWindowSize from '../../../../hooks/useWindowSize'


const CategoryButtons = ({ selectedCategory, setSelectedCategory, setAllCases }) => {
    const data = useStaticQuery(graphql`
        query {
        allTaxonomyTermService {
            nodes {
            drupal_internal__revision_id
            drupal_id
            name
            }
        }
    }
`)

    const categories = useMemo(() => data.allTaxonomyTermService.nodes, [data])

    const windowWidth = useWindowSize()

    const selectCategory = (title) => {
        setSelectedCategory(title)
        setAllCases({ expanded: windowWidth <= 600, shown: windowWidth <= 600 ? 10 : 0 })
    }

    return (
        <div className={'flex justify-center items-center sm:gap-10 bg-[#282b3e] w-full py-3 text-[12px] sm:text-[16px]'}>
            <CategoryButton id={0} title={'ALL'} onClick={selectCategory} selectedCategory={selectedCategory} />
            {categories.map(c =>
                <CategoryButton
                    key={c.drupal_id}
                    title={c.name}
                    id={c.drupal_internal__revision_id}
                    onClick={selectCategory}
                    selectedCategory={selectedCategory} />
            )}
        </div>
    )
}

const CategoryButton = ({ id, title, selectedCategory, onClick }) => {

    const [isHovered, setIsHovered] = useState(false)

    return (
        <button
            onClick={() => onClick(id)}
            className={`w-full md:w-auto uppercase ${selectedCategory === id || isHovered ? 'text-greenCustom' : 'text-white'}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >{title}
        </button>
    )
}
export default CategoryButtons
