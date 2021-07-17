import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { PageProps } from 'gatsby'
import styled from '@emotion/styled'
import { mq } from '@/theme/theme'
import HillyBackGround from '../components/HillyBackGround'
import GrassBackground from '../components/GrassBackground'
import Trees from '../components/Trees'
import FrontEndDeveloper from '../components/FrontEndDeveloper'
import Name from '../components/Name'
import TypedText from '../components/TypedText'

const Container = styled(motion.div)({
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  overflowX: 'hidden',
  height: '100vh',
})

const Home: React.FC<PageProps> = () => {
  const [animate, setAnimate] = useState(true)

  const handleTypedTextEnd = async () => {
    setAnimate(true)
  }

  return (
    <>
      <TypedText
        css={{
          position: 'absolute',
          top: '30%',
          paddingLeft: '30px',
        }}
        animate={animate}
        handleEnd={handleTypedTextEnd}
      />
      <Container>
        <Name
          css={mq({
            position: 'absolute',
            top: [45, 60, 70, 85, 100],
            left: 0,
          })}
          animate={animate}
          delay={0.5}
        />
        <FrontEndDeveloper
          css={mq({
            position: 'absolute',
            top: [80, 105, 120, 140, 155],
            left: 0,
          })}
          animate={animate}
          delay={2.5}
        />
        {/* <Trees delay={1} grassDelay={5} amount={10} animate={animate} /> */}
        <Trees x={50} y={5} amount={1} animate={animate} />
        <HillyBackGround animate={animate} delay={7} />
        <GrassBackground animate={animate} delay={8} />
      </Container>
    </>
  )
}

export default Home
