const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const slideTemplate = path.resolve(`src/templates/slide-template.js`)
  const result = await graphql(`
    query {
      allMarkdownRemark {
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
  result.data.allMarkdownRemark.edges.forEach(edge => {
    console.log(edge)
    createPage({
      path: `${edge.node.frontmatter.path}`,
      component: slideTemplate,
      context: {
        id: edge.node.id,
      },
    })
  })
}
