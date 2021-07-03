import facepaint from 'facepaint'
import tinyColor from 'tinycolor2'

export type ThemeType = {
  colors: {
    primary: string
    secondary: string
    tertiary: string
    'dark-text': string
    'light-text': string
    brown: string
    background: string
    shadow: string
    borderColor: string
    mostReadableText: (backgroundColor: string) => string
  }
  boxShadow: string
  boxShadowActive: string
  fonts: { IBM: string }
}

const contrastText = (backgroundColor: string) =>
  tinyColor.mostReadable(backgroundColor, ['#1B1513', '#ddd']).toHexString()

export const theme: ThemeType = {
  colors: {
    primary: '#a1cf6bff',
    secondary: '#f2545bff',
    tertiary: '#2a7f62ff',
    'dark-text': '#1B1513',
    'light-text': '#ddd',
    brown: '#463730ff',
    background: '#56cbf9ff',
    shadow: '#03181d',
    borderColor: '#09acec',
    mostReadableText: (backgroundColor) => contrastText(backgroundColor),
  },
  boxShadow: '0px 1px 3px #03181d',
  boxShadowActive: '0px 1px 3px #fbf700',
  fonts: {
    IBM: 'IBM Plex Mono',
  },
}

export const breakpoints = {
  sm: 576,
  md: 768,
  lg: 1024,
  xl: 1200,
  xxl: 1400,
}

export const mq = facepaint([
  `@media(min-width: ${breakpoints.sm}px)`,
  `@media(min-width: ${breakpoints.md}px)`,
  `@media(min-width: ${breakpoints.lg}px)`,
  `@media(min-width: ${breakpoints.xl}px)`,
  `@media(min-width: ${breakpoints.xxl}px)`,
])
