import React from 'react'
import { CSSObject } from '@emotion/react'
import styled from '@emotion/styled'
import Typewriter from 'typewriter-effect'
import { motion, Variants } from 'framer-motion'
import { mq } from '../theme/theme'

const TypedBox = styled(motion.div)(({ theme }) =>
  mq({
    width: ['250px', '300px', '400px', '500px', '600px'],
    height: ['135px', '160px', '200px', '200px', '200px'],
    padding: '10px',
    backgroundColor: 'black',
    color: 'white',
    border: `solid ${theme.colors.borderColor}`,
    borderWidth: '1px 1px 1px 0px',
    boxShadow: `3px 3px 10px 1px ${theme.colors.shadow}`,
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

interface Props {
  handleEnd?: () => void
  css?: CSSObject
  animate: boolean
}

const TypedText: React.FC<Props> = ({ handleEnd, animate, ...props }) => {
  const text1 = 'Hi!'
  const text2 = " I'm Roopesh."
  const text3 = 'createScene()'
  const text4 = '<br>Creating scene...'

  const typedTextVariant: Variants = {
    initial: {
      x: '-110%',
      transition: {
        duration: 0.3,
      },
    },
    show: {
      x: '-3%',
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <TypedBox
      {...props}
      variants={typedTextVariant}
      initial="initial"
      animate={animate ? 'initial' : 'show'}
    >
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
