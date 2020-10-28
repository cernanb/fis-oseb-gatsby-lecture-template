import React from "react"
import Layout from "../components/Layout"
import { useStaticQuery } from "gatsby"

export default function SlideTemplate({ pageContext }) {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { id: { eq: "${pageContext.id}" } }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              layout
              path
              hidden
              order
            }
            html
          }
        }
      }
    }
  `)

  console.log(data)
  return (
    <Layout>
      <div>
        <h1>{data.allMarkdownRemark.edges[0].node.frontmatter.title}</h1>
      </div>
    </Layout>
  )
}
