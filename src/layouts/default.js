import React from "react"
import tw from 'tailwind.macro'
import PropTypes from "prop-types"
import { Global } from "@emotion/core"
import { Body } from '../styles/global'
import Header from '../components/header'
import Footer from '../components/footer'
import Believe from '../components/believe'
import Contact from '../components/contact'
import ImageGrid from '../components/imagegrid'

const Layout = ({ children }) => {
  const Wrapper = tw.div`mb-20 flex flex-wrap font-body w-full`
  const Container = tw.div`w-full max-w-6xl mx-auto flex flex-wrap px-8`
  const Main = tw.div`w-full md:w-3/5`
  const Side = tw.div`w-full md:w-2/5 flex flex-wrap p-2 content-start`
  const Sticky = tw.div`sticky top-0`

  return (
    <>
      <Global styles={Body}></Global>
      <Wrapper>
        <Header />
        <Believe />
        <Container>
          <Main>
            {children}
          </Main>
          <Side>
            <Sticky>
              <ImageGrid />
              <Contact />
            </Sticky>
          </Side>
        </Container>
      </Wrapper>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
