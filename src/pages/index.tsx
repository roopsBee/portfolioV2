import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { PageProps } from 'gatsby'
import styled from '@emotion/styled'
import { mq } from '@/theme/theme'
import FrontEndDeveloper from '../components/FrontEndDeveloper'
import Name from '../components/Name'
import TypedText from '../components/TypedText'

const Container = styled(motion.div)({
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
})

const Home: React.FC<PageProps> = () => {
  const [animate, setAnimate] = useState(false)

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
      </Container>
    </>
  )
}

export default Home
