import React from 'react'
import { motion, MotionProps } from 'framer-motion'
import styled, { CSSObject } from '@emotion/styled'

const Container = styled(motion.div)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  border: `1px solid ${theme.colors.borderColor}`,
  borderRadius: '5px',
  zIndex: 1000,
  flex: '0 0',
  flexBasis: '100%',
  maxWidth: '375px',
  backgroundColor: theme.colors.primary,
  color: theme.colors.mostReadableText(theme.colors.primary),
}))

interface Props extends MotionProps {
  css?: CSSObject
}

const Card: React.FC<Props> = ({ children, css, ...props }) => {
  return (
    <Container
      animate={{ rotateY: 0, opacity: 1, transition: { duration: 0.3 } }}
      initial={{ rotateY: 90, opacity: 0 }}
      exit={{ opacity: 0, rotateY: -90, transition: { duration: 0.3 } }}
      css={css}
      {...props}
    >
      {children}
    </Container>
  )
}

export default Card
