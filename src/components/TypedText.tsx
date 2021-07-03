import React from 'react'
import styled from '@emotion/styled'
import Typewriter from 'typewriter-effect'
import { mq } from '../theme/theme'

const TypedBox = styled.div(({ theme }) =>
  mq({
    width: ['250px', '300px', '400px', '500px', '600px'],
    height: ['150px', '175px', '200px', '200px', '200px'],
    padding: '20px',
    backgroundColor: 'black',
    color: 'white',
    border: `solid ${theme.colors.borderColor}`,
    borderWidth: '1px 1px 1px 0px',
    boxShadow: `${theme.boxShadow}`,
    borderRadius: '0px 10px 10px 0px',
    '& .Typewriter__wrapper, .Typewriter__cursor ': {
      fontFamily: `${theme.fonts.IBM}, sans-serif`,
      fontSize: ['18px', '18px', '20px', '22px', '22px'],
    },
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }),
)

const TypedText: React.FC<{ handleEnd: () => void }> = ({ handleEnd }) => {
  const text1 = 'Hi!'
  const text2 = " I'm Roopesh."
  const text3 = 'createScene()'
  const text4 = '<br>Creating scene...'

  return (
    <TypedBox>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .pauseFor(1000)
            .typeString(text1)
            .pauseFor(1000)
            .typeString(text2)
            .pauseFor(1500)
            .deleteAll()
            .pauseFor(1000)
            .typeString(text3)
            .pauseFor(1000)
            .pasteString(text4, null)
            .pauseFor(300)
            .callFunction(handleEnd)
            .start()
        }}
      />
    </TypedBox>
  )
}

export default TypedText
