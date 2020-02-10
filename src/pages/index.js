import React from "react"
import { Link } from "gatsby"

import Layout from "../layouts/default"
import SEO from "../components/seo"
import { H1 } from "../styles/type"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <H1>Hi people</H1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
