import React from 'react'
import { mq } from '@/theme/theme'
import getRandomBetween from '../helpers/getRandomBetween'
import Grass from './Grass'
import Tree from './Tree'

interface Props {
  animate: boolean
  amount?: number
  delay?: number
  grassDelay?: number
}

const Trees: React.FC<Props> = ({
  animate,
  amount = 10,
  delay = 0,
  grassDelay = 0,
}) => {
  return (
    <>
      {new Array(amount).fill(1).map((t, i) => {
        const bottom = getRandomBetween(5, 15) // tree position from bottom
        const bottomPercent = ((bottom - 4) / 10) * 100 // map bottom 5-15 to 1-100%
        const left = `${getRandomBetween(0, 100)}%` // position from left
        const height = `${((100 - bottomPercent) / 100) * 40}%` // tree size
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
              delay={grassDelay + delay + i * 0.2}
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
              delay={delay + i * 0.2}
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
              delay={grassDelay + delay + i * 0.2}
            />
          </div>
        )
      })}
    </>
  )
}

export default Trees
