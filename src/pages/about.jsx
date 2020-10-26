import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About" />
      <h1>About</h1>
      <p>
        Salut, I'm Ben, a software engineer student from{" "}
        <span aria-labelledby="french-flag">🇫🇷</span>.{" "}
      </p>
      <p>
        I write this blog, called Brocolli, to share the stuff I'm learning, and
        experiment with cool front-end stuff. You can learn more about the birth
        of this blog <Link to={"/blog-purpose/"}>here</Link>.
      </p>
      <h2>Some tools I use</h2>
      <ul>
        <li>
          Hosting :{" "}
          <a
            href={"https://vercel.com/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            Vercel
          </a>
        </li>
        <li>
          Static site generator :{" "}
          <a
            href={"https://www.gatsbyjs.org/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            Gatsby
          </a>
        </li>
        <li>
          Syntax highlighting:{" "}
          <a
            href={"https://prismjs.com/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            PrismJS
          </a>
        </li>
        <li>
          Editor:{" "}
          <a
            href={"https://code.visualstudio.com/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visual Code Studio
          </a>
        </li>
        <li>
          Browser:{" "}
          <a
            href={"https://brave.com/mjs929"}
            target="_blank"
            rel="noopener noreferrer"
          >
            Brave
          </a>
        </li>
      </ul>
      <h2>Books</h2>
      <p>
        You can find <Link to={"books"}>here</Link> a list with some of the
        books I read in the last couple of years.
      </p>
      <h2>Some things I really love</h2>
      <ul>
        <li>Rugby</li>
        <li>Mountains</li>
        <li>Making stuff (DIY)</li>
      </ul>
      <h2>Wanna say hi?</h2>
      <ul>
        <li>Email : benjamin.vaysse [at] gmail.com</li>
        <li>
          <a
            href={"https://www.github.com/benjamin-vaysse/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </li>
        <li>
          <a
            href={"https://www.linkedin.com/in/benjaminvaysse/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
        </li>
        <li>
          <a
            href={"https://www.twitter.com/_VayB/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </li>
      </ul>
    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
