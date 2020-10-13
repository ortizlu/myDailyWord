import React from "react"

export default function Chapter({ data }) {
  const chapters = data.allBibleKjvJson.edges[0].node.chapters
  const path = window.location.pathname.split("/")
  const currentChapter = path[path.length - 1]
  const chapter = chapters[currentChapter - 1]
  return (
    <div>
      {chapter.verses.map(verse => (
        <div>
          <span style={{ marginRight: "1rem" }}>{verse.verse}</span>
          <span>{verse.text}</span>
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
          chapters {
            chapter
            verses {
              verse
              text
            }
          }
          book
        }
      }
    }
  }
`
