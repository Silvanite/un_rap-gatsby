import React from 'react'
import tw from 'tailwind.macro'
import { css } from '@emotion/core'
import { A } from '../styles/type'

const Contact = () => {
    const Wrapper = tw.div`flex flex-wrap w-full p-2`
    const Span = tw.span`font-bold`
    const IconGroup = tw.p`w-full ml-8 mb-4`
    const Icon = tw.svg`-ml-8 w-6 h-6 fill-current inline mr-2`
    const IconColourPrimary = css`${tw`text-green-500`}`
    const IconColourSecondary = css`${tw`text-green-800`}`

    return (
        <Wrapper>
            <IconGroup>
                <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path css={IconColourPrimary} d="M22 8.62V18a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.62l9.55 4.77a1 1 0 0 0 .9 0L22 8.62z"/><path css={IconColourSecondary} d="M12 11.38l-10-5V6c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v.38l-10 5z"/></Icon>
                <A href="mailto:info@unrap.co.uk">info@unrap.co.uk</A>
            </IconGroup>
            <IconGroup>
                <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path css={IconColourPrimary} d="M15 18.12L9.45 20.9a1 1 0 0 1-.9 0l-6-3A1 1 0 0 1 2 17V4a1 1 0 0 1 1.45-.9L9 5.89l5.55-2.77a1 1 0 0 1 .9 0l6 3A1 1 0 0 1 22 7v13a1 1 0 0 1-1.45.89L15 18.12z"/><path css={IconColourSecondary} d="M9 21V5.88l5.55-2.77A1 1 0 0 1 15 3v15.1L9.45 20.9A1 1 0 0 1 9 21z"/></Icon>
                <A href="https://www.google.com/maps?saddr=My+Location&daddr=un_rap,+Webber+Hill,+Falmouth">1 Webber Hill, Falmouth, TR11 2TE</A>
            </IconGroup>
            <IconGroup>
                <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><circle cx="12" cy="12" r="10" css={IconColourPrimary} /><path css={IconColourSecondary} d="M13 11.59l3.2 3.2a1 1 0 0 1-1.4 1.42l-3.5-3.5A1 1 0 0 1 11 12V7a1 1 0 0 1 2 0v4.59z"/></Icon>
                Monday – Saturday: <Span>9:30 - 16:30</Span>
                <br />
                Sunday: <Span>10:00 - 16:00</Span>
            </IconGroup>
        </Wrapper>
    )
}

export default Contact
