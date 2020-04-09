import React, {useState} from "react"
import styled from "styled-components"
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import Header from "./Header"
import Footer from "./Footer"
import Colors from "../rules/colors"

import { rhythm } from "../utils/typography"


library.add(fab, fas, far);


const Layout = ({ location, title, children }) => {
  const [darkMode, switchDarkMode] = useState(true);
  return (
    <FullWidthContainer darkMode={darkMode}>
    <LayoutContainer>
      <Header location={location} title={title} darkMode={darkMode}/>
      <Main darkMode={darkMode}>{children}</Main>
      <Footer darkMode={darkMode} switchDarkMode={switchDarkMode}/>
    </LayoutContainer>
    </FullWidthContainer>
  )
}

const FullWidthContainer = styled("div")`
  width: 100%;
  background-color: ${props => props.darkMode ? Colors.utility.black.default : Colors.primary.eggShell.default};
  a {
    color: ${Colors.primary.orange.default};
  }
  color: ${props => props.darkMode ? Colors.utility.white.default : Colors.utility.paragraph.default};
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
