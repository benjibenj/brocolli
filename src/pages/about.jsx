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
        I'm Ben, a software engineer student. I write this blog to share the stuff
        I'm learning, and experiment with cool front-end stuff. You learn more about
        the birth of this blog <Link to={"/blog-purpose/"}>here</Link>.
      </p>
      <h2>Companies I've worked at</h2>
      <ul>
        <li><a href={"https://www.foodrelay.ca/"} target="_blank" rel="noopener noreferrer">FoodRelay</a> (2019-2020)</li>
        <li><a href={"https://www.mooveat.co/"} target="_blank" rel="noopener noreferrer">Mooveat</a> (2019)</li>
      </ul>
      <h2>Setup and Tools</h2>
      <ul>
        <li>Computer : 13" MacBook Air (2015)</li>
        <li>Hosting : <a href={"https://vercel.com/"} target="_blank" rel="noopener noreferrer">Vercel</a></li>
        <li>Static site generator : <a href={"https://www.gatsbyjs.org/"} target="_blank" rel="noopener noreferrer">Gatsby</a></li>
        <li>Syntax highlighting: <a href={"https://prismjs.com/"} target="_blank" rel="noopener noreferrer">PrismJS</a></li>
      </ul>
      <h2>Books</h2>
      <p>You can find <Link to={"books"}>here</Link> a list with some of the books I read in the last couple of years,
      I could be reviewing some books in the future.</p>
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
