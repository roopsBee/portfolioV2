import React, { useEffect, useState } from 'react'
import { navigate } from 'gatsby'
import styled from '@emotion/styled'
import { useLocation } from '@reach/router'

const StyledLink = styled.button<{ active: boolean }>(({ theme, active }) => ({
  textDecoration: 'none',
  border: `1px solid ${active ? 'white' : theme.colors.borderColor}`,
  padding: '1px 10px',
  fontSize: '18px',
  backgroundColor: theme.colors['vivid-sky-blue'],
  borderRadius: '5px',
  textTransform: 'capitalize',
  color: theme.colors['dark-lava'],
  boxShadow: `${active ? '0px 1px 3px #fbf700' : theme.boxShadow}`,
  transition: 'all 0.3s ease',
  minWidth: '95px',
  textAlign: 'center',
  '&:hover': {
    boxShadow: theme.boxShadowActive,
    borderColor: 'white',
  },
}))

type Props = {
  to: string
}

const NavLink: React.FC<Props> = ({ to, children, ...props }) => {
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
    <StyledLink
      {...props}
      onClick={() => {
        navigate(to)
      }}
      active={active}
    >
      {children}
    </StyledLink>
  )
}

export default NavLink
