import React from 'react'
import { ThemeProvider } from '@emotion/react'
import { AnimatePresence } from 'framer-motion'
import { theme } from './src/theme/theme'
import Layout from './src/components/layout/Layout'

import '@fontsource/poppins'
import '@fontsource/ibm-plex-mono'

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider theme={theme}>{element}</ThemeProvider>
}

export const wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return (
    <Layout {...props}>
      <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
    </Layout>
  )
}

export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  const path = location.pathname
  const TRANSITION_DELAY = path === '/portfolio/' ? 0 : 0.35 * 1000

  const savedPosition = getSavedScrollPosition(location) || [0, 0]
  window.setTimeout(() => window.scrollTo(...savedPosition), TRANSITION_DELAY)

  return false
}
