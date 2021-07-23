import React from 'react'
import styled from '@emotion/styled'
import { breakpoints, mq } from '@/theme/theme'
import ResponsiveNav from './ResponsiveNav'

const HeaderBox = styled.div(
  mq({
    position: 'fixed',
    width: '100vw',
    display: 'flex',
    padding: ['5px', '10px', '15px', '20px', '25px'],
    justifyContent: 'flex-end',
    zIndex: 2000,
  }),
)

const Header: React.FC = () => {
  return (
    <>
      <HeaderBox>
        <ResponsiveNav breakpoint={breakpoints.sm} />
      </HeaderBox>
    </>
  )
}

export default Header
