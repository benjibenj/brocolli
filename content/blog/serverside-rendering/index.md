---
title: "Single Page Apps (SPA), Static Site Generation (SSG) and Server-Side Rendering (SSR)"
date: "2020-09-20T17:05:00+02:00"
description: "Too many acronyms"
---

# 🎬

I'm starting a fresh, exciting, cool new project. While looking for ways to implement it, I got interested
in [NextJS](https://github.com/zeit/next.js/). This React framework offers a hybrid static & server rendering. Before 
diving into it, I thought I'd write a little article to sum up what I should know about different ways to render a 
web page.

## Single Page Apps

With the success of modern frontend JavaScript framework such as React, Angular or Vue.js, many of today's applications
are Single Page Apps (SPA).

> A single-page application (SPA) is a web application or website that interacts with the web browser by dynamically
> rewriting the current web page with new data from the web server, instead of the default method of the browser loading
> entire new pages. The goal is faster transitions that make the website feel more like a native app.

As explained in this [wikipedia definition](https://en.wikipedia.org/wiki/Single-page_application),
one of the reasons why React, Angular or Vue.js grew so much, is that they create websites that are **super fast** for users. The user
interface is generated directly by the browser, thus the name client-side rendering (CSR). Once the JavaScript is loaded,
**everything is executed on the client's side.**

This comes with a few cons :

1. because everything is rendered on the browser, search engines robots usually have trouble reading info from SPA, thus
   leading to **pretty bad SEO** (Search Engine Optimization a.k.a. how to be on Google's first page).
2. the initial load can be a bit long (especially on older devices or with a slow connection).

## Static Generation

With Static Site Generation (SSG), pages are pre-renders into HTML on the server **at build time**. The HTML can be globally
cached by a CDN and served instantly. Since all of your pages and content have been generated at build time, your
website doesn't have to interact with an API, which makes it very fast! Also, because the website is solely composed
of static files, it makes it very secure (there is no database), and super easy to deploy (with awesome services like
Netlify or Vercel).

A great solution I use to generate static websites is [Gatsby](https://github.com/gatsbyjs/gatsby) (based on React).

Unfortunately, for some apps, this implementation won't suit your needs because you're not always showing the same data
(imagine a weather app). You'd have to rebuild the site every time you want to update its content.

## Server-Side Rendering

Before SPA, the norm was HTML content being returned by the server, either directly statically or generated by a server 
language (in PHP, Java, Python). This operation is called server-side rendering (SSR) or server-side rendering. 
 
We're seeing this solution more and more because it presents many advantages.
1) The performance of the user's device doesn't matter so much.
2) Your data is always up-to-date.
3) Your website loads fast because it fetches its content on the server-side before rendering it to the user.

Implementing this solution is relevant if you're building a complex web application with constantly changing data and if
you can handle a lot of API calls to the server (since they’re made per request).

## Combining server-side rendering and client-side rendering ?

Combining the speed of the initial load with server-side rendering and the interactivity of SPAs can be done with
frameworks like [Nuxt.js](https://github.com/nuxt/nuxt.js) (Vue.js) or [NextJS](https://github.com/zeit/next.js/)
(React). 

It's worth giving it a look !

## Conclusion

We've seen three approaches to rendering websites, client-side, server-side or pre-rendering at build time, but it's 
worth emphasizing that there is not a perfect, universal solution. It's worth experimenting with all the proposed
 solutions to understand each better, and then pick one or a hybrid of 2. 
 
Hasta luego 👋


