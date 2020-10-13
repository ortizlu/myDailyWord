import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledNav = styled.ul`
  color: white;
  padding-inline-start: 0;
  text-align: center;
  margin-bottom: 0;
  a {
    padding: 0.5rem 1rem;
  }
  a:active,
  a:focus,
  a:hover {
    border-bottom: 2px solid white;
  }
`

const Nav = () => (
  <StyledNav>
    <Link to="/profile">
      <a>My Profile</a>
    </Link>
    <Link to="/read">
      <a>Read</a>
    </Link>
    <Link to="/browse">
      <a>Browse Plans</a>
    </Link>
  </StyledNav>
)

export default Nav
