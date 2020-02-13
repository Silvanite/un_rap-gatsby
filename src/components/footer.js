import React from "react"
import { Link } from "gatsby"
import tw from "tailwind.macro"
import styled from "@emotion/styled"

import LogoImg from "../images/un_rap-logo.png"
import SunflowerImg from "../images/sunflower-logo-72.png"
import Step1Img from "../images/step1.png"
import Step2Img from "../images/step2.png"
import Step3Img from "../images/step3.png"

const Footer = () => {
  const Wrapper = tw.div`fixed bottom-0 left-0 w-full bg-white p-2 border-t border-gray-300`
  const Container = tw.div`flex justify-around max-w-2xl mx-auto`
  const MenuItem = tw.div`text-center`
  const HomeLink = styled(Link)`
    ${tw`border-r-2 pr-8`}
  `
  const Icon = tw.img`inline-block h-16 w-16`
  const Logo = tw.img`hidden md:inline-block flex-1 h-12`

  return (
    <Wrapper>
      <Container>
        <MenuItem>
          <HomeLink to="/">
            <Icon src={SunflowerImg} />
            <Logo src={LogoImg} />
          </HomeLink>
        </MenuItem>
        <MenuItem>
          <Link to="/step1">
            <Icon src={Step1Img} />
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/howto/fill-containers">
            <Icon src={Step2Img} />
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/howto/pay">
            <Icon src={Step3Img} />
          </Link>
        </MenuItem>
      </Container>
    </Wrapper>
  )
}

export default Footer
