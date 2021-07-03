import React, { useState } from 'react'

import { motion, Variants, useMotionValue, useTransform } from 'framer-motion'
import { PageProps } from 'gatsby'
import TypedText from '../components/TypedText'

const typedVariant: Variants = {
  initial: {
    x: '-100%',
    transition: {
      duration: 0.3,
    },
  },
  show: {
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
}

const Home: React.FC<PageProps> = () => {
  const [animate, setAnimate] = useState(false)
  const handleEnd = () => {
    setAnimate(true)
  }

  return (
    <>
      <TypedText
        motionProps={{
          variants: typedVariant,
          initial: 'initial',
          animate: animate ? 'initial' : 'show',
        }}
        handleEnd={handleEnd}
      />
    </>
  )
}

export default Home
