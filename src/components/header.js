import React from "react"
import { Link } from "gatsby"
import tw from "tailwind.macro"
import { css } from "@emotion/core"
import Logo from '../components/logo'

const HeaderElement = tw.header`pt-8 px-8 flex justify-center md:hidden`
const linkStyle = css`${tw`w-48`}`

const Header = () => (
    <HeaderElement>
        <Link css={linkStyle} to="/">
          <Logo />
        </Link>
    </HeaderElement>
)

export default Header
