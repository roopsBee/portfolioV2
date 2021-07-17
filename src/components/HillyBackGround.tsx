import React, { useEffect } from 'react'
import { motion, useAnimation, Variants } from 'framer-motion'
import styled, { CSSObject } from '@emotion/styled'
import { mq, theme as thm } from '../theme/theme'

const Svg = styled(motion.svg)(() =>
  mq({
    position: 'absolute',
    width: '100%',
    minWidth: '800px',
    height: 'auto',
    display: 'block',
    left: 0,
    bottom: 0,
    transform: [
      'translate(-25%)',
      'translate(0%)',
      'translate(0%)',
      'translate(0%)',
      'translate(0%)',
    ],
  }),
)

const Path = styled(motion.path)({})

interface Props {
  css?: CSSObject
  animate: boolean
  delay?: number
}

const Icon: React.FC<Props> = ({ delay = 0, animate, ...props }) => {
  const svgControls = useAnimation()
  const pathControls = useAnimation()

  useEffect(() => {
    const animation = async () => {
      await svgControls.start('show')
      await pathControls.start(({ fill, item }) => ({
        strokeWidth: 0.5,
        pathLength: 1,
        opacity: 1,
        fill: `${fill}00`,
        stroke: thm.colors['dark-text'],
        transition: {
          delay: item * 0.2,
          duration: 1,
          ease: 'easeOut',
        },
      }))
      await pathControls.start(({ fill }) => ({
        fill,
        strokeWidth: 0,
        transition: {
          duration: 1,
          ease: 'easeOut',
        },
      }))
    }
    if (animate) animation()
  }, [animate])

  const svgVariant: Variants = {
    initial: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay,
      },
    },
  }

  const pathVariant: Variants = {
    initial: { pathLength: 0, opacity: 0, strokeWidth: 1, fill: '#00000000' },
  }
  return (
    <Svg
      {...props}
      variants={svgVariant}
      initial="initial"
      animate={svgControls}
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      version="1.1"
      viewBox="0 0 618.1 383.748"
    >
      <g fillOpacity="1" stroke="none">
        <Path
          variants={pathVariant}
          initial="initial"
          animate={pathControls}
          custom={{ fill: '#80a4a4', item: 1 }}
          style={{ marker: 'none' }}
          fill="#80a4a4"
          fillRule="nonzero"
          d="M235.6 272.183s149.5-123.1 161.5-131.6c12-8.46 10-12.76 36 9.3 25 22.1 178 159.7 178 159.7z"
          color="#000"
          display="inline"
          enableBackground="accumulate"
          overflow="visible"
          visibility="visible"
        />
        <Path
          variants={pathVariant}
          initial="initial"
          animate={pathControls}
          custom={{ fill: '#628989', item: 2 }}
          style={{ marker: 'none' }}
          fill="#628989"
          fillRule="nonzero"
          d="M409.1 133.723c-4 .3-7 3.16-12 6.86-12 8.5-161.5 131.6-161.5 131.6l173.5 17.3v-155.76z"
          color="#000"
          display="inline"
          enableBackground="accumulate"
          overflow="visible"
          visibility="visible"
        />
        <Path
          variants={pathVariant}
          initial="initial"
          animate={pathControls}
          custom={{ fill: '#e7e7e7', item: 3 }}
          style={{ marker: 'none' }}
          fill="#e7e7e7"
          fillRule="nonzero"
          strokeWidth="1"
          d="M409.1 133.723c-4 .3-7 3.16-12 6.86-2 1.7-11 8.4-22 17.6 0 3.4 0 6.7 1 8.3 3 4.1 17-3.8 17-3.8s2 10.6 16 10.6c11 0 12-13.6 12-13.6s19 12.3 25 5.9c1-.8 1-1.9 1-3.3-7-5.4-11-9.7-14-12.4-14-12.4-20-16.46-24-16.16z"
          color="#000"
          display="inline"
          enableBackground="accumulate"
          overflow="visible"
          visibility="visible"
        />
        <Path
          variants={pathVariant}
          initial="initial"
          animate={pathControls}
          custom={{ fill: '#e7e7e7', item: 4 }}
          style={{ marker: 'none' }}
          fill="#e7e7e7"
          fillRule="nonzero"
          strokeWidth="1"
          d="M409.1 133.723c-4 .3-7 3.16-12 6.86-2 1.7-11 8.4-22 17.6 0 3.4 0 6.7 1 8.3 3 4.1 17-3.8 17-3.8s2 10.6 16 10.6h1v-39.56h-1z"
          color="#000"
          display="inline"
          enableBackground="accumulate"
          overflow="visible"
          visibility="visible"
        />
        <Path
          variants={pathVariant}
          initial="initial"
          animate={pathControls}
          custom={{ fill: '#87a9a9', item: 5 }}
          style={{ marker: 'none' }}
          fill="#87a9a9"
          fillRule="nonzero"
          strokeWidth="1"
          d="M224.2 102.953c-4.2.3-7.5 3.86-13.9 8.44-14 10.01-174.6 146.29-188.8 157.99v4.5l451.6 45.6s-187-169.4-218.9-196.59c-17.6-15.3-24.6-20.32-30-19.94z"
          color="#000"
          display="inline"
          enableBackground="accumulate"
          overflow="visible"
          visibility="visible"
        />
        <Path
          variants={pathVariant}
          initial="initial"
          animate={pathControls}
          custom={{ fill: '#628989', item: 6 }}
          fill="#628989"
          d="M224.1 102.953c-4.2.3-7.4 3.86-13.8 8.44-13.4 9.61-165 133.59-190.3 154.29v8.6l204.9 20.4v-191.73h-.8z"
        />
        <Path
          variants={pathVariant}
          initial="initial"
          animate={pathControls}
          custom={{ fill: '#f2f2f2', item: 7 }}
          style={{ marker: 'none' }}
          fill="#f2f2f2"
          fillRule="nonzero"
          d="M224.1 102.953c-4.2.3-7.4 3.86-13.8 8.44-3 2.13-13.3 10.33-27.4 21.72-.4 4.07-.3 8.17 1.3 10.17 3.9 5 20.9-4.7 20.9-4.7s2.1 13 19.9 13c13.5 0 14.1-16.66 14.1-16.66s24.6 15.16 31 7.26c1-1 2-2.4 1-4.1-7.1-6.61-13.2-11.97-16.9-15.19-17.6-15.3-24.7-20.32-30.1-19.94z"
          color="#000"
          display="inline"
          enableBackground="accumulate"
          overflow="visible"
          visibility="visible"
        />
        <Path
          variants={pathVariant}
          initial="initial"
          animate={pathControls}
          custom={{ fill: '#e7e7e7', item: 8 }}
          style={{ marker: 'none' }}
          fill="#e7e7e7"
          fillRule="nonzero"
          d="M224.1 102.953c-4.2.3-7.4 3.86-13.8 8.44-3 2.13-13.3 10.33-27.4 21.72-.4 4.07-.3 8.17 1.3 10.17 3.9 5 20.9-4.7 20.9-4.7s2.1 13 19.9 13h.1v-48.63h-1z"
          color="#000"
          display="inline"
          enableBackground="accumulate"
          overflow="visible"
          visibility="visible"
        />
      </g>
      <Path
        variants={pathVariant}
        initial="initial"
        animate={pathControls}
        custom={{ fill: '#96cb78', item: 9 }}
        d="M618.1 219.083c-6 1.225-12 2.8-19 4.9-33 10.499-134 59.146-202 67.895-67 8.575-189.4-50.397-248-53.896C90.41 234.482 1 260.555 1 260.555l-1 1.575v121.618h618.1V219.083z"
        style={{ marker: 'none' }}
        fill="#96cb78"
        fillOpacity="1"
        fillRule="nonzero"
        stroke="none"
        color="#000"
        display="inline"
        enableBackground="accumulate"
        overflow="visible"
        visibility="visible"
      />
      <Path
        variants={pathVariant}
        initial="initial"
        animate={pathControls}
        custom={{ fill: '#77b155', item: 10 }}
        style={{ marker: 'none' }}
        fill="#77b155"
        fillOpacity="1"
        fillRule="nonzero"
        stroke="none"
        d="M0 281.807c6 .759 12 1.734 19 3.034 33 6.5 134 36.616 202 42.033 67 5.308 189.4-31.2 248-33.367 58.69-2.166 148.1 13.975 148.1 13.975l1 .975v75.291H0v-101.94z"
        color="#000"
        display="inline"
        enableBackground="accumulate"
        overflow="visible"
        visibility="visible"
      />
    </Svg>
  )
}

export default Icon
