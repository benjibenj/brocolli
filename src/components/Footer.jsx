import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Footer = ({ darkMode, switchDarkMode }) => {
  return (
    <FooterContainer>
      <Text>© {new Date().getFullYear()}</Text>
      <DayNightToggle
        darkMode={darkMode}
        onClick={() => switchDarkMode(!darkMode)}
        title={"toggle dark mode"}
      >
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
