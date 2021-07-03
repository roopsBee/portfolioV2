import React, { useState } from 'react'

import { motion, Variants, useMotionValue, useTransform } from 'framer-motion'
import { PageProps } from 'gatsby'
import TypedText from '../components/TypedText'

const Home: React.FC<PageProps> = () => {
  const handleEnd = () => {
    console.log('end')
  }

  return (
    <>
      <TypedText handleEnd={handleEnd} />
    </>
  )
}

export default Home
