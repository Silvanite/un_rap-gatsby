import React from "react"
import { Link } from "gatsby"

import Layout from "../layouts/default"
import SEO from "../components/seo"

import { H1 } from "../styles/type"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <H1>Hi from the second page</H1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
