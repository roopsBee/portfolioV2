import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import styled from '@emotion/styled'
import { mq } from '@/theme/theme'
import loadable from '@loadable/component'

const Cloud = loadable(() => import('./Cloud'))
const HillyBackGround = loadable(() => import('./HillyBackGround'))
const GrassBackground = loadable(() => import('./GrassBackground'))
const Trees = loadable(() => import('./Trees'))
const FrontEndDeveloper = loadable(() => import('./FrontEndDeveloper'))
const Name = loadable(() => import('./Name'))
const TypedText = loadable(() => import('./TypedText'))

const Container = styled(motion.div)({
  position: 'fixed',
  overflowX: 'hidden',
  height: '100vh',
  width: '100vw',
})

interface Props {
  isHideName?: boolean
  skipTypedText?: boolean
}

const Scene: React.FC<Props> = ({ isHideName, skipTypedText }) => {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    if (skipTypedText) setAnimate(true)
  }, [skipTypedText])

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
        isHide={isHideName}
        css={mq({
          position: 'absolute',
          top: [45, 60, 70, 85, 100],
          left: 0,
          zIndex: 1000,
        })}
        animate={animate}
        delay={2}
      />
      <FrontEndDeveloper
        isHide={isHideName}
        css={mq({
          position: 'absolute',
          top: [80, 105, 120, 140, 155],
          left: 0,
          zIndex: 1000,
        })}
        animate={animate}
        delay={4}
      />
      <Cloud
        x={20}
        y={15}
        moveSpeed={0.1}
        animate={animate}
        delay={7}
        css={{ zIndex: 6 }}
      />
      <Cloud
        x={50}
        y={10}
        moveSpeed={0.05}
        animate={animate}
        delay={7.5}
        css={{ height: '15%', zIndex: 3 }}
      />
      <Cloud
        x={80}
        y={40}
        moveSpeed={0.2}
        animate={animate}
        delay={8}
        css={{ height: '10%', zIndex: 1 }}
      />
      <Trees
        grassDelay={2}
        x={10}
        y={12}
        amount={1}
        animate={animate}
        delay={0}
      />
      <Trees
        grassDelay={2}
        x={20}
        y={5}
        amount={1}
        animate={animate}
        delay={0.2}
      />
      <Trees
        grassDelay={2}
        x={70}
        y={7}
        amount={1}
        animate={animate}
        delay={0.4}
      />
      <Trees
        grassDelay={2}
        x={95}
        y={10}
        amount={1}
        animate={animate}
        delay={0.6}
      />
      <Trees
        grassDelay={2}
        x={55}
        y={11}
        amount={1}
        animate={animate}
        delay={0.8}
      />
      <Trees
        grassDelay={2}
        x={30}
        y={13}
        amount={1}
        animate={animate}
        delay={1}
      />
      <Trees grassDelay={2} amount={3} y={13} animate={animate} delay={1.2} />
      <Trees grassDelay={2} amount={1} y={12} animate={animate} delay={1.4} />
      <HillyBackGround animate={animate} delay={5} css={{ zIndex: 5 }} />
      <GrassBackground animate={animate} delay={3} css={{ zIndex: 6 }} />
    </Container>
  )
}

export default Scene
