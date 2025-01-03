import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"


const HomePage = () => {

  const { blockContentWhoWeAre } = useStaticQuery(graphql`
    query {
        blockContentWhoWeAre {
          field_number_projects
          field_number_specialists
        }
      }
    `)
    

  const {
    field_number_projects,
    field_number_specialists
  } = blockContentWhoWeAre

  return (
    <div className="p-10">
      <h1 className="text-5xl text-center mb-10">
        Welcome to U-PLANET
      </h1>
      <div><strong>projects:</strong> {field_number_projects}</div>
      <div><strong>specialists:</strong> {field_number_specialists}</div>
    </div>
  )
}


export default HomePage