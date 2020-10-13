import React from "react"
import { Link } from "gatsby"
import formatLink from "../lib/formatLink"

const Book = ({ book }) => {
  return (
    <div>
      <Link to={`/read/${formatLink(book)}`} className="chapter">
        {book}
      </Link>
    </div>
  )
}

export default Book
