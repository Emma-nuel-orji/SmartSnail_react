import React from 'react'
import useWindowSize  from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

function ConfettiComponent() {
    const { width, height } = useWindowSize()
  return (
    <Confetti
    numberOfPieces={250}
    gravity={0.02}
     width={width}
     height={height*1.5}
    />
  )
}

export default ConfettiComponent