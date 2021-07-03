import React, { useEffect, useState } from 'react'
import { navigate } from 'gatsby'
import styled from '@emotion/styled'
import { useLocation } from '@reach/router'
import { motion, MotionProps } from 'framer-motion'

const StyledLink = styled.button<{ active: boolean }>(({ theme, active }) => ({
  textDecoration: 'none',
  border: `1px solid ${active ? 'white' : theme.colors.borderColor}`,
  padding: '1px 10px',
  fontSize: '18px',
  backgroundColor: theme.colors.primary,
  borderRadius: '5px',
  textTransform: 'capitalize',
  color: theme.colors.mostReadableText(theme.colors.primary),
  boxShadow: `${active ? '0px 1px 3px #fbf700' : theme.boxShadow}`,
  transition: 'all 0.3s ease',
  minWidth: '95px',
  textAlign: 'center',
  cursor: 'pointer',
  '&:hover': {
    boxShadow: theme.boxShadowActive,
    borderColor: 'white',
  },
}))

type Props = {
  to: string
  motionProps?: MotionProps
}

const NavLink: React.FC<Props> = ({ to, children, motionProps, ...props }) => {
  const [active, setActive] = useState(false)
  const location = useLocation()
  useEffect(() => {
    if (to === location.pathname) {
      setActive(true)
    } else {
      setActive(false)
    }
  }, [location])

  return (
    <motion.div {...motionProps}>
      <StyledLink
        {...props}
        onClick={() => {
          navigate(to)
        }}
        active={active}
      >
        {children}
      </StyledLink>
    </motion.div>
  )
}

export default NavLink
