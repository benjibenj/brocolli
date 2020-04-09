import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Footer = ({ darkMode, switchDarkMode }) => {
  return (
    <FooterContainer>
      <Text>© {new Date().getFullYear()}</Text>
      <DayNightToggle onClick={() => switchDarkMode(!darkMode)}>
        {darkMode ? (
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
`

const Text = styled("div")``

const DayNightToggle = styled("div")`
  cursor: pointer;
`

export default Footer
