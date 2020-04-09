import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

const Header = ({ darkMode, location, title }) => {
  const data = useStaticQuery(graphql`
    query {
      dark: file(relativePath: { eq: "icons/brocolli-icon-circle-eggshell.png" }) {
        childImageSharp {
          fixed(width: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      light: file(relativePath: { eq: "icons/brocolli-icon-circle-black.png" }) {
        childImageSharp {
          fixed(width: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  const rootPath = `${__PATH_PREFIX__}/`
  return (
    <HeaderContainer>
      {location.pathname === rootPath ? (
        <LogoCenter>
        <Link
          to={`/`}
        >
          <Image
            fixed={darkMode ? data.dark.childImageSharp.fixed : data.light.childImageSharp.fixed}
            alt={"logo_brocolli"}
          />
        </Link>
        </LogoCenter>
      ) : (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )}
    </HeaderContainer>
  )
}

const HeaderContainer = styled("header")`
  position: relative; 
`;

const LogoCenter = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  a {
    box-shadow: none;
  }
`;

export default Header;