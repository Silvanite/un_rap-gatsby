import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import tw from "tailwind.macro"

const Wrapper = tw.div`my-8 px-8 py-16 text-3xl text-gray-700 leading-none font-display bg-orange-100 md:mt-0`
const Container = tw.div`max-w-xl mx-auto md:px-8 md:text-center`
const Message = tw.span`font-bold text-orange-500 block md:inline md:pl-2`

const Believe = () => {
  const [index, setIndex] = useState(0)

  const {
    prismic: {
      allBelieves: { edges },
    },
  } = useStaticQuery(
    graphql`
      query {
        prismic {
          allBelieves {
            edges {
              node {
                message
                duration
              }
            }
          }
        }
      }
    `
  )

  const BelieveMessage = () => (
    <Message>{edges[index].node.message[0].text}</Message>
  )

  useEffect(() => {
    const timer = () => {
      const newIndex = index + 1
      const nextIndex = newIndex < edges.length ? newIndex : 0
      setIndex(nextIndex)
    }
    const timerId = setInterval(timer, edges[index].node.duration || 2500)
    return () => clearInterval(timerId)
  }, [index, edges])

  return (
    <Wrapper>
      <Container>
        We belive in
        <BelieveMessage />
      </Container>
    </Wrapper>
  )
}

export default Believe
