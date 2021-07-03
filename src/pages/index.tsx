import React, { useState } from 'react'

import { motion, Variants, useMotionValue, useTransform } from 'framer-motion'
import { PageProps } from 'gatsby'
import styled from '@emotion/styled'
import { mq } from '@/theme/theme'
import TypedText from '../components/TypedText'

const Container = styled.div({})

const typedTextVariant: Variants = {
  initial: {
    x: '-100%',
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

const Home: React.FC<PageProps> = () => {
  const [animate, setAnimate] = useState(false)
  const handleEnd = () => {
    setAnimate(false)
  }

  return (
    <>
      <Container>
        <TypedText
          css={mq({
            position: 'absolute',
            top: '30%',
            paddingLeft: ['30px'],
          })}
          motionProps={{
            variants: typedTextVariant,
            initial: 'initial',
            animate: animate ? 'initial' : 'show',
          }}
          handleEnd={handleEnd}
        />
      </Container>
    </>
  )
}

export default Home
