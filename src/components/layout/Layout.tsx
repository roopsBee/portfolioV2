import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { Global } from '@emotion/react'
import { PageProps } from 'gatsby'

import Header from './Header'
import Scene from '../scene/Scene'

const Content = styled.main`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.colors.background};
  display: flex;
  flex-direction: column;
`

const Layout: React.FC<PageProps> = ({ children, location }) => {
  const [isIndex, setIsIndex] = useState(true)

  useEffect(() => {
    if (location.pathname === '/') setIsIndex(true)
    else setIsIndex(false)
  }, [location])

  return (
    <>
      <Global
        styles={{
          '*': {
            margin: 0,
            padding: 0,
            boxSizing: 'border-box',
            fontFamily: 'Poppins, sans-serif',
          },
          body: { overflowX: 'hidden' },
        }}
      />
      <Header />
      <Content>
        <Scene skipTypedText={!isIndex} isHideName={!isIndex} />
        {children}
      </Content>
    </>
  )
}

export default Layout
