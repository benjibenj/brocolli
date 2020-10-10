import React, { useContext, useEffect } from "react"
import styled, { withTheme } from "styled-components"
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
  const themeContext = useContext(ThemeManagerContext);
  const displayMode = themeContext.isDark ? "dark" : "light";
  useEffect(() =>
    themeContext.toggleDark(window.localStorage.getItem('dark') === "true"),
    []);
  return (
    <FullWidthContainer>
      <Helmet htmlAttributes={{ displayMode }} />
      <LayoutContainer>
        <Header location={location} title={title} />
        <Main>{children}</Main>
        <Footer themeContext={themeContext}/>
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
  ul, ol > li {
    padding-left: 0.5rem;
    margin-left: 2rem;
}
`

const LayoutContainer = styled("div")`
  margin: 0 auto;
  max-width: ${rhythm(24)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
`

const Main = styled("main")`
  min-height: 62vh;
`

export default withTheme(Layout)
