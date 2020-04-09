import React from "react"
import styled from "styled-components"
import Colors from "../rules/colors"

import Header from "./Header"

import { rhythm } from "../utils/typography"

const Layout = ({ location, title, children }) => {
  return (
    <FullWidthContainer>
    <LayoutContainer>
      <Header location={location} title={title} />
      <Main>{children}</Main>
      <footer>© {new Date().getFullYear()}</footer>
    </LayoutContainer>
    </FullWidthContainer>
  )
}

const FullWidthContainer = styled("div")`
  width: 100%;
  background-color: ${Colors.utility.black.default};
  a {
    color: ${Colors.primary.orange.default};
  }
  color: ${Colors.utility.white.default};
`;


const LayoutContainer = styled("div")`
  margin: 0 auto;
  max-width: ${rhythm(24)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
`

const Main = styled("main")`
  min-height: 62vh;
`;

export default Layout
