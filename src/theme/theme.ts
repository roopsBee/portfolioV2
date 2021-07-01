export const theme = {
  colors: {
    'vivid-sky-blue': '#56cbf9ff',
    'sizzling-red': '#f2545bff',
    'dark-lava': '#463730ff',
    'generic-viridian': '#2a7f62ff',
    pistachio: '#a1cf6bff',
    shadow: '#03181d',
    borderColor: '#09acec',
  },
  boxShadow: '0px 1px 3px #03181d',
  boxShadowActive: '0px 1px 3px #fbf700',
}

export const breakpoints = {
  xs: 375,
  sm: 576,
  md: 768,
  lg: 1024,
  xl: 1200,
  xxl: 1366,
}

export const mq = (bp: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'): string => {
  const bps = breakpoints
  return `@media (min-width: ${bps[bp]}px)`
}
