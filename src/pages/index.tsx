import React, { useEffect, useState } from 'react'
import {
  motion,
  Variants,
  useMotionValue,
  useTransform,
  useAnimation,
} from 'framer-motion'
import { PageProps } from 'gatsby'
import styled from '@emotion/styled'
import { mq, theme } from '@/theme/theme'
import Name from '../components/Name'
import TypedText from '../components/TypedText'

const Container = styled.div({
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
})

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

const nameSvgVariant: Variants = {
  initial: {
    opacity: 0,
    x: '-105%',
    backgroundColor: '#a1cf6b00',
    borderColor: '#000',
    boxShadow: `0px 0px 0px 0px ${theme.colors.shadow}`,
  },
  show: {
    opacity: 1,
    x: '-2%',
    transition: { staggerChildren: 0.2, duration: 0.5 },
  },
  fill: {
    borderColor: theme.colors.secondary,
    backgroundColor: theme.colors.primary,
    transition: { delay: 2, duration: 1 },
    boxShadow: `1px 1px 3px 1px ${theme.colors.shadow}`,
  },
}

const namePathVariant: Variants = {
  initial: { pathLength: 0, opacity: 0, fill: '#a1cf6b00', stroke: '#000' },
  show: {
    pathLength: 1,
    opacity: 1,
    stroke: theme.colors['dark-text'],
    transition: {
      duration: 2,
      ease: 'easeOut',
    },
  },
  fill: {
    fill: theme.colors.mostReadableText(theme.colors.primary),
    stroke: theme.colors.mostReadableText(theme.colors.primary),
    transition: {
      duration: 1,
      ease: 'easeOut',
    },
  },
}

const Home: React.FC<PageProps> = () => {
  const [animate, setAnimate] = useState(false)
  const nameControls = useAnimation()

  const handleTypedTextEnd = async () => {
    setAnimate(true)
    await nameControls.start('show')
    await nameControls.start('fill')
  }

  // useEffect(() => {
  //   const nameAnimation = async () => {
  //     await nameControls.start('show')
  //     await nameControls.start('fill')
  //   }
  //   nameAnimation()
  // }, [])

  return (
    <>
      <TypedText
        css={{
          position: 'absolute',
          top: '30%',
          paddingLeft: '30px',
        }}
        motionProps={{
          variants: typedTextVariant,
          initial: 'initial',
          animate: animate ? 'initial' : 'show',
        }}
        handleEnd={handleTypedTextEnd}
      />
      <Name
        css={mq({ position: 'absolute', top: [45, 60, 70, 85, 100] })}
        motionProps={{
          variants: nameSvgVariant,
          initial: 'initial',
          animate: nameControls,
        }}
        pathMotionProps={{ variants: namePathVariant }}
      />
      <Container>content</Container>
    </>
  )
}

export default Home
