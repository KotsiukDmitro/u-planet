import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import useWindowSize from '../../../../hooks/useWindowSize'


const CategoryButtons = ({selectedCategory, setSelectedCategory, setAllCases}) => {

    const categories = useStaticQuery(graphql`
        query {
          allTaxonomyTermService {
            nodes {
                drupal_internal__revision_id
                drupal_id
                name
            }
          }
        }
    `).allTaxonomyTermService.nodes

    const windowWidth = useWindowSize()

    const selectCategory = (title) => {
        setSelectedCategory(title)
        setAllCases({expanded: windowWidth <= 600, shown: windowWidth <= 600 ? 10 : 0})
    }

    return (
            <div className={'flex flex-wrap justify-center items-center gap-2 sm:gap-10 bg-[#282b3e] w-full py-3'}>
                <CategoryButton title={'ALL'} callback={() => selectCategory(0)} id={0}
                                selectedCategory={selectedCategory}/>
                {categories.map(c =>
                    <CategoryButton key={c.drupal_id} title={c.name} id={c.drupal_internal__revision_id} callback={() => selectCategory(c.drupal_internal__revision_id)}
                                    selectedCategory={selectedCategory}/>
                )}
            </div>
    )
}

const CategoryButton = ({callback, selectedCategory, title, id}) => {
    return (
        <button onClick={callback} className={'w-full md:w-auto uppercase'} style={{
            color: `${selectedCategory === id ? '#24d5d1' : '#fff'}`
        }}>{title}</button>
    )
}

export default CategoryButtons
