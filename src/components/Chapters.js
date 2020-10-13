import React from "react"
import formatLink from "../lib/formatLink"
import { Link } from "gatsby"

export default function Chapters({ data }) {
  const book = data.allBibleKjvJson.edges[0].node.book
  const chapters = data.allBibleKjvJson.edges[0].node.chapters
  return (
    <div>
      {chapters.map((_, index) => (
        <div>
          <Link
            to={`/read/${formatLink(book)}/${index + 1}`}
            className="chapter"
          >
            {index + 1}
          </Link>
        </div>
      ))}
    </div>
  )
}

export const query = graphql`
  query($book: String!) {
    allBibleKjvJson(filter: { book: { eq: $book } }) {
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
`
