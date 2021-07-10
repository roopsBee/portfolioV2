import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { PageProps } from 'gatsby'
import styled from '@emotion/styled'
import { mq } from '@/theme/theme'
import getRandomBetween from '../helpers/getRandomBetween'
import Grass from '../components/Grass'
import FrontEndDeveloper from '../components/FrontEndDeveloper'
import Name from '../components/Name'
import TypedText from '../components/TypedText'
import Tree from '../components/Tree'

const Container = styled(motion.div)({
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  overflowX: 'hidden',
  height: '100vh',
})

const treeArr = new Array(10).fill(1)

const Home: React.FC<PageProps> = () => {
  const [animate, setAnimate] = useState(true)

  const handleTypedTextEnd = async () => {
    setAnimate(true)
  }
  const trees = treeArr.map((t, i) => {
    const bottom = getRandomBetween(5, 15)
    const left = `${getRandomBetween(0, 100)}%`
    const height = `${(5 / bottom) * 40}%`
    const zIndex = Math.floor((15 / bottom) * 100)
    const grassPosition = () => `translate(${getRandomBetween(-85, 0)}%)`
    return (
      <div key={Math.random()}>
        <Grass
          css={{
            left,
            bottom: `${bottom + 0.2}%`,
            zIndex,
            height: `calc(${height}/4)`,
            transform: grassPosition(),
          }}
          delay={i * 0.2}
          animate={animate}
        />
        <Tree
          key={Math.random()}
          css={mq({
            bottom: `${bottom}%`,
            left,
            right: 0,
            width: 'auto',
            height,
            zIndex,
          })}
          animate={animate}
          delay={i * 0.2}
        />
        <Grass
          css={{
            left,
            bottom: `${bottom - 1}%`,
            zIndex,
            height: `calc(${height}/4)`,
            transform: grassPosition(),
          }}
          animate={animate}
          delay={i * 0.2}
        />
      </div>
    )
  })

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
        {trees}
      </Container>
    </>
  )
}

export default Home
