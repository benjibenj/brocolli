import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Not Found" />
      <h1>Not Found</h1>
      <p>
        You just hit a route that doesn&#39;t exist... What the hell were you
        thinking?
      </p>
      <p>
        A few options you now have :
        <ul>
          <li>
            go back to the <Link to="/">homepage</Link>.
          </li>
          <li>
            close your computer, get a nice blanket and read a good ol' book.
          </li>
        </ul>
      </p>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
