import React from 'react'
import styled from '@emotion/styled'
import NavLink from './NavLink'

const HeaderBox = styled.div`
  position: fixed;
  width: 100%;
`
const NavBox = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 25px;
  gap: 20px;
`

const Header: React.FC = () => {
  return (
    <HeaderBox>
      <NavBox>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/portfolio">Portfolio</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </NavBox>
    </HeaderBox>
  )
}

export default Header
