import React from "react"
import styled from "styled-components"
import Colors from "../rules/colors"


const Footer = ({themeContext}) => {
  const themeIcon = themeContext.isDark ? "☀️" : "🌙️" ;
  return (
    <FooterContainer>
      <Text>© {new Date().getFullYear()}-Present</Text>
      <DayNightToggle
        darkMode={themeContext.isDark}
        onClick={() => {
          themeContext.toggleDark();
        }
        }
        title={"toggle dark mode"}
      >
        {themeIcon}
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
  color: ${props => props.theme.isDark ? Colors.utility.white.default : Colors.utility.paragraph.default};
  border: none;
  padding: 0.4rem 1rem;
  border-radius: 5px;
  font-size: 2rem;
  background-color: inherit;
`

export default Footer
