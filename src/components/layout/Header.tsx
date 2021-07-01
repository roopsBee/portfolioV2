import React from 'react'
import styled from '@emotion/styled'
import ResponsiveNav from './ResponsiveNav'

const HeaderBox = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  padding: 25px;
  justify-content: flex-end;
`

const Header: React.FC = () => {
  return (
    <>
      <HeaderBox>
        <ResponsiveNav />
      </HeaderBox>
    </>
  )
}

export default Header
