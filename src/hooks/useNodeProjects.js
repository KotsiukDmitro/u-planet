import {useEffect, useState} from 'react'
import {graphql, useStaticQuery} from 'gatsby'

const useNodeProjects = (selectedCategory)=> {

    const [projects, setProjects] = useState([])

    const projectsData = useStaticQuery(graphql`
    query {
      allNodeOurWork(sort: {field_node_weight: ASC}, filter: {status: {eq: true}}) {
        nodes {
          id
          path {
            alias
          }
          drupal_id
          title
          field_our_work_service {
            drupal_internal__target_id
          }
          field_goal {
            value
          }
          relationships {
            field_overview_image {
              localFile {
                childImageSharp {
                  gatsbyImageData(quality: 100)
                }
              }
            }
          }
          field_color_text
        }
      }
    }
    `).allNodeOurWork.nodes   

    useEffect(() => {
        setProjects(projectsData
            .filter(filteredProject => {
                if (selectedCategory === 0) {
                    return filteredProject
                } else {
                    return filteredProject?.field_our_work_service.find(p => p.drupal_internal__target_id === selectedCategory)
                }
            }))
    }, [selectedCategory, projectsData])

    return projects
}

export default useNodeProjects