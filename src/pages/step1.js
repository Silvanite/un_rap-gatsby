import React from "react"
import components from '../types/alltypes'
import { capitalize } from 'underscore.string'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from "../layouts/default"
import SEO from "../components/seo"
import { H1 } from "../styles/type"

const Step1Page = () => {
  const {
    prismic: {
      allStep_1s: { edges },
    },
  } = useStaticQuery(
    graphql`
      query {
        prismic {
          allStep_1s {
            edges {
              node {
                title
                content
              }
            }
          }
        }
      }
    `
  )

  const content = edges[0].node.content.map((content, index) => {
    const ElementType = components[capitalize(content.type)]

    return <ElementType key={index}>{content.text}</ElementType>
  })

  return (
    <Layout>
      <SEO title={edges[0].node.title[0].text} />
      <H1>{edges[0].node.title[0].text}</H1>
      {content}
    </Layout>
  )
}

export default Step1Page
