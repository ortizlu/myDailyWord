const path = require(`path`)

exports.createPages = async function ({ actions, graphql }) {
  const { createPage } = actions
  const { data } = await graphql(`
    query {
      allBibleKjvJson {
        edges {
          node {
            id
            book
            chapters {
              chapter
            }
          }
        }
      }
    }
  `)

  const books = data.allBibleKjvJson.edges
  books.forEach(({ node }) => {
    createPage({
      path: `/read/${node.book.replace(/\s/g, "")}`,
      component: path.resolve(`./src/components/Chapters.js`),
      context: {
        book: node.book.replace(/\s/g, ""),
      },
    })

    node.chapters.forEach((_, index) => {
      createPage({
        path: `/read/${node.book.replace(/\s/g, "")}/${index + 1}`,
        component: path.resolve(`./src/components/Chapter.js`),
        context: {
          book: node.book.replace(/\s/g, ""),
          chapter: index + 1,
        },
      })
    })
  })
}
