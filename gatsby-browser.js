import React from 'react'
import { ThemeProvider } from '@emotion/react'
import { theme } from './src/theme/theme'
import Layout from './src/components/layout/Layout'

import '@fontsource/poppins'

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider theme={theme}>{element}</ThemeProvider>
}

export const wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return <Layout {...props}>{element}</Layout>
}
