import React from 'react'
import { ThemeProvider } from '@emotion/react'
import { theme } from './src/theme/theme'
import Layout from './src/components/layout/Layout'

import '@fontsource/poppins'
import '@fontsource/ibm-plex-mono'

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider theme={theme}>{element}</ThemeProvider>
}

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
