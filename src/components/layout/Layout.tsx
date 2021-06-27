import React from 'react'
import styled from '@emotion/styled'
import { Global } from '@emotion/react'
import { PageProps } from 'gatsby'

import Header from './Header'

const Content = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.colors['vivid-sky-blue']};
  display: flex;
`

const Layout: React.FC<PageProps> = ({ children }) => {
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
        }}
      />
      <Header />
      <Content>{children}</Content>
    </>
  )
}

export default Layout
