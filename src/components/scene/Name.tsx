import React, { useEffect } from 'react'
import { motion, useAnimation, Variants } from 'framer-motion'
import { DynamicStyle } from 'facepaint'
import styled, { CSSObject } from '@emotion/styled'
import { mq, theme as thm } from '../../theme/theme'

const SvgWrapper = styled(motion.div)(({ theme }) =>
  mq({
    width: [140, 165, 190, 215, 215],
    height: 'auto',
    padding: ['5px 20px', '8px 30px', '8px 30px', '10px 40px', '10px 40px'],
    border: `1px solid ${theme.colors.secondary}`,
    borderRadius: '0px 10px 10px 0px',
    boxShadow: `1px 1px 3px 1px ${theme.colors.shadow}`,
    overflow: 'hidden',
  }),
)

const Svg = styled(motion.svg)(() => ({
  width: '100%',
  height: 'auto',
  display: 'block',
}))

const Path = styled(motion.path)({})

interface Props {
  css?: CSSObject | DynamicStyle[]
  animate: boolean
  delay?: number
  isHide?: boolean
}

const Name: React.FC<Props> = ({ delay = 0, animate, isHide, ...props }) => {
  const animControls = useAnimation()

  useEffect(() => {
    const animation = async () => {
      await animControls.start('show')
      await animControls.start('fill')
    }
    if (animate) animation()
  }, [animate])

  const svgVariant: Variants = {
    initial: {
      opacity: 0,
      x: '-105%',
      backgroundColor: '#a1cf6b00',
      borderColor: '#000',
      boxShadow: `0px 0px 0px 0px ${thm.colors.shadow}`,
    },
    show: {
      opacity: 1,
      x: '-2%',
      transition: {
        staggerChildren: 0.2,
        duration: 0.5,
        delay,
        delayChildren: delay + 0.5,
      },
    },
    fill: {
      borderColor: thm.colors.secondary,
      backgroundColor: thm.colors.primary,
      transition: { delay: 2, duration: 1 },
      boxShadow: `1px 1px 3px 1px ${thm.colors.shadow}`,
    },
  }

  const pathVariant: Variants = {
    initial: { pathLength: 0, opacity: 0, fill: '#a1cf6b00', stroke: '#000' },
    show: {
      pathLength: 1,
      opacity: 1,
      stroke: thm.colors['dark-text'],
      transition: {
        duration: 2,
        ease: 'easeOut',
      },
    },
    fill: {
      fill: thm.colors.mostReadableText(thm.colors.primary),
      stroke: thm.colors.mostReadableText(thm.colors.primary),
      transition: {
        duration: 1,
        ease: 'easeOut',
      },
    },
  }

  return (
    <motion.div
      {...props}
      animate={{
        translateX: isHide ? '-105%' : '0%',
        transition: { duration: 0.5, ease: 'easeOut' },
      }}
    >
      <SvgWrapper
        variants={svgVariant}
        initial="initial"
        animate={animControls}
      >
        <Svg
          width="725"
          height="77"
          viewBox="0 0 725 77"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Path
            variants={pathVariant}
            d="M39.624 72L23.688 44.64H13.128V72H4.392V5.088H25.992C31.048 5.088 35.304 5.952 38.76 7.68C42.28 9.408 44.904 11.744 46.632 14.688C48.36 17.632 49.224 20.992 49.224 24.768C49.224 29.376 47.88 33.44 45.192 36.96C42.568 40.48 38.6 42.816 33.288 43.968L50.088 72H39.624ZM13.128 37.632H25.992C30.728 37.632 34.28 36.48 36.648 34.176C39.016 31.808 40.2 28.672 40.2 24.768C40.2 20.8 39.016 17.728 36.648 15.552C34.344 13.376 30.792 12.288 25.992 12.288H13.128V37.632Z"
            stroke="black"
            strokeWidth="2"
            mask="url(#path-1-outside-1)"
          />
          <Path
            variants={pathVariant}
            d="M93.1342 72.672C86.9262 72.672 81.2622 71.232 76.1423 68.352C71.0223 65.408 66.9582 61.344 63.9502 56.16C61.0062 50.912 59.5342 45.024 59.5342 38.496C59.5342 31.968 61.0062 26.112 63.9502 20.928C66.9582 15.68 71.0223 11.616 76.1423 8.736C81.2622 5.792 86.9262 4.32 93.1342 4.32C99.4062 4.32 105.102 5.792 110.222 8.736C115.342 11.616 119.374 15.648 122.318 20.832C125.262 26.016 126.734 31.904 126.734 38.496C126.734 45.088 125.262 50.976 122.318 56.16C119.374 61.344 115.342 65.408 110.222 68.352C105.102 71.232 99.4062 72.672 93.1342 72.672ZM93.1342 65.088C97.8062 65.088 101.998 64 105.71 61.824C109.486 59.648 112.43 56.544 114.542 52.512C116.718 48.48 117.806 43.808 117.806 38.496C117.806 33.12 116.718 28.448 114.542 24.48C112.43 20.448 109.518 17.344 105.806 15.168C102.094 12.992 97.8702 11.904 93.1342 11.904C88.3982 11.904 84.1742 12.992 80.4622 15.168C76.7502 17.344 73.8062 20.448 71.6302 24.48C69.5182 28.448 68.4622 33.12 68.4622 38.496C68.4622 43.808 69.5182 48.48 71.6302 52.512C73.8062 56.544 76.7502 59.648 80.4622 61.824C84.2383 64 88.4622 65.088 93.1342 65.088Z"
            stroke="black"
            strokeWidth="2"
            mask="url(#path-1-outside-1)"
          />
          <Path
            variants={pathVariant}
            d="M168.603 72.672C162.395 72.672 156.731 71.232 151.611 68.352C146.491 65.408 142.427 61.344 139.419 56.16C136.475 50.912 135.003 45.024 135.003 38.496C135.003 31.968 136.475 26.112 139.419 20.928C142.427 15.68 146.491 11.616 151.611 8.736C156.731 5.792 162.395 4.32 168.603 4.32C174.875 4.32 180.571 5.792 185.691 8.736C190.811 11.616 194.843 15.648 197.787 20.832C200.731 26.016 202.203 31.904 202.203 38.496C202.203 45.088 200.731 50.976 197.787 56.16C194.843 61.344 190.811 65.408 185.691 68.352C180.571 71.232 174.875 72.672 168.603 72.672ZM168.603 65.088C173.275 65.088 177.467 64 181.179 61.824C184.955 59.648 187.899 56.544 190.011 52.512C192.187 48.48 193.275 43.808 193.275 38.496C193.275 33.12 192.187 28.448 190.011 24.48C187.899 20.448 184.987 17.344 181.275 15.168C177.563 12.992 173.339 11.904 168.603 11.904C163.867 11.904 159.643 12.992 155.931 15.168C152.219 17.344 149.275 20.448 147.099 24.48C144.987 28.448 143.931 33.12 143.931 38.496C143.931 43.808 144.987 48.48 147.099 52.512C149.275 56.544 152.219 59.648 155.931 61.824C159.707 64 163.931 65.088 168.603 65.088Z"
            stroke="black"
            strokeWidth="2"
            mask="url(#path-1-outside-1)"
          />
          <Path
            variants={pathVariant}
            d="M258.472 24.672C258.472 30.24 256.552 34.88 252.712 38.592C248.936 42.24 243.144 44.064 235.336 44.064H222.472V72H213.736V5.088H235.336C242.888 5.088 248.616 6.912 252.52 10.56C256.488 14.208 258.472 18.912 258.472 24.672ZM235.336 36.864C240.2 36.864 243.784 35.808 246.088 33.696C248.392 31.584 249.544 28.576 249.544 24.672C249.544 16.416 244.808 12.288 235.336 12.288H222.472V36.864H235.336Z"
            stroke="black"
            strokeWidth="2"
            mask="url(#path-1-outside-1)"
          />
          <Path
            variants={pathVariant}
            d="M278.065 12.192V34.56H302.449V41.76H278.065V64.8H305.329V72H269.329V4.992H305.329V12.192H278.065Z"
            stroke="black"
            strokeWidth="2"
            mask="url(#path-1-outside-1)"
          />
          <Path
            variants={pathVariant}
            d="M339.764 72.672C335.348 72.672 331.38 71.904 327.86 70.368C324.404 68.768 321.684 66.592 319.7 63.84C317.716 61.024 316.692 57.792 316.628 54.144H325.94C326.26 57.28 327.54 59.936 329.78 62.112C332.084 64.224 335.412 65.28 339.764 65.28C343.924 65.28 347.188 64.256 349.556 62.208C351.988 60.096 353.204 57.408 353.204 54.144C353.204 51.584 352.5 49.504 351.092 47.904C349.684 46.304 347.924 45.088 345.812 44.256C343.7 43.424 340.852 42.528 337.268 41.568C332.852 40.416 329.3 39.264 326.612 38.112C323.988 36.96 321.716 35.168 319.796 32.736C317.94 30.24 317.012 26.912 317.012 22.752C317.012 19.104 317.94 15.872 319.796 13.056C321.652 10.24 324.244 8.064 327.572 6.528C330.964 4.992 334.836 4.224 339.188 4.224C345.46 4.224 350.58 5.792 354.548 8.928C358.58 12.064 360.852 16.224 361.364 21.408H351.764C351.444 18.848 350.1 16.608 347.732 14.688C345.364 12.704 342.228 11.712 338.324 11.712C334.676 11.712 331.7 12.672 329.396 14.592C327.092 16.448 325.94 19.072 325.94 22.464C325.94 24.896 326.612 26.88 327.956 28.416C329.364 29.952 331.06 31.136 333.044 31.968C335.092 32.736 337.94 33.632 341.588 34.656C346.004 35.872 349.556 37.088 352.244 38.304C354.932 39.456 357.236 41.28 359.156 43.776C361.076 46.208 362.036 49.536 362.036 53.76C362.036 57.024 361.172 60.096 359.444 62.976C357.716 65.856 355.156 68.192 351.764 69.984C348.372 71.776 344.372 72.672 339.764 72.672Z"
            stroke="black"
            strokeWidth="2"
            mask="url(#path-1-outside-1)"
          />
          <Path
            variants={pathVariant}
            d="M426.444 5.088V72H417.708V41.664H383.628V72H374.892V5.088H383.628V34.464H417.708V5.088H426.444Z"
            stroke="black"
            strokeWidth="2"
            mask="url(#path-1-outside-1)"
          />
          <Path
            variants={pathVariant}
            d="M511.69 24.672C511.69 30.24 509.771 34.88 505.931 38.592C502.155 42.24 496.363 44.064 488.555 44.064H475.69V72H466.954V5.088H488.555C496.107 5.088 501.834 6.912 505.738 10.56C509.706 14.208 511.69 18.912 511.69 24.672ZM488.555 36.864C493.419 36.864 497.003 35.808 499.307 33.696C501.611 31.584 502.763 28.576 502.763 24.672C502.763 16.416 498.027 12.288 488.555 12.288H475.69V36.864H488.555Z"
            stroke="black"
            strokeWidth="2"
            mask="url(#path-1-outside-1)"
          />
          <Path
            variants={pathVariant}
            d="M562.1 57.12H532.916L527.54 72H518.324L542.516 5.472H552.596L576.692 72H567.476L562.1 57.12ZM559.604 50.016L547.508 16.224L535.412 50.016H559.604Z"
            stroke="black"
            strokeWidth="2"
            mask="url(#path-1-outside-1)"
          />
          <Path
            variants={pathVariant}
            d="M628.42 5.088V12.192H610.18V72H601.444V12.192H583.108V5.088H628.42Z"
            stroke="black"
            strokeWidth="2"
            mask="url(#path-1-outside-1)"
          />
          <Path
            variants={pathVariant}
            d="M647.909 12.192V34.56H672.293V41.76H647.909V64.8H675.173V72H639.173V4.992H675.173V12.192H647.909Z"
            stroke="black"
            strokeWidth="2"
            mask="url(#path-1-outside-1)"
          />
          <Path
            variants={pathVariant}
            d="M697.128 64.896H720.552V72H688.392V5.088H697.128V64.896Z"
            stroke="black"
            strokeWidth="2"
            mask="url(#path-1-outside-1)"
          />
        </Svg>
      </SvgWrapper>
    </motion.div>
  )
}

export default Name
