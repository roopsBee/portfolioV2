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
  // transition duration from `layout.js` * 1000 to get time in ms
  // * 2 for exit + enter animation
  const TRANSITION_DELAY = 0.35 * 1000
  // if it's a "normal" route
  if (location.action === 'PUSH') {
    window.setTimeout(() => window.scrollTo(0, 0), TRANSITION_DELAY)
  }
  // if we used the browser's forwards or back button
  else {
    const savedPosition = getSavedScrollPosition(location) || [0, 0]
    window.setTimeout(() => window.scrollTo(...savedPosition), TRANSITION_DELAY)
  }
  return false
}
