import React, { useEffect } from 'react'
import { motion, useAnimation, Variants } from 'framer-motion'
import styled, { CSSObject } from '@emotion/styled'
import { theme as thm } from '../theme/theme'
import getRandomBetween from '../helpers/getRandomBetween'

const Svg = styled(motion.svg)(() => ({
  position: 'absolute',
  width: 'auto',
  height: '10%',
  display: 'block',
  transform: 'translate(-50%)',
}))

const Path = styled(motion.path)({})

interface Props {
  css?: CSSObject
  animate?: boolean
  delay?: number
}

const Grass: React.FC<Props> = ({ delay = 0, animate, ...props }) => {
  const svgControls = useAnimation()
  const pathControls = useAnimation()

  useEffect(() => {
    const animation = async () => {
      await svgControls.start('show')
      await pathControls.start(({ item }) => {
        const colors = ['#1d9d00', '#00c400', '#00a800', '#006c00']
        const fill = colors[getRandomBetween(0, 4)]
        return {
          color: fill,
          strokeWidth: 0.2,
          pathLength: 1,
          opacity: 1,
          fill: `${fill}`,
          stroke: thm.colors['dark-text'],
          transition: {
            delay: item * 0.1,
            duration: 2,
            ease: 'easeOut',
          },
        }
      })
      await pathControls.start(() => ({
        stroke: 'currentcolor',
        strokeWidth: 1,
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
    initial: { pathLength: 0, opacity: 0, strokeWidth: 1, fill: '#00ff0000' },
  }

  return (
    <Svg
      {...props}
      variants={svgVariant}
      initial="initial"
      animate={svgControls}
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 300 260"
    >
      <g fillRule="evenodd" transform="translate(0 -792.36)">
        <Path
          variants={pathVariant}
          initial="initial"
          animate={pathControls}
          custom={{ item: 1 }}
          fill="#8cec0000"
          d="M11.745 994.54l9.717-2.363c-3.244-11.445-4.057-23.751-3.785-36.104.32-13.626 2.119-27.283 5.051-40.733 2.795-12.795 6.583-25.404 11.824-37.45 4.186-9.592 9.108-19.02 16.39-26.61-7.77 7.09-13.443 16.315-18.282 25.712-6.101 11.819-10.815 24.369-14.514 37.187-3.895 13.479-6.674 27.355-7.951 41.464-1.174 12.758-1.15 25.903 1.55 38.898z"
        />
        <Path
          variants={pathVariant}
          initial="initial"
          animate={pathControls}
          custom={{ item: 2 }}
          fill="#00500000"
          d="M23.073 982.78l9.953.972c1.437-23.812 7.283-47.508 15.293-70.456 7.467-21.37 16.875-42.14 28.004-62.015-12.504 19.042-23.427 39.21-32.498 60.263-9.746 22.599-17.44 46.394-20.753 71.236z"
        />
        <Path
          variants={pathVariant}
          initial="initial"
          animate={pathControls}
          custom={{ item: 3 }}
          fill="#00a00000"
          d="M42.459 981.72l10-.026c-.946-23.253 2.329-46.843 9.453-69.35 6.353-20.053 15.673-39.338 28.347-56.41-13.9 16.091-24.806 34.863-32.782 54.821-8.966 22.413-14.196 46.503-15.018 70.966z"
        />
        <Path
          variants={pathVariant}
          initial="initial"
          animate={pathControls}
          custom={{ item: 4 }}
          fill="#c8fc0400"
          d="M52.964 996.42l9.892-1.463c-4.477-24.461-5.076-49.781-1.068-74.562 3.796-23.56 11.46-46.556 20.01-69.115-10.049 21.932-19.278 44.418-24.79 68.174-5.792 25.038-6.995 51.199-4.044 76.965z"
        />
        <Path
          variants={pathVariant}
          initial="initial"
          animate={pathControls}
          custom={{ item: 5 }}
          fill="#00980000"
          d="M71.014 988.5l9.625-2.713c-6.933-21.504-10.723-44.178-13.095-67.027-2.423-23.378-3.316-46.992-4.16-70.59-.842 23.598-1.637 47.22-.886 70.93.73 23.172 2.936 46.508 8.516 69.4z"
        />
        <Path
          variants={pathVariant}
          initial="initial"
          animate={pathControls}
          custom={{ item: 6 }}
          fill="#00c40000"
          d="M74.836 984.28l9.943 1.067c4.117-54.02 11.891-107.87 22.401-161.25-13.759 52.63-24.862 106.07-32.344 160.18z"
        />
        <Path
          variants={pathVariant}
          initial="initial"
          animate={pathControls}
          custom={{ item: 7 }}
          fill="#00c40000"
          d="M82.771 989.59l9.998-.225c-1.385-22.278 2.172-45.003 7.71-67.214 5.391-21.57 12.52-42.894 17.648-64.66-6.71 21.33-15.338 41.932-22.379 63.29-7.271 22.019-12.63 45.052-12.977 68.81z"
        />
        <Path
          variants={pathVariant}
          initial="initial"
          animate={pathControls}
          custom={{ item: 8 }}
          fill="#00c40000"
          d="M103.18 992.88l9.982-.606c-2.167-21.475-1.127-43.416 2.276-65.05 3.25-20.605 8.614-40.98 16.621-60.42-9.486 18.764-16.504 38.857-21.406 59.474-5.155 21.65-7.978 44.036-7.473 66.602z"
        />
        <Path
          variants={pathVariant}
          initial="initial"
          animate={pathControls}
          custom={{ item: 9 }}
          fill="#00c40000"
          d="M97.949 989.48l9.502-3.115c-8.818-24.15-12.643-50.3-11.985-76.41.657-25.36 5.494-50.897 16.193-74.2-12.169 22.57-18.809 48.105-21.112 73.915-2.39 26.578-.219 53.816 7.403 79.815z"
        />
        <Path
          variants={pathVariant}
          initial="initial"
          animate={pathControls}
          custom={{ item: 10 }}
          fill="#00c40000"
          d="M116.13 980.57l9.966-.829c-2.943-25.194-3.188-50.839-2.559-76.493.631-25.564 2.122-51.193 2.552-76.817-2.092 25.542-5.236 50.952-7.535 76.532-2.31 25.672-3.743 51.568-2.424 77.607z"
        />
        <Path
          variants={pathVariant}
          initial="initial"
          animate={pathControls}
          custom={{ item: 11 }}
          fill="#00a80000"
          d="M124.57 979.39l10-.022c-.886-16.49.373-33.32 1.68-50.199 1.314-16.844 2.613-33.846 1.78-50.72-.832 16.873-3.78 33.457-6.735 50.088-2.973 16.675-5.912 33.517-6.725 50.853z"
        />
        <Path
          variants={pathVariant}
          initial="initial"
          animate={pathControls}
          custom={{ item: 12 }}
          fill="#00a80000"
          d="M160.95 984.68l9.917-1.288c-8.554-52.77-9.417-106.92-7.945-160.84-4.8 53.727-7.311 107.97-1.972 162.13z"
        />
        <Path
          variants={pathVariant}
          initial="initial"
          animate={pathControls}
          custom={{ item: 13 }}
          fill="#d0fc2c00"
          d="M158.42 973.92l10 .055c-1.34-59.426-5.324-118.55-6.99-177.82-1.668 59.27-1.015 118.65-3.01 177.76z"
        />
        <Path
          variants={pathVariant}
          initial="initial"
          animate={pathControls}
          custom={{ item: 14 }}
          fill="#00a80000"
          d="M128.56 981.16l9.99-.442c-1.814-21.771-.998-43.91.78-66.008 1.766-21.887 4.445-43.798 6.17-65.756-3.372 21.766-7.681 43.342-11.11 65.169-3.468 22.044-5.983 44.399-5.83 67.038z"
        />
        <Path
          variants={pathVariant}
          initial="initial"
          animate={pathControls}
          custom={{ item: 15 }}
          fill="#00a80000"
          d="M142.5 980.53l9.972-.742c-6.15-60.147-14.339-119.95-22.405-179.75 4.751 60.159 9.627 120.33 12.432 180.49z"
        />
        <Path
          variants={pathVariant}
          initial="initial"
          animate={pathControls}
          custom={{ item: 16 }}
          fill="#00c40000"
          d="M100.7 982.88l9.971.76c.705-20.618-1.625-40.773-3.348-60.778-1.676-19.737-3.075-39.547-.144-59.166-4.556 19.306-4.873 39.52-4.814 59.383.037 20.18.684 40.311-1.665 59.801z"
        />

        <Path
          variants={pathVariant}
          initial="initial"
          animate={pathControls}
          custom={{ item: 17 }}
          fill="#00500000"
          d="M150.48 996.75l9.953.972c1.437-23.812 7.283-47.508 15.293-70.456 7.467-21.37 16.875-42.14 28.004-62.015-12.504 19.042-23.427 39.21-32.498 60.263-9.746 22.599-17.44 46.394-20.753 71.236z"
        />
        <Path
          variants={pathVariant}
          initial="initial"
          animate={pathControls}
          custom={{ item: 18 }}
          fill="#00a00000"
          d="M169.86 995.7l10-.026c-.946-23.253 2.329-46.843 9.453-69.35 6.353-20.053 15.673-39.338 28.347-56.41-13.9 16.091-24.806 34.863-32.782 54.821-8.966 22.413-14.196 46.503-15.018 70.966z"
        />
        <Path
          variants={pathVariant}
          initial="initial"
          animate={pathControls}
          custom={{ item: 19 }}
          fill="#c8fc0400"
          d="M180.37 1010.4l9.892-1.463c-4.477-24.461-5.076-49.781-1.068-74.562 3.796-23.56 11.46-46.556 20.01-69.115-10.049 21.932-19.278 44.418-24.79 68.174-5.792 25.038-6.995 51.199-4.044 76.965z"
        />
        <Path
          variants={pathVariant}
          initial="initial"
          animate={pathControls}
          custom={{ item: 20 }}
          fill="#00980000"
          d="M198.42 1002.5l9.625-2.713c-6.933-21.504-10.723-44.178-13.095-67.027-2.423-23.378-3.316-46.992-4.16-70.59-.842 23.598-1.637 47.22-.886 70.93.73 23.172 2.936 46.508 8.516 69.4z"
        />
        <Path
          variants={pathVariant}
          initial="initial"
          animate={pathControls}
          custom={{ item: 21 }}
          fill="#48d80000"
          d="M186.78 999.66l9.998-.183c-1.33-25.516-7.042-50.075-12.15-74.466-5.116-24.553-9.45-49.396-8.276-74.509-2.84 24.98-.188 50.42 3.333 75.371 3.467 24.755 7.513 49.422 7.095 73.786z"
        />
        <Path
          variants={pathVariant}
          initial="initial"
          animate={pathControls}
          custom={{ item: 22 }}
          fill="#44d80000"
          d="M162.51 1003l9.775-2.11c-4.1-14.892-6.27-30.664-9.377-46.333-2.972-15.113-7.231-30.248-14.92-43.45 6.234 13.947 8.707 29.058 10.066 44.146 1.394 15.718 1.868 31.645 4.456 47.746z"
        />
        <Path
          variants={pathVariant}
          initial="initial"
          animate={pathControls}
          custom={{ item: 23 }}
          fill="#8cec0000"
          d="M184.44 1008.5l9.717-2.363c-3.244-11.445-4.057-23.751-3.785-36.104.32-13.626 2.119-27.283 5.051-40.733 2.795-12.795 6.583-25.404 11.824-37.45 4.186-9.592 9.108-19.02 16.39-26.61-7.77 7.09-13.443 16.315-18.282 25.712-6.101 11.819-10.815 24.369-14.514 37.187-3.895 13.479-6.674 27.355-7.951 41.464-1.174 12.758-1.15 25.903 1.55 38.898z"
        />
        <Path
          variants={pathVariant}
          initial="initial"
          animate={pathControls}
          custom={{ item: 24 }}
          fill="#44d80000"
          d="M207.8 1003l9.775-2.11c-4.1-14.892-6.27-30.664-9.377-46.333-2.972-15.113-7.231-30.248-14.92-43.45 6.234 13.947 8.707 29.058 10.066 44.146 1.394 15.718 1.868 31.645 4.456 47.746z"
        />
        <Path
          variants={pathVariant}
          initial="initial"
          animate={pathControls}
          custom={{ item: 25 }}
          fill="#00980000"
          d="M138.7 993.94l9.625-2.713c-6.933-21.504-10.723-44.178-13.095-67.027-2.423-23.378-3.316-46.992-4.16-70.59-.842 23.598-1.637 47.22-.886 70.93.73 23.172 2.936 46.508 8.516 69.4z"
        />
        <Path
          variants={pathVariant}
          initial="initial"
          animate={pathControls}
          custom={{ item: 26 }}
          fill="#00c40000"
          d="M154.96 992.82l9.943 1.067c4.117-54.018 11.891-107.87 22.4-161.25-13.759 52.63-24.861 106.07-32.343 160.18z"
        />
        <Path
          variants={pathVariant}
          initial="initial"
          animate={pathControls}
          custom={{ item: 27 }}
          fill="#00c40000"
          d="M164.89 995.8l9.998-.225c-1.385-22.278 2.172-45.003 7.71-67.214 5.391-21.57 12.52-42.894 17.648-64.66-6.71 21.33-15.338 41.932-22.379 63.29-7.271 22.019-12.63 45.052-12.977 68.81z"
        />
        <Path
          variants={pathVariant}
          initial="initial"
          animate={pathControls}
          custom={{ item: 28 }}
          fill="#00c40000"
          d="M183.31 1001.4l9.982-.606c-2.167-21.475-1.127-43.416 2.276-65.05 3.25-20.605 8.614-40.98 16.621-60.42-9.486 18.764-16.504 38.857-21.406 59.474-5.155 21.65-7.978 44.036-7.473 66.602z"
        />
        <Path
          variants={pathVariant}
          initial="initial"
          animate={pathControls}
          custom={{ item: 29 }}
          fill="#00c40000"
          d="M178.07 998.02l9.502-3.115c-8.82-24.153-12.645-50.303-11.987-76.415.657-25.36 5.494-50.897 16.193-74.2-12.169 22.57-18.809 48.105-21.112 73.915-2.39 26.578-.219 53.816 7.403 79.815z"
        />
        <Path
          variants={pathVariant}
          initial="initial"
          animate={pathControls}
          custom={{ item: 37 }}
          fill="#00c40000"
          d="M216.39 991.03l9.502-3.115c-8.82-24.153-12.645-50.303-11.987-76.415.657-25.36 5.494-50.897 16.193-74.2-12.169 22.57-18.809 48.105-21.112 73.915-2.39 26.578-.219 53.816 7.403 79.815z"
        />

        <Path
          variants={pathVariant}
          initial="initial"
          animate={pathControls}
          custom={{ item: 44 }}
          fill="#00c40000"
          d="M219.15 984.44l9.971.76c.705-20.618-1.625-40.773-3.348-60.778-1.676-19.737-3.075-39.547-.144-59.166-4.556 19.306-4.873 39.52-4.814 59.383.037 20.18.684 40.311-1.665 59.801z"
        />
        <Path
          variants={pathVariant}
          initial="initial"
          animate={pathControls}
          custom={{ item: 45 }}
          fill="#00a00000"
          d="M250.76 981.7l10 .026c-.822-24.463-6.052-48.553-15.018-70.966-7.976-19.958-18.882-38.73-32.782-54.822 12.674 17.073 21.993 36.358 28.347 56.41 7.124 22.508 10.398 46.099 9.453 69.35z"
        />
        <Path
          variants={pathVariant}
          initial="initial"
          animate={pathControls}
          custom={{ item: 46 }}
          fill="#c8fc0400"
          d="M240.37 994.95l9.892 1.463c2.952-25.766 1.748-51.927-4.044-76.965-5.512-23.756-14.741-46.242-24.79-68.174 8.55 22.56 16.215 45.556 20.01 69.115 4.008 24.78 3.41 50.101-1.068 74.562z"
        />
        <Path
          variants={pathVariant}
          initial="initial"
          animate={pathControls}
          custom={{ item: 47 }}
          fill="#00980000"
          d="M222.58 985.79l9.625 2.713c5.58-22.892 7.787-46.228 8.516-69.4.751-23.711-.044-47.332-.887-70.93-.843 23.598-1.736 47.212-4.159 70.59-2.372 22.849-6.163 45.524-13.095 67.027z"
        />
        <Path
          variants={pathVariant}
          initial="initial"
          animate={pathControls}
          custom={{ item: 48 }}
          fill="#00c40000"
          d="M218.44 985.35l9.943-1.067c-7.482-54.108-18.585-107.55-32.343-160.18 10.509 53.374 18.284 107.23 22.4 161.25z"
        />
        <Path
          variants={pathVariant}
          initial="initial"
          animate={pathControls}
          custom={{ item: 49 }}
          fill="#00c40000"
          d="M208.21 989.47l9.502 3.115c7.622-25.999 9.793-53.237 7.403-79.815-2.303-25.81-8.942-51.346-21.112-73.914 10.7 23.301 15.536 48.84 16.193 74.2.658 26.111-3.167 52.261-11.987 76.414z"
        />
        <Path
          variants={pathVariant}
          initial="initial"
          animate={pathControls}
          custom={{ item: 50 }}
          fill="#00c40000"
          d="M204.99 986.75l9.971-.76c-2.349-19.49-1.702-39.621-1.664-59.8.058-19.864-.26-40.077-4.814-59.383 2.93 19.619 1.53 39.429-.145 59.166-1.723 20.006-4.053 40.16-3.348 60.777z"
        />

        <Path
          variants={pathVariant}
          initial="initial"
          animate={pathControls}
          custom={{ item: 51 }}
          fill="#00a80000"
          d="M278.86 983.49l9.99-.442c-1.813-21.771-.998-43.91.78-66.008 1.766-21.887 4.445-43.798 6.17-65.756-3.372 21.766-7.681 43.342-11.11 65.169-3.468 22.044-5.983 44.399-5.83 67.038z"
        />
        <Path
          variants={pathVariant}
          initial="initial"
          animate={pathControls}
          custom={{ item: 52 }}
          fill="#00c40000"
          d="M251 985.21l9.971.76c.705-20.618-1.625-40.773-3.348-60.778-1.676-19.737-3.075-39.547-.144-59.166-4.556 19.306-4.873 39.52-4.814 59.383.037 20.18.684 40.311-1.665 59.801z"
        />
        <Path
          variants={pathVariant}
          initial="initial"
          animate={pathControls}
          custom={{ item: 53 }}
          fill="#00c40000"
          d="M23.067 985.23l9.966-.829c-2.943-25.194-3.188-50.839-2.559-76.493.631-25.564 2.122-51.193 2.553-76.817-2.093 25.542-5.237 50.952-7.536 76.532-2.31 25.672-3.743 51.568-2.424 77.607z"
        />
        <Path
          variants={pathVariant}
          initial="initial"
          animate={pathControls}
          custom={{ item: 54 }}
          fill="#00a80000"
          d="M31.51 984.05l10-.022c-.886-16.49.373-33.32 1.68-50.199 1.314-16.844 2.613-33.846 1.78-50.72-.832 16.873-3.78 33.457-6.735 50.088-2.973 16.675-5.912 33.517-6.725 50.853z"
        />
        <Path
          variants={pathVariant}
          initial="initial"
          animate={pathControls}
          custom={{ item: 55 }}
          fill="#00a80000"
          d="M55.44 986.24l9.917-1.288c-8.554-52.77-9.417-106.92-7.945-160.85-4.8 53.73-7.311 107.98-1.972 162.14z"
        />
        <Path
          variants={pathVariant}
          initial="initial"
          animate={pathControls}
          custom={{ item: 56 }}
          fill="#00a80000"
          d="M63.907 984.9l9.904 1.381c4.804-46.626 3.682-93.244 2.015-139.66-1.666 46.42-3.9 92.958-11.919 138.28z"
        />
      </g>
    </Svg>
  )
}

export default Grass
