import React, { useState } from 'react'
import { motion } from 'framer-motion'
import styled from '@emotion/styled'
import { mq } from '@/theme/theme'
import Cloud from './Cloud'
import HillyBackGround from './HillyBackGround'
import GrassBackground from './GrassBackground'
import Trees from './Trees'
import FrontEndDeveloper from './FrontEndDeveloper'
import Name from './Name'
import TypedText from './TypedText'

const Container = styled(motion.div)({
  position: 'relative',
  overflowX: 'hidden',
  height: '100vh',
  width: '100vw',
})
const Scene = () => {
  const [animate, setAnimate] = useState(true)

  const handleTypedTextEnd = async () => {
    setAnimate(true)
  }
  return (
    <Container>
      <TypedText
        css={{
          position: 'absolute',
          top: '30%',
          paddingLeft: '30px',
        }}
        animate={animate}
        handleEnd={handleTypedTextEnd}
      />
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
      <Cloud
        x={20}
        y={15}
        moveSpeed={0.1}
        animate={animate}
        delay={8}
        css={{ zIndex: 6 }}
      />
      <Cloud
        x={50}
        y={10}
        moveSpeed={0.05}
        animate={animate}
        delay={8.3}
        css={{ height: '15%', zIndex: 3 }}
      />
      <Cloud
        x={80}
        y={40}
        moveSpeed={0.2}
        animate={animate}
        delay={8.6}
        css={{ height: '10%', zIndex: 1 }}
      />
      <Trees
        x={10}
        y={12}
        amount={1}
        animate={animate}
        delay={0.2}
        grassDelay={4}
      />
      <Trees
        x={20}
        y={5}
        amount={1}
        animate={animate}
        delay={0.3}
        grassDelay={4}
      />
      <Trees
        x={70}
        y={7}
        amount={1}
        animate={animate}
        delay={0.4}
        grassDelay={4}
      />
      <Trees
        x={95}
        y={10}
        amount={1}
        animate={animate}
        delay={0.5}
        grassDelay={4}
      />
      <Trees
        x={55}
        y={11}
        amount={1}
        animate={animate}
        delay={0.6}
        grassDelay={4}
      />
      <Trees
        x={30}
        y={13}
        amount={1}
        animate={animate}
        delay={0.7}
        grassDelay={4}
      />
      <Trees amount={6} y={13} animate={animate} delay={0.8} grassDelay={4} />
      <Trees amount={2} y={12} animate={animate} delay={0.9} grassDelay={4} />
      <HillyBackGround animate={animate} delay={4.5} css={{ zIndex: 5 }} />
      <GrassBackground animate={animate} delay={4} css={{ zIndex: 6 }} />
    </Container>
  )
}

export default Scene
