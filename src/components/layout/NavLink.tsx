import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  border: `1px solid ${theme.colors.borderColor}`,
  padding: '1px 10px',
  fontSize: '18px',
  backgroundColor: theme.colors['vivid-sky-blue'],
  borderRadius: '5px',
  textTransform: 'capitalize',
  color: theme.colors['dark-lava'],
  boxShadow: '0px 1px 3px #03181d',
  transition: 'all 0.3s ease',
  minWidth: '95px',
  textAlign: 'center',
  '&:hover': {
    boxShadow: '0px 1px 3px #fbf700',
    borderColor: 'white',
  },
}))

interface Props {
  to: string
}

const NavLink: React.FC<Props> = ({ to, children }) => {
  return (
    <StyledLink
      to={to}
      activeStyle={{ borderColor: 'white', boxShadow: '0px 1px 3px #fbf700' }}
    >
      {children}
    </StyledLink>
  )
}

export default NavLink
