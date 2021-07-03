import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      'vivid-sky-blue': string
      'sizzling-red': string
      'dark-lava': string
      'generic-viridian': string
      pistachio: string
      shadow: string
      borderColor: string
    }
    boxShadow: string
    boxShadowActive: string
    fonts: { IBM: string }
  }
}
