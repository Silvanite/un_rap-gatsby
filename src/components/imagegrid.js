import React from "react"
import Img from 'gatsby-image'
import tw from 'tailwind.macro'
import styled from '@emotion/styled'
import { useStaticQuery, graphql } from "gatsby"

const ImageGrid = () => {
  const images = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "sidebar/hannah-un_rap.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 368) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image2: file(relativePath: { eq: "sidebar/shop-window.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 368) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image3: file(relativePath: { eq: "sidebar/sunflower-jars-13.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 368) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image4: file(relativePath: { eq: "sidebar/staff-refill.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 368) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image5: file(relativePath: { eq: "sidebar/customer-jar.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 368) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const Wrapper = tw.div`flex flex-wrap w-full`
  const ImageContainer = tw.div`p-2 w-1/2`
  const DualImageContainer = styled(ImageContainer)`
    ${tw`flex flex-col justify-between`}
  `

  return (
    <Wrapper>
      <ImageContainer>
        <Img fluid={images.image1.childImageSharp.fluid} />
      </ImageContainer>
      <ImageContainer>
        <Img fluid={images.image2.childImageSharp.fluid} />
      </ImageContainer>
      <ImageContainer>
        <Img fluid={images.image3.childImageSharp.fluid} />
      </ImageContainer>
      <DualImageContainer>
        <Img fluid={images.image4.childImageSharp.fluid} />
        <Img fluid={images.image5.childImageSharp.fluid} />
      </DualImageContainer>
    </Wrapper>
  )
}

export default ImageGrid
