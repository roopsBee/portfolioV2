import React from 'react'
import { motion, Variants } from 'framer-motion'
import styled, { CSSObject } from '@emotion/styled'

const MGrassBackground = styled(motion.div)({
  position: 'absolute',
  background: 'linear-gradient(0deg, #05e705 0%, #02ac02 90%, #96cb78 100%)',
  width: '100%',
  height: '15%',
  bottom: 0,
  left: 0,
})

interface Props {
  animate: boolean
  delay?: number
  css?: CSSObject
}

const GrassBackground: React.FC<Props> = ({ animate, delay = 0, ...props }) => {
  const variants: Variants = {
    initial: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay,
        duration: 1,
        ease: 'easeInOut',
      },
    },
  }
  return (
    <MGrassBackground
      {...props}
      variants={variants}
      initial="initial"
      animate={animate ? 'show' : 'initail'}
    />
  )
}

export default GrassBackground
