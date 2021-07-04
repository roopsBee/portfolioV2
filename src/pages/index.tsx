import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { PageProps } from 'gatsby'
import styled from '@emotion/styled'
import { mq } from '@/theme/theme'
import FrontEndDeveloper from '../components/FrontEndDeveloper'
import Name from '../components/Name'
import TypedText from '../components/TypedText'
import Tree from '../components/Tree'

const Container = styled(motion.div)({
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
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
          delay={1.5}
        />
        <Tree
          css={mq({
            bottom: '10%',
            left: '5%',
            width: 'auto',
            height: '40%',
          })}
          animate={animate}
          delay={1}
        />
      </Container>
    </>
  )
}

export default Home
