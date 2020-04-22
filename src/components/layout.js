import React, { useContext } from "react"
import styled from "styled-components"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { far } from "@fortawesome/free-regular-svg-icons"
import Helmet from "react-helmet"

import Header from "./Header"
import Footer from "./Footer"
import Colors from "../rules/colors"

import { rhythm } from "../utils/typography"
import { ThemeManagerContext } from "gatsby-styled-components-dark-mode"

library.add(fab, fas, far)

const Layout = ({ location, title, children }) => {
  const displayMode = useContext(ThemeManagerContext).isDark ? "dark" : "light";
  return (
    <FullWidthContainer>
      <Helmet htmlAttributes={{displayMode}} />
      <LayoutContainer>
        <Header location={location} title={title} />
        <Main>{children}</Main>
        <Footer />
      </LayoutContainer>
    </FullWidthContainer>
  )
}

const FullWidthContainer = styled("div")`
  width: 100%;
  background-color: ${props =>
    props.theme.isDark
      ? Colors.utility.black.default
      : Colors.primary.eggShell.default};
  a {
    color: ${Colors.primary.orange.default};
  }
  color: ${props =>
    props.theme.isDark
      ? Colors.utility.white.default
      : Colors.utility.paragraph.default};
`

const LayoutContainer = styled("div")`
  margin: 0 auto;
  max-width: ${rhythm(24)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
`

const Main = styled("main")`
  min-height: 62vh;
`

export default Layout
