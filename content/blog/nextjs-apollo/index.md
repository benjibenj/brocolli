---
title: "How to use NextJS with Apollo"
date: "2020-10-26T21:00:00+02:00"
description: "Generate static and/or server-side-rendered pages from a graphQL API"
---

# 💈

Maybe you found yourself in the same situation as I did. You're building a **NextJS** app with a **NodeJS + Apollo GraphQL** backend.

Because you're using NextJS, you probably want some of your pages to be static or server-side rendered.

Now, as you're finding out about how to fetch from your graphQL data in this [unmissable tutorial](https://www.apollographql.com/docs/react/data/queries/), you realize that the `UseQuery` hook could be quite useful.

## Fetching data with the `useQuery` hook

Here's the example that's given to us in the referenced Apollo GraphQL tutorial :

```javascript
import { gql, useQuery } from "@apollo/client"

const GET_DOGS = gql`
  query GetDogs {
    dogs {
      id
      breed
    }
  }
`

function Dogs({ onDogSelected }) {
  const { loading, error, data } = useQuery(GET_DOGS)

  if (loading) return "Loading..."
  if (error) return `Error! ${error.message}`

  return (
    <select name="dog" onChange={onDogSelected}>
      {data.dogs.map(dog => (
        <option key={dog.id} value={dog.breed}>
          {dog.breed}
        </option>
      ))}
    </select>
  )
}
```

The `useQuery` hook is super useful ! We just pass it the graphQL query and it handles the `loading` and `error` states.

This is a perfectly standart `React` component, but how would you do this if you were generating the page at build time (static pages) or on a server (server-side pages)?

## Build static pages : don't forget the Rules of Hooks

When hooks got released in React 16.8, Facebook added a very important piece of document to their docs : [Rules of Hooks](https://reactjs.org/docs/hooks-rules.html). One of those rules is **"Only Call Hooks from React Functions. Don’t call Hooks from regular JavaScript functions."**.

This is quite interesting in our case. Indeed, the `useQuery` hook is perfectly acceptable for client-side rendered pages, but if we're building a static page, the query isn't executed inside the component.

### getStaticPaths and getStaticProps

To create static pages in NextJS, you first have to create the `paths`. To do so, we create a `getStaticPaths` function. You'll probably want to get the paths from your graphQL API, but because we can't call the `useQuery` hook (we're not inside a component), we'll be using [`graphql-request`](https://github.com/prisma-labs/graphql-request), a minimal GraphQL client.

We'll be getting the data directly with a simple `request`.

Let's say we're building a `[movieName].jsx` page. Here's what the `getStaticPaths` and `getStaticProps` functions will look like.

```javascript
import { request, gql } from "graphql-request"

const nameQuery = gql`
  query getMovieNames{
    movies {
      name
    }
  }
`

const fullQuery = gql`
  query getMovie($name: String!){
    movie(name: $name){
      id
      name
      year
      actors {
         firstname
         lastname
      }
    }
  }
`

export const getStaticPaths = async () => {
  const res = await request("https://supercoolapi.cool/v1/movies", nameQuery)
  // Get the paths we want to pre-render based on users
  const paths = res.movies.map(movie) => ({
    params: { movieName: movie.name },
  }))
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

export const getStaticProps = async ({ params }) => {
  try {
    const name = params?.movieName
    const res = await request("https://supercoolapi.cool/v1/movies", fullQuery, { name: name })
    // By returning { props: producer }, the StaticPropsDetail component
    // will receive `producer` as a prop at build time
    return { props: { movie: res.movie } }
  } catch (err) {
    return { props: { errors: err.message } }
  }
}
```

## Conclusion

Time to sum it up !

Here's how you should fetch your data from your Apollo GraphQL API :

- For a standard component (client side rendered page) : go with the `useQuery` hook
- For a static page : use a minimal graphQL client such as `graphql-request` and make a simple request in `getStaticPaths` and `getStaticProps`.
- For a server-side rendered page : I'll update this article pretty soon with a new section covering this problematic!

See ya 𓁚
