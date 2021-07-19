import React, { useEffect } from 'react'
import { motion, useAnimation, Variants } from 'framer-motion'
import styled, { CSSObject } from '@emotion/styled'

const SvgWrapper = styled(motion.div)(() => ({
  position: 'absolute',
  width: 'auto',
  height: '20%',
  display: 'block',
  transform: 'translate(-50%)',
  left: '50%',
  zIndex: 1,
}))

const Svg = styled.svg(() => ({
  width: 'auto',
  height: '100%',
}))

interface Props {
  css?: CSSObject
  animate?: boolean
  delay?: number
  x: number
  y: number
  moveSpeed?: number
}

const Cloud: React.FC<Props> = ({
  delay = 0,
  animate,
  x,
  y,
  moveSpeed = 1,
  ...props
}) => {
  const animationControls = useAnimation()
  const cloudMoveDuration = 60

  useEffect(() => {
    const animation = async () => {
      await animationControls.start('show')
      await animationControls.start('move')
      await animationControls.start('moveRepeat')
    }
    if (animate) animation()
  }, [animate])

  const svgVariant: Variants = {
    initial: {
      opacity: 0,
      scale: 0,
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        delay,
      },
    },
    move: {
      left: '-30%',
      transition: {
        duration: (x / 100) * (cloudMoveDuration / moveSpeed),
        ease: 'linear',
      },
    },
    moveRepeat: {
      left: '-30%',
      transition: {
        from: '120%',
        ease: 'linear',
        duration: cloudMoveDuration / moveSpeed,
        repeat: Infinity,
      },
    },
  }

  return (
    <SvgWrapper
      {...props}
      css={{ left: `${x}%`, top: `${y}%` }}
      variants={svgVariant}
      initial="initial"
      animate={animationControls}
    >
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        version="1"
        viewBox="0 0 322.79 248.83"
      >
        <defs>
          <radialGradient
            id="radialGradient6368"
            cx="254.25"
            cy="394.64"
            r="146.59"
            gradientTransform="matrix(1.2661 -.13912 .09975 .90778 -112.96 81.977)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#f9feff" />
            <stop offset="0.764" stopColor="#d3e7f0" />
            <stop offset="1" stopColor="#7e96ac" />
          </radialGradient>
          <radialGradient
            id="radialGradient6386"
            cx="137.33"
            cy="672.9"
            r="63.578"
            gradientTransform="matrix(1.602 0 0 1.1786 -81.826 -115.45)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#fff" />
            <stop offset="0.45" stopColor="#f1f9fd" />
            <stop offset="0.611" stopColor="#e3f3fb" />
            <stop offset="1" stopColor="#728e9d" />
          </radialGradient>
          <filter id="filter6390" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="1.174" />
          </filter>
          <filter id="filter6456" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="3.824" />
          </filter>
          <linearGradient
            id="linearGradient6474"
            x1="273.47"
            x2="229.3"
            y1="557.77"
            y2="328.36"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#9aaebb" />
            <stop offset="1" stopColor="#9aaebb" stopOpacity="0.186" />
          </linearGradient>
          <filter id="filter6476" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="2.357" />
          </filter>
          <filter id="filter6488" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="2.348" />
          </filter>
          <filter id="filter6496" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="2.351" />
          </filter>
          <filter id="filter6504" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="3.604" />
          </filter>
          <filter
            id="filter6512"
            width="1.222"
            height="1.262"
            x="-0.111"
            y="-0.131"
            colorInterpolationFilters="sRGB"
          >
            <feGaussianBlur stdDeviation="5.871" />
          </filter>
          <filter id="filter6520" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="3.55" />
          </filter>
          <filter
            id="filter6524"
            width="1.222"
            height="1.262"
            x="-0.111"
            y="-0.131"
            colorInterpolationFilters="sRGB"
          >
            <feGaussianBlur stdDeviation="5.878" />
          </filter>
          <filter id="filter6528" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="3.526" />
          </filter>
        </defs>
        <g color="#000" transform="translate(-108.54 -322.04)">
          <path
            fill="url(#radialGradient6368)"
            stroke="url(#linearGradient6474)"
            strokeLinecap="round"
            strokeWidth="1.25"
            d="M247.2 333.47c-44.234 0-80.212 22.669-81.094 50.844-26.123 8.744-44.125 27.126-44.125 48.406 0 13.095 6.795 25.103 18.125 34.438a28.761 28.761 0 00-1.25 8.375c0 20.01 21.06 37.311 51.75 45.75 10.749 17.653 37.535 30.156 68.906 30.156 26.442 0 49.612-8.887 62.688-22.25.005-.005.026.005.031 0 2.001.125 4.018.188 6.063.188 38.696 0 70.062-22.945 70.062-51.25 0-4.789-.915-9.416-2.594-13.813 11.433-9.877 18.156-21.888 18.156-34.844 0-17.392-12.118-33.047-31.5-44.156-10.512-25.907-34.852-44.062-63.22-44.062a65.271 65.271 0 00-21.374 3.594c-13.88-7.115-31.46-11.375-50.625-11.375z"
          />
          <path
            fill="url(#radialGradient6386)"
            d="M208.9 694.82c0 29.739-28.465 53.847-63.578 53.847s-63.578-24.108-63.578-53.847 28.465-53.847 63.578-53.847S208.9 665.081 208.9 694.82z"
            filter="url(#filter6390)"
            opacity="0.776"
            transform="translate(172.63 -24.124) scale(.75671)"
          />
          <path
            fill="url(#radialGradient6386)"
            d="M208.9 694.82c0 29.739-28.465 53.847-63.578 53.847s-63.578-24.108-63.578-53.847 28.465-53.847 63.578-53.847S208.9 665.081 208.9 694.82z"
            filter="url(#filter6488)"
            opacity="0.776"
            transform="translate(58.634 -227.69)"
          />
          <path
            fill="url(#radialGradient6386)"
            d="M208.9 694.82c0 29.739-28.465 53.847-63.578 53.847s-63.578-24.108-63.578-53.847 28.465-53.847 63.578-53.847S208.9 665.081 208.9 694.82z"
            filter="url(#filter6524)"
            opacity="0.776"
            transform="matrix(.97167 0 0 .94562 114.39 -204.11)"
          />
          <path
            fill="url(#radialGradient6386)"
            d="M208.9 694.82c0 29.739-28.465 53.847-63.578 53.847s-63.578-24.108-63.578-53.847 28.465-53.847 63.578-53.847S208.9 665.081 208.9 694.82z"
            filter="url(#filter6496)"
            opacity="0.776"
            transform="matrix(.97167 0 0 .94562 191.67 -183.25)"
          />
          <path
            fill="url(#radialGradient6386)"
            d="M208.9 694.82c0 29.739-28.465 53.847-63.578 53.847s-63.578-24.108-63.578-53.847 28.465-53.847 63.578-53.847S208.9 665.081 208.9 694.82z"
            filter="url(#filter6476)"
            opacity="0.475"
            transform="matrix(.93796 0 0 .87006 48.802 -169.17)"
          />
          <path
            fill="url(#radialGradient6386)"
            d="M208.9 694.82c0 29.739-28.465 53.847-63.578 53.847s-63.578-24.108-63.578-53.847 28.465-53.847 63.578-53.847S208.9 665.081 208.9 694.82z"
            filter="url(#filter6512)"
            opacity="0.776"
            transform="translate(171.66 -99.055) scale(.75671)"
          />
          <path
            fill="url(#radialGradient6386)"
            d="M208.9 694.82c0 29.739-28.465 53.847-63.578 53.847s-63.578-24.108-63.578-53.847 28.465-53.847 63.578-53.847S208.9 665.081 208.9 694.82z"
            filter="url(#filter6520)"
            opacity="0.269"
            transform="matrix(.60916 0 0 .53345 234.88 10.977)"
          />
          <path
            fill="url(#radialGradient6386)"
            d="M208.9 694.82c0 29.739-28.465 53.847-63.578 53.847s-63.578-24.108-63.578-53.847 28.465-53.847 63.578-53.847S208.9 665.081 208.9 694.82z"
            filter="url(#filter6528)"
            opacity="0.52"
            transform="matrix(.8985 0 0 .88045 221.24 -177.67)"
          />
          <path
            fill="url(#radialGradient6386)"
            d="M208.9 694.82c0 29.739-28.465 53.847-63.578 53.847s-63.578-24.108-63.578-53.847 28.465-53.847 63.578-53.847S208.9 665.081 208.9 694.82z"
            filter="url(#filter6504)"
            opacity="0.552"
            transform="matrix(1.1204 0 0 .83454 79.417 -198.05)"
          />
        </g>
      </Svg>
    </SvgWrapper>
  )
}

export default Cloud
