import React from "react"
import PropTypes from "prop-types"
import { Global } from "@emotion/core"
import { Body } from '../styles/global'
import Header from '../components/header'
import Believe from '../components/believe'

const Layout = ({ children }) => {
  return (
    <>
      <Global styles={Body}></Global>
      <Header />
      <Believe />
      {children}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
