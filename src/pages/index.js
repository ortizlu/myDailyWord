import React from "react"
import styled, { ThemeProvider, createGlobalStyle } from "styled-components"
import Nav from "../components/Nav"
import { useStaticQuery } from "gatsby"

const theme = {
  black: "#000",
  white: "#fff",
  darkBlue: "#193549",
  blue: "#0cbfe9",
  maxWidth: "1000px",
  bs: "0 12px 24px 0 rgba(0,0,0,0.09)",
}

const StyledPage = styled.div`
  background: ${props => props.theme.black};
  color: ${props => props.theme.white};
`

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`

const GlobalStyle = createGlobalStyle`  
  html {
    box-sizing: border-box;
    font-size: 10px;
    background-color: ${theme.black};
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
  }
  a {
    text-decoration: none;
    color: ${theme.white}
  }
`

export default function Home() {
  // const chaptersQuery = useStaticQuery(graphql`
  //   query {
  //     allBibleKjvJson {
  //       edges {
  //         next {
  //           book
  //           chapters {
  //             chapter
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  // console.log(chaptersQuery)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Nav />
      <Inner></Inner>
    </ThemeProvider>
  )
}
