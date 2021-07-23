import React, { useEffect } from 'react'
import { motion, useAnimation, Variants } from 'framer-motion'
import styled, { CSSObject } from '@emotion/styled'
import { DynamicStyle } from 'facepaint'
import { mq, theme as thm } from '../../theme/theme'

const SvgWrapper = styled(motion.div)(({ theme }) =>
  mq({
    width: [150, 175, 200, 225, 225],
    height: 'auto',
    padding: ['5px 10px', '10px 15px', '10px 15px', '12px 20px', '12px 20px'],
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

const FrontEndDeveloper: React.FC<Props> = ({
  delay = 0,
  animate,
  isHide,
  ...props
}) => {
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
          width="403"
          height="29"
          viewBox="0 0 403 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Path
            variants={pathVariant}
            d="M15.956 1.908V4.57199H5.04797V13.032H13.904V15.696H5.04797V27H1.77197V1.908H15.956Z"
            stroke="black"
            strokeWidth="2"
            mask="url(#path-1-outside-1)"
          />
          <Path
            variants={pathVariant}
            d="M33.1246 27L27.1486 16.74H23.1886V27H19.9126V1.908H28.0126C29.9086 1.908 31.5046 2.232 32.8006 2.88C34.1206 3.528 35.1046 4.404 35.7526 5.508C36.4006 6.612 36.7246 7.872 36.7246 9.288C36.7246 11.016 36.2206 12.54 35.2126 13.86C34.2286 15.18 32.7406 16.056 30.7486 16.488L37.0486 27H33.1246ZM23.1886 14.112H28.0126C29.7886 14.112 31.1206 13.68 32.0086 12.816C32.8966 11.928 33.3406 10.752 33.3406 9.288C33.3406 7.8 32.8966 6.648 32.0086 5.832C31.1446 5.016 29.8126 4.60799 28.0126 4.60799H23.1886V14.112Z"
            stroke="black"
            strokeWidth="2"
            mask="url(#path-1-outside-1)"
          />
          <Path
            variants={pathVariant}
            d="M53.1909 27.252C50.8629 27.252 48.7389 26.712 46.8189 25.632C44.8989 24.528 43.3749 23.004 42.2469 21.06C41.1429 19.092 40.5909 16.884 40.5909 14.436C40.5909 11.988 41.1429 9.792 42.2469 7.848C43.3749 5.88 44.8989 4.356 46.8189 3.276C48.7389 2.172 50.8629 1.62 53.1909 1.62C55.5429 1.62 57.6789 2.172 59.5989 3.276C61.5189 4.356 63.0309 5.868 64.1349 7.81199C65.2389 9.756 65.7909 11.964 65.7909 14.436C65.7909 16.908 65.2389 19.116 64.1349 21.06C63.0309 23.004 61.5189 24.528 59.5989 25.632C57.6789 26.712 55.5429 27.252 53.1909 27.252ZM53.1909 24.408C54.9429 24.408 56.5149 24 57.9069 23.184C59.3229 22.368 60.4269 21.204 61.2189 19.692C62.0349 18.18 62.4429 16.428 62.4429 14.436C62.4429 12.42 62.0349 10.668 61.2189 9.17999C60.4269 7.66799 59.3349 6.504 57.9429 5.688C56.5509 4.87199 54.9669 4.46399 53.1909 4.46399C51.4149 4.46399 49.8309 4.87199 48.4389 5.688C47.0469 6.504 45.9429 7.66799 45.1269 9.17999C44.3349 10.668 43.9389 12.42 43.9389 14.436C43.9389 16.428 44.3349 18.18 45.1269 19.692C45.9429 21.204 47.0469 22.368 48.4389 23.184C49.8549 24 51.4389 24.408 53.1909 24.408Z"
            stroke="black"
            strokeWidth="2"
            mask="url(#path-1-outside-1)"
          />
          <Path
            variants={pathVariant}
            d="M89.8437 27H86.5677L73.3917 7.02V27H70.1157V1.872H73.3917L86.5677 21.816V1.872H89.8437V27Z"
            stroke="black"
            strokeWidth="2"
            mask="url(#path-1-outside-1)"
          />
          <Path
            variants={pathVariant}
            d="M110.872 1.908V4.57199H104.032V27H100.756V4.57199H93.8802V1.908H110.872Z"
            stroke="black"
            strokeWidth="2"
            mask="url(#path-1-outside-1)"
          />
          <Path
            variants={pathVariant}
            d="M128.585 12.42V15.192H114.221V12.42H128.585Z"
            stroke="black"
            strokeWidth="2"
            mask="url(#path-1-outside-1)"
          />
          <Path
            variants={pathVariant}
            d="M138.009 4.57199V12.96H147.153V15.66H138.009V24.3H148.233V27H134.733V1.872H148.233V4.57199H138.009Z"
            stroke="black"
            strokeWidth="2"
            mask="url(#path-1-outside-1)"
          />
          <Path
            variants={pathVariant}
            d="M172.918 27H169.642L156.466 7.02V27H153.19V1.872H156.466L169.642 21.816V1.872H172.918V27Z"
            stroke="black"
            strokeWidth="2"
            mask="url(#path-1-outside-1)"
          />
          <Path
            variants={pathVariant}
            d="M186.314 1.908C189.05 1.908 191.414 2.42399 193.406 3.45599C195.422 4.46399 196.958 5.91599 198.014 7.81199C199.094 9.708 199.634 11.94 199.634 14.508C199.634 17.076 199.094 19.308 198.014 21.204C196.958 23.076 195.422 24.516 193.406 25.524C191.414 26.508 189.05 27 186.314 27H178.502V1.908H186.314ZM186.314 24.3C189.554 24.3 192.026 23.448 193.73 21.744C195.434 20.016 196.286 17.604 196.286 14.508C196.286 11.388 195.422 8.95199 193.694 7.2C191.99 5.44799 189.53 4.57199 186.314 4.57199H181.778V24.3H186.314Z"
            stroke="black"
            strokeWidth="2"
            mask="url(#path-1-outside-1)"
          />
          <Path
            variants={pathVariant}
            d="M221.365 1.908C224.101 1.908 226.465 2.42399 228.457 3.45599C230.473 4.46399 232.009 5.91599 233.065 7.81199C234.145 9.708 234.685 11.94 234.685 14.508C234.685 17.076 234.145 19.308 233.065 21.204C232.009 23.076 230.473 24.516 228.457 25.524C226.465 26.508 224.101 27 221.365 27H213.553V1.908H221.365ZM221.365 24.3C224.605 24.3 227.077 23.448 228.781 21.744C230.485 20.016 231.337 17.604 231.337 14.508C231.337 11.388 230.473 8.95199 228.745 7.2C227.041 5.44799 224.581 4.57199 221.365 4.57199H216.829V24.3H221.365Z"
            stroke="black"
            strokeWidth="2"
            mask="url(#path-1-outside-1)"
          />
          <Path
            variants={pathVariant}
            d="M242.282 4.57199V12.96H251.426V15.66H242.282V24.3H252.506V27H239.006V1.872H252.506V4.57199H242.282Z"
            stroke="black"
            strokeWidth="2"
            mask="url(#path-1-outside-1)"
          />
          <Path
            variants={pathVariant}
            d="M278.199 1.908L268.731 27H264.951L255.483 1.908H258.975L266.859 23.544L274.743 1.908H278.199Z"
            stroke="black"
            strokeWidth="2"
            mask="url(#path-1-outside-1)"
          />
          <Path
            variants={pathVariant}
            d="M285.068 4.57199V12.96H294.211V15.66H285.068V24.3H295.292V27H281.792V1.872H295.292V4.57199H285.068Z"
            stroke="black"
            strokeWidth="2"
            mask="url(#path-1-outside-1)"
          />
          <Path
            variants={pathVariant}
            d="M303.525 24.336H312.309V27H300.249V1.908H303.525V24.336Z"
            stroke="black"
            strokeWidth="2"
            mask="url(#path-1-outside-1)"
          />
          <Path
            variants={pathVariant}
            d="M327.164 27.252C324.836 27.252 322.712 26.712 320.792 25.632C318.872 24.528 317.348 23.004 316.22 21.06C315.116 19.092 314.564 16.884 314.564 14.436C314.564 11.988 315.116 9.792 316.22 7.848C317.348 5.88 318.872 4.356 320.792 3.276C322.712 2.172 324.836 1.62 327.164 1.62C329.516 1.62 331.652 2.172 333.572 3.276C335.492 4.356 337.004 5.868 338.108 7.81199C339.212 9.756 339.764 11.964 339.764 14.436C339.764 16.908 339.212 19.116 338.108 21.06C337.004 23.004 335.492 24.528 333.572 25.632C331.652 26.712 329.516 27.252 327.164 27.252ZM327.164 24.408C328.916 24.408 330.488 24 331.88 23.184C333.296 22.368 334.4 21.204 335.192 19.692C336.008 18.18 336.416 16.428 336.416 14.436C336.416 12.42 336.008 10.668 335.192 9.17999C334.4 7.66799 333.308 6.504 331.916 5.688C330.524 4.87199 328.94 4.46399 327.164 4.46399C325.388 4.46399 323.804 4.87199 322.412 5.688C321.02 6.504 319.916 7.66799 319.1 9.17999C318.308 10.668 317.912 12.42 317.912 14.436C317.912 16.428 318.308 18.18 319.1 19.692C319.916 21.204 321.02 22.368 322.412 23.184C323.828 24 325.412 24.408 327.164 24.408Z"
            stroke="black"
            strokeWidth="2"
            mask="url(#path-1-outside-1)"
          />
          <Path
            variants={pathVariant}
            d="M360.864 9.252C360.864 11.34 360.144 13.08 358.704 14.472C357.288 15.84 355.116 16.524 352.188 16.524H347.364V27H344.088V1.908H352.188C355.02 1.908 357.168 2.592 358.632 3.96C360.12 5.328 360.864 7.092 360.864 9.252ZM352.188 13.824C354.012 13.824 355.356 13.428 356.22 12.636C357.084 11.844 357.516 10.716 357.516 9.252C357.516 6.15599 355.74 4.60799 352.188 4.60799H347.364V13.824H352.188Z"
            stroke="black"
            strokeWidth="2"
            mask="url(#path-1-outside-1)"
          />
          <Path
            variants={pathVariant}
            d="M368.212 4.57199V12.96H377.356V15.66H368.212V24.3H378.436V27H364.936V1.872H378.436V4.57199H368.212Z"
            stroke="black"
            strokeWidth="2"
            mask="url(#path-1-outside-1)"
          />
          <Path
            variants={pathVariant}
            d="M396.605 27L390.629 16.74H386.669V27H383.393V1.908H391.493C393.389 1.908 394.985 2.232 396.281 2.88C397.601 3.528 398.585 4.404 399.233 5.508C399.881 6.612 400.205 7.872 400.205 9.288C400.205 11.016 399.701 12.54 398.693 13.86C397.709 15.18 396.221 16.056 394.229 16.488L400.529 27H396.605ZM386.669 14.112H391.493C393.269 14.112 394.601 13.68 395.489 12.816C396.377 11.928 396.821 10.752 396.821 9.288C396.821 7.8 396.377 6.648 395.489 5.832C394.625 5.016 393.293 4.60799 391.493 4.60799H386.669V14.112Z"
            stroke="black"
            strokeWidth="2"
            mask="url(#path-1-outside-1)"
          />
        </Svg>
      </SvgWrapper>
    </motion.div>
  )
}

export default FrontEndDeveloper
