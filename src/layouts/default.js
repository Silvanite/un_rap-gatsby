import React from "react"
import PropTypes from "prop-types"
import { Global } from "@emotion/core"
import { Body } from '../styles/global'
import Header from '../components/header'
import Footer from '../components/footer'
import Believe from '../components/believe'

const Layout = ({ children }) => {
  return (
    <>
      <Global styles={Body}></Global>
      <Header />
      <Believe />
      {children}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
