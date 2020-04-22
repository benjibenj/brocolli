import React, {useContext} from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { ThemeManagerContext } from "gatsby-styled-components-dark-mode"

const Footer = () => {
  const themeContext = useContext(ThemeManagerContext);
  return (
    <FooterContainer>
      <Text>© {new Date().getFullYear()}</Text>
      <DayNightToggle
        darkMode={themeContext.isDark}
        onClick={() => themeContext.toggleDark()}
        title={"toggle dark mode"}
      >
        {themeContext.isDark ? (
          <FontAwesomeIcon icon={"sun"} />
        ) : (
          <FontAwesomeIcon icon={"moon"} />
        )}
      </DayNightToggle>
    </FooterContainer>
  )
}
const FooterContainer = styled("footer")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const Text = styled("div")``

const DayNightToggle = styled("button")`
  cursor: pointer;
  font-size: 24px;
  color: #f9c232;
  border: none;
  padding: none;
  background-color: inherit;
`

export default Footer
