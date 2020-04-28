import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Books = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  console.log(data.allBooksJson.edges);
  const fictBooks = data.allBooksJson.edges.filter(book => book.node.categories.includes("non-fiction"));
  const nonFictBooks = data.allBooksJson.edges.filter(book => !book.node.categories.includes("non-fiction"));

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Books" />
      <h1>Books</h1>
      <p>
        I read a lot of books as a child, but kind of stopped when I entered
        secondary school. Entering university I rediscovered the pleasure of
        reading and I now read a few books every month. Here is a selection of
        some of my favorite recent readings.
      </p>
      <h2>Non fiction</h2>
      <ul>
        {fictBooks.map(book => {
          return (
            <li key={book.node.id}>
              <i>{book.node.title}</i> by{" "}
              {book.node.authors.map((author, index) => {
                if(index===0) return <span key={author}>{author}</span>
                else return <span key={author}>, {author}</span>
              })}
            </li>
          )
        })}
      </ul>
      <h2>Fiction</h2>
      <ul>
        {nonFictBooks.map(book => {
          return (
            <li key={book.node.id}>
              <i>{book.node.title}</i> by{" "}
              {book.node.authors.map((author, index) => {
                if(index===0) return <span key={author}>{author}</span>
                else return <span key={author}>, {author}</span>
              })}
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default Books

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allBooksJson {
      edges {
        node {
          id
          authors
          categories
          title
        }
      }
    }
  }
`
