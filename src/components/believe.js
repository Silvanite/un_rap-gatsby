import React, { useState, useEffect } from "react"
import tw from "tailwind.macro"

const Wrapper = tw.div`my-8 px-8 py-16 text-3xl text-gray-700 leading-none font-display bg-orange-100 md:mt-0`
const Container = tw.div`max-w-xl mx-auto md:px-8 md:text-center`
const Message = tw.span`font-bold text-orange-500 block md:inline md:pl-2`

const Believe = () => {
  const [index, setIndex] = useState(0)
  const believes = [
    "sustainable choice",
    "a circular economy",
    "solutions & positivity",
    "local community",
    "oraganic food",
    "unpackaged goods",
    "low carbon miles",
    "kindness & community",
  ]

  const BelieveMessage = () => <Message>{believes[index]}</Message>

  useEffect(() => {
    const timer = () => {
      const newIndex = index + 1
      const nextIndex = newIndex < believes.length ? newIndex : 0
      setIndex(nextIndex)
    }
    const timerId = setInterval(timer, 2500)
    return () => clearInterval(timerId);
  }, [index, believes])

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
