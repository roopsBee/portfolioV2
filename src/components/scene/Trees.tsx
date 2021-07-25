import React, { useMemo } from 'react'
import { mq } from '@/theme/theme'
import getRandomBetween from '../../helpers/getRandomBetween'
import Grass from './Grass'
import Tree from './Tree'

interface Props {
  animate: boolean
  amount?: number
  delay?: number
  grassDelay?: number
  x?: number
  y?: number
}

const Trees: React.FC<Props> = ({
  animate,
  amount = 10,
  delay = 0,
  grassDelay = 0,
  x,
  y,
}) => {
  let treeX
  let treeY
  if (x && x < 0) {
    treeX = 0
  } else if (x && x > 100) {
    treeX = 100
  } else if (x) {
    treeX = x
  }
  if (y && y < 5) {
    treeY = 5
  } else if (y && y > 13) {
    treeY = 13
  } else if (y) {
    treeY = y
  }
  const trees = useMemo(
    () =>
      new Array(amount).fill(1).map((t, i) => {
        const bottom = treeY || getRandomBetween(5, 15) // tree position from bottom
        const bottomPercent = ((bottom - 4) / 10) * 100 // map bottom 5-15 to 1-100%
        const left = treeX ? `${treeX}%` : `${getRandomBetween(0, 100)}%` // position from left
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
                bottom: `${bottom - 1 * ((100 - bottomPercent) / 100)}%`,
                zIndex,
                height: `calc(${height}/4)`,
                transform: grassPosition(),
              }}
              animate={animate}
              delay={grassDelay + delay + i * 0.2}
            />
          </div>
        )
      }),
    [animate],
  )

  return <>{trees}</>
}

export default React.memo(Trees)
