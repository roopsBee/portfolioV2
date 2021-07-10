import React, { useEffect } from 'react'
import { motion, useAnimation, Variants } from 'framer-motion'
import styled, { CSSObject } from '@emotion/styled'
import { theme as thm } from '../theme/theme'

const Svg = styled(motion.svg)(() => ({
  position: 'absolute',
  width: '20%',
  height: 'auto',
  display: 'block',
  transform: 'translate(-50%)',
}))

const Path = styled(motion.path)({})

interface Props {
  css?: CSSObject
  animate: boolean
  delay?: number
}

const Tree: React.FC<Props> = ({ delay = 0, animate, ...props }) => {
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
          delay: item * 0.5,
          duration: 2,
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
    initial: { pathLength: 0, opacity: 0, strokeWidth: 1, fill: '#00ff0000' },
  }

  return (
    <Svg
      {...props}
      variants={svgVariant}
      initial="initial"
      animate={svgControls}
      xmlns="http://www.w3.org/2000/svg"
      width={102.423}
      height={121.422}
      viewBox="0 0 96.021 113.833"
    >
      <g fillRule="evenodd">
        <Path
          variants={pathVariant}
          initial="initial"
          animate={pathControls}
          custom={{ fill: '#1d9d00', item: 1 }}
          d="M43.58 65.89c.5.2-5.474 4.024-6.696 3.66-1.339.448-6.071-4.106-6.071-4.106l-6.16 1.16c-5.47-.803-7.938-3.321-11.876-5-.908-2.639-2.067-5.255-.446-8.125C.444 49.34 5.093 43.95 8.402 38.66c-1.82-4.5-1.475-8 4.286-11.787 1.8-3.85.908-10.637 11.16-10.803 4.408-3.327 7.832-9.603 14.197-7.054C49.85.418 51.982 6.381 55.367 9.551c11.462-3.907 12.433 2.69 16.696 5.09 13.562-1.012 12.971 3.439 13.393 7.5-.12 2.599-.803 5.574 2.5 5.892 4.325 4.86 3.588 8.94 1.786 12.857 3.867 10.833-1.13 11.739-2.59 16.607-.942 4.74-3.772 6.731-7.321 7.679l-4.107 1.875c-5.44-.127-7.854-.858-11.072-1.429-6.393 3.962-7.968 1.6-10.803.893z"
          fill="#1d9d00"
        />
        <Path
          variants={pathVariant}
          initial="initial"
          animate={pathControls}
          custom={{ fill: '#174000', item: 2 }}
          style={{
            lineHeight: 'normal',
            textIndent: 0,
            textAlign: 'start',
            textDecorationLine: 'none',
            textDecorationStyle: 'solid',
            textDecorationColor: '#000',
            textTransform: 'none',
            whiteSpace: 'normal',
            isolation: 'auto',
            mixBlendMode: 'normal',
          }}
          d="M48.27 3.672C44.2 2.724 40.443 7.295 37.51 8.31c-3.736-1.793-8.23-.259-10.406 3.17-1.701 3.776-4.923 5.032-8.891 4.413-4.393.387-5.82 5.284-6.063 9.007-.735 3.498-6.943 5.125-5.686 10.027.42.903 1.55 2.725 1.393 3.533-1.696 1.52-4.658 4.18-4.281 7.388-.07 3.864 4.507 6.866 8.026 8.147-1.459 4.349.58 10.032 4.917 10.824 3.466 2.431 8.667 3.065 13.165 1.244 3.047-.678 4.282 5.966 8.264 3.848 3.208-.58 4.8-3.679 7.877-4.346 1.667-.102 5.12-.292 6.787-.394 1.4 3.546 5.075 4.893 8.1 3.543 3.607-2.843 6.929-1.155 10.914-.571 3.939.485 5.895-2.11 9.315-2.713 5.026-.041 6.082-6.822 8.738-9.573 3.568-3.905 3.344-10.44 1.448-15.09 1.463-4.194 1.072-10.02-3.034-12.923-4.736-1.006.574-7.672-2.431-10.712-2.525-3.885-9.071-3.57-13.46-3.391-2.922-3.96-7.875-7.625-13.032-5.89-2.293 1.05-3.704 2.045-5.028-.656-1.283-2.158-3.717-3.344-5.871-3.523zm1.195 2.57c3.16.122 5.095 1.125 5.486 4.49 2.943-2.49 6.86-2.217 10.405-.004 2.914.736 4.28 4.668 7.087 4.733 4.754-.375 11.21-.494 12.039 4.702 1.189 1.433-.024 5.003.202 6.709.096.721-1.91 4.3-4.084 5.376-3.685 1.823-9.822-1.056-12.415-4.61.594 5.107 9.42 8.15 13.123 6.448 3.519-1.618 4.516-6.202 4.604-6.194 3.651.65 4.134 3.68 3.608 7.46-.661 3.417-.582 6.854 1.133 10.174.962 4.08-1.62 7.585-4.329 10.43-.454.515-4.877 2.664-6.481 2.294-3.285-.758-7.385-5.274-8.23-6.082-1.468.777 5.129 6.523 8.277 7.768 1.98.783 5.46-1.768 5.426-1.626-.777 3.267-2.55 5.534-5.69 6.19-2.399 3.16-8.391 1.899-11.935.023-2.883-2.395-5.626.886-8.486 1.419-3.312 2.09-5.292-.555-6.987-1.854-2.305.203-4.684.158-6.945.511-3.263 1.589-6.664 4.25-10.458 3.595-1.54-.7-2.184-2.964-3.508-3.687-.178-.097-2.194-.504-4.216-2.483-1.39-1.361-2.289-6.076-3.006-6.024-.719.052.278 5.547 1.537 7.396.724 1.062 3.049 1.522 2.783 1.725-3.482 1.216-7.466.195-9.759-2.602-3.824-.479-7.774-3.465-6.222-7.757.07-.196.714-2.523 1.589-3.843 1.392-2.101 5.292-4.641 6.865-5.318.593-.255 5.442-1.379 5.739-1.917-.245-.984-7.199.862-8.272 1.602-.712.492-3.127 2.403-4.733 3.96-1.054 1.024-2.078 3.51-2.173 3.428-1.193-1.033-3.509-.823-4.022-2.826-2.46-3.484-1.001-8.255 1.651-11.186-1.52-3.235-1.306-7.705 2.197-9.563 4.022-.72 2.172-4.944 3.543-7.618.81-4.621 5.297-4.755 8.733-4.917 2.866-.937 4.524-3.346 6.685-5.243 2.345-2.654 5.384-3.104 8.15-1.577 1.955-3.037 5.52-4.716 9.03-4.406z"
          color="#000"
          fontWeight={400}
          fontFamily="sans-serif"
          overflow="visible"
          fill="#174000"
        />
        <Path
          variants={pathVariant}
          initial="initial"
          animate={pathControls}
          custom={{ fill: '#174000', item: 3 }}
          d="M26.795 23.837c.253-.486 3.152.072 6.191 1.386 2.808 1.214 5.708 3.177 7.365 3.108 3.527-.147 5.663-2.572 7.459-4.286 1.666-1.59 3.1-2.48 3.539-2.53-.268.804.568.86-2.411 3.214-7.3 5.768-6.169 8.754-14.375 2.322-3.66-2.869-6.071-.536-7.768-3.214z"
          fill="#174000"
        />
        <Path
          variants={pathVariant}
          initial="initial"
          animate={pathControls}
          custom={{ fill: '#174000', item: 4 }}
          style={{
            lineHeight: 'normal',
            textIndent: 0,
            textAlign: 'start',
            textDecorationLine: 'none',
            textDecorationStyle: 'solid',
            textDecorationColor: '#000',
            textTransform: 'none',
            whiteSpace: 'normal',
            isolation: 'auto',
            mixBlendMode: 'normal',
          }}
          d="M61.838 29.792c-1.476 2.013-2.408 4.554-4.26 5.54-2.082 1.107-5.063.99-7.356.171l-.28.038-.114.261c-1.91 4.46-5.388 6.653-8.819 6.53-3.43-.122-6.99-1.976-9.107-4.363-1.943-1.574-1.714-1.425-.811.349 2.312 2.606 6.122 4.88 9.881 5.015 3.682.131 7.994-1.696 10.067-6.255 3.008.96 5.612.766 7.914-.584 1.748-1.026 2.349-4.763 3.754-6.68.806-1.207 1.758-2.519.772-2.421z"
          color="#000"
          fontWeight={400}
          fontFamily="sans-serif"
          overflow="visible"
          fill="#174000"
        />
        <Path
          variants={pathVariant}
          initial="initial"
          animate={pathControls}
          custom={{ fill: '#921d00', item: 5 }}
          d="M43.982 105.82c-3.697-.593-5.568 1.247-8.334 1.894l-.568-1.641c3.029-2.889 6.108-5.577 9.47-7.134.983-5.958 1.458-12.352 1.263-19.32.143-5.325.46-10.797-1.515-14.331L30.534 58.09l-2.588-2.273-.442-1.894c-.033-1.777.644-1.07 1.262-.569 3.702 5.497 9.393 5.566 10.039 5.051l-.505-3.535 2.083-.884c.853 2.314 1.482 4.778 3.788 6.124 1.783 1.95 2.754 1.196 3.536-.19l.884-1.641v-3.851c.74-.718 1.79-2.65 1.262 1.389.176 2.276.777 3.56 1.452 4.672 1.248.223 1.557 1.213 4.483.063l7.45-2.4c3.262-.663 4.711-2.721 5.808-5.05l1.516.82c-.443 1.284-.569 2.568-1.958 3.852-3.36 2.768-5.583 3.262-8.46 4.42-6.518 1.346-5.811 2.693-7.955 4.04-.541 7.83.407 13.572.632 20.33.44 4.559 1.258 8.55 2.02 12.626.485 1.21 2.745 2.537 5.745 3.914l3.473 2.778c.76 1.504 1.202 2.809-.695 2.652l-5.366-3.346-.884 1.578c-.063.926-.506 1.852-1.579 2.778-1.41.258-1.41-.692-1.704-1.389l-1.39-2.146c-1.773-1.096-2.032-.172-2.903-.063l-1.39 2.146c-.732.47-.982 1.785-2.967.063z"
          fill="#921d00"
        />
        <Path
          variants={pathVariant}
          initial="initial"
          animate={pathControls}
          custom={{ fill: '#3a0000', item: 6 }}
          style={{
            lineHeight: 'normal',
            textIndent: 0,
            textAlign: 'start',
            textDecorationLine: 'none',
            textDecorationStyle: 'solid',
            textDecorationColor: '#000',
            textTransform: 'none',
            whiteSpace: 'normal',
            isolation: 'auto',
            mixBlendMode: 'normal',
          }}
          d="M48.13 54.728c.138 3.535.188 4.214-1.148 5.253-.264.361-.843.438-1.01.462-.185.027-.67-.098-1.427-.55a11.78 11.78 0 01-3.338-4.728c-.556-1.465-.3-.063-1.071-1.357-.821-1.379-2.281-.92-2.23.074l.098 1.854c.062 1.18-.305-.172-.127.82.162.9 1.15 1.839-1.123 1.768-1.916-.048-3.896-1.429-4.8-1.92-1.865-1.223-2.047-1.59-3.022-3.05-1.264-1.492-1.58-.934-1.96-.2-.003 2.356.532 3.48 2.057 4.618 1.626 1.215 2.872 2.257 5.054 3.085 2.181.83 4.36 2.312 6.317 3.047 1.828.686 3.288 2.007 4.022 3.368 1.083 2.007.615 14.962.453 20.949-.09 3.368-.217 5.143-.551 7.257-.167 1.058-.58 2.216-.82 2.744-1.245 1.31-.57 1.102-2.28 1.973-1.235.604-1.803 1.185-2.3 1.57-.855.592-1.291 1.25-2.228 2.135-.425.68-2.034 1.539-2.095 2.37-.062.672.41 2.295.918 2.393.818-.607 1.995-.74 2.356-1.327 1.072-.627.788.187 1.751-.272.857-.459.308-.161 1.408-.301.608-.077.713-.545.949-.536.84.486 1.123.076 1.404.334.216.385.767.791.725 1.615-.035.715 1.089.978 1.665 1.222.577.243 1.154.146 1.614-.027.46-.174.848-.435 1.168-.717.32-.282.07-.874.237-1.332.44-1.155.922-.391 2.178-.896 1.17.207 1.787-.289 2.1.628.111.453-.215.861.13 1.548.297.518.849 1.655 1.381 1.687.532.031 1.702-.677 2.05-1.296.296-.528.812-.65.9-1.364.111-.889.016-1.31.962-1.366.157-.019 2.4 1.68 4.195 2.565.33.163 1.003.153 2.168-.173.086-.79-.156-1.486-.314-2.518-.99-1.705-2.107-2.288-3.195-2.92-2.427-1.413-3.738-2.026-5.47-4.745-.52-.817-1.12-2.773-1.538-5.671-.424-2.935-1.034-7.31-1.337-10.888-.303-3.578-.298-7.216-.395-10.183-.091-2.804.215-3.927.354-4.985.633-.53 1.638-1.457 2.592-2.006 2.165-1.246 4.976-2.173 8.024-3.176 2.008-.661 3.59-2.204 4.999-3.404 1.408-1.2 1.184-1.868 1.92-3.425.713-.929.375-1.114-.134-1.712-1.096-.471-1.308-.879-1.731-.173-.197 1.607-2.933 3.856-4.077 4.476-1.719.924-3.916 1.237-6.265 2.173-1.158.462-2.382.837-3.297.974-.505.076-1.434.22-1.793.208-.29-.01-1.234-.309-1.575-.55-1.22-2.568-1.537-1.4-1.406-4.532l-.09-1.392c-.772-1.067-1.489-1.69-2.002.522zm.508.893c.28-1.303.559-1.419.838-.533-.073 3.009.33 2.761 1.114 5.933l.064.275.213.188c.71.624 1.01.497 1.776.52.766.025 1.773-.15 2.382-.452 1.219-.603 3.073-.906 3.735-1.17 2.354-.938 3.956-1.132 5.815-2.13.929-.5 2.555-1.703 3.19-2.266.397-.352.744-1.206.976-1.642.257-1.308.942-.691 1.513-.586-.289.801-.577 2.508-2.065 3.743-1.208 1.003-3.392 2.082-5.243 2.964-3.703 1.765-7.621 1.424-10.116 3.675-.94 1.034-1.241 1.028-1.48 1.585-.222 1.33-.23 3.74-.131 6.747.098 3.007.32 6.744.625 10.349.305 3.605.313 6.699.744 9.684.35 2.429.073 3.513.562 4.763.374.957.9 2.546 1.594 3.352 1.157 1.347 5.046 2.703 7.302 3.993.917.525 2.26 2.086 2.162 3.175-.368 1.333-1.757-.162-2.92-.717-.657-.313-1.627-1.235-1.981-1.579-.635-.616-1.176-.893-1.941-1.21-.077-.032-.93-.662-1.475-.904-.587-.26-2.51-1.317-2.676-.964-.118.253 1.699.646 2.34 1.308.356.368.37.694.85 1.102.457.389.375.622.25 1.021-.192.617.068.935-.226 1.932-.174.59-.41 1.271-1.52 1.312-1.162-.147-.546-1.827-.604-2.293-.631-1.71-1.91-1.064-3.278-2.069-1.337.76-1.8.13-2.672 1.33-.47.816-.574 1.489-.905 2.118-.914.962-1.095.725-1.346.19-.196-.705-.932-.68-.963-.907-.03-.228-.468-.472-.374-1.156.02-.27.076-.487.08-.677 0-.11.366-1.001.642-1.778.084-.236.86-.328 1.523-.96.978-.931 1.934-2.445 1.885-2.488-.067-.138-1.057 1.355-2.128 2.257-.724.61-1.212.263-1.584.705-.389.463-.863 1.327-1.228 1.716-.296.316-.782.098-.967.103-.465-.056-1.332.197-2.147.3-1.058.135-.467-.044-2.11.745-1.42.68-1.418.362-1.844.615-.737.618-1.082.466-.979-.279.18-.56.977-1.304 1.23-1.566.383-.298 1.498-1.45 2.528-2.198 1.266-.92 2.924-2.18 4.391-2.383.744-.032 1.21-1.317 1.563-2.094.353-.776.27-1.928.452-3.074.362-2.292.2-7.084.354-10.9.236-5.85-.257-13.88-.745-16.953-.48-3.022-2.892-4.277-4.851-5.025-2.02-.759-4.127-1.987-6.247-2.793a21.463 21.463 0 01-5.196-2.854c-1.05-.776-1.27-1.899-1.573-2.81.092-.491.31-.503.698.063.73 1.6 2.063 2.844 3 3.2 1.026.388 1.584.796 3.544 1.583.82.33 2.256.557 3.087.462.237-.043 2.684 2.704 3.562 1.79-.849-.223-2.192-1.115-2.534-2.455-.29-.784-.429-1.91-.517-2.605-.13-1.038.202.482.092-.504-.187-1.664.305-2.582 1.084-.397.333.934.167-.662.543.31.62 2.025.312 1.998 1.553 3.548l1.617 2.019c.976.603 1.81 1.392 2.68 1.266.928-.407.958-.478 1.475-1.203 1.498-2.096 1.168-2.91.938-5.368z"
          color="#000"
          fontWeight={400}
          fontFamily="sans-serif"
          overflow="visible"
          fill="#3a0000"
        />
        <Path
          variants={pathVariant}
          initial="initial"
          animate={pathControls}
          custom={{ fill: '#3b0000', item: 7 }}
          style={{
            lineHeight: 'normal',
            textIndent: 0,
            textAlign: 'start',
            textDecorationLine: 'none',
            textDecorationStyle: 'solid',
            textDecorationColor: '#000',
            textTransform: 'none',
            whiteSpace: 'normal',
            isolation: 'auto',
            mixBlendMode: 'normal',
          }}
          d="M49.006 65.134c-1.064.975-1.9 2.614-2.09 4.044-.1.745.833 1.705.874 2.869.059 1.64-1.046 3.137-.632 4.724.302 1.158.935 2.44.952 3.574.01.678-.148 2.207-.975 3.516.402.292 1.47-2.117 1.58-3.233.083-1.177-.991-3.01-1.058-4.188-.093-1.63.788-3.124.796-4.147.009-1.06-1.074-2.312-.93-3.361.163-1.178.991-2.299 1.727-3.233.621-.789 2.634-1.494 2.434-1.81 0 0-1.953.58-2.678 1.245z"
          color="#000"
          fontWeight={400}
          fontFamily="sans-serif"
          overflow="visible"
          fill="#3b0000"
        />
        <Path
          variants={pathVariant}
          initial="initial"
          animate={pathControls}
          custom={{ fill: '#3b0000', item: 8 }}
          style={{
            lineHeight: 'normal',
            textIndent: 0,
            textAlign: 'start',
            textDecorationLine: 'none',
            textDecorationStyle: 'solid',
            textDecorationColor: '#000',
            textTransform: 'none',
            whiteSpace: 'normal',
            isolation: 'auto',
            mixBlendMode: 'normal',
          }}
          d="M50.902 89.81c.675-.97 1.074-2.454 1.005-3.666-.037-.632-.905-1.284-1.114-2.241-.295-1.348.334-2.756-.228-4.007-.41-.912-1.095-1.875-1.281-2.813-.111-.559-.22-1.849.221-3.058-.356-.18-.817 1.976-.733 2.917.115.987 1.225 2.34 1.456 3.304.32 1.336-.136 2.706.014 3.554.154.878 1.183 1.75 1.23 2.64.054 1-.417 2.054-.846 2.94-.361.747-1.813 1.638-1.61 1.868 0 0 1.425-.777 1.886-1.438z"
          color="#000"
          fontWeight={400}
          fontFamily="sans-serif"
          overflow="visible"
          fill="#3b0000"
        />
        <Path
          variants={pathVariant}
          initial="initial"
          animate={pathControls}
          custom={{ fill: '#3b0000', item: 9 }}
          style={{
            lineHeight: 'normal',
            textIndent: 0,
            textAlign: 'start',
            textDecorationLine: 'none',
            textDecorationStyle: 'solid',
            textDecorationColor: '#000',
            textTransform: 'none',
            whiteSpace: 'normal',
            isolation: 'auto',
            mixBlendMode: 'normal',
          }}
          d="M43.4 101.9c1.18-.509 3.836-1.29 4.217-2.249.2-.5-.591-1.308-.475-2.12.165-1.143 1.458-2.006 1.264-3.168-.142-.848-.593-1.832-.456-2.62.082-.47.445-1.503 1.439-2.28-.358-.264-1.737 1.236-1.998 1.99-.24.801.57 2.236.478 3.06-.13 1.143-1.202 2.039-1.348 2.745-.152.731.747 1.766.462 2.469-.32.79-2.895 1.212-3.748 1.744-.72.448-4.32 2.945-4.165 3.194 0 0 3.523-2.419 4.33-2.765zM48.716 96.703c-.487 1.046-.468 2.343.023 3.213.255.453 1.519.523 2.091 1.136.807.863.524 2.213 1.62 2.876.799.483 1.946.872 2.484 1.481.32.364.886 1.272.76 2.385.49-.037.32-1.864-.096-2.524-.47-.68-2.26-1.156-2.861-1.765-.833-.841-.745-2.08-1.21-2.64-.48-.58-2.01-.737-2.366-1.378-.4-.719-.187-1.73.031-2.595.184-.73 1.631-2.09 1.31-2.164 0 0-1.452 1.262-1.786 1.975z"
          color="#000"
          fontWeight={400}
          fontFamily="sans-serif"
          overflow="visible"
          fill="#3b0000"
        />
        <Path
          variants={pathVariant}
          initial="initial"
          animate={pathControls}
          custom={{ fill: '#174000', item: 10 }}
          style={{
            lineHeight: 'normal',
            textIndent: 0,
            textAlign: 'start',
            textDecorationLine: 'none',
            textDecorationStyle: 'solid',
            textDecorationColor: '#000',
            textTransform: 'none',
            whiteSpace: 'normal',
            isolation: 'auto',
            mixBlendMode: 'normal',
          }}
          d="M33.08 46.724c-.788-1.56-2.258-2.173-.755.657 0 0 .927 6.705 3.814 7.907 2.828 1.177 7.134-3.276 10.192-3.106 3.938.22 6.59 7.9 9.877 6.08 2.873-1.59 9.035-6.127 9.035-6.127 2.269-1.37 2.51-2.315-.632-.963 0 0-5.657 5.257-9.808 4.734-2.6-.327-5.699-4.122-8.246-4.737-2.787-.673-5.813 2.288-8.504 1.297-2.376-.875-4.972-5.742-4.972-5.742z"
          color="#000"
          fontWeight={400}
          fontFamily="sans-serif"
          overflow="visible"
          fill="#174000"
        />
      </g>
    </Svg>
  )
}

export default Tree
