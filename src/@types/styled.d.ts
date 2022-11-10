import 'styled-components'

declare module 'styled-components' {
  export interface MmdTheme {
    font: {
      heading: string
      body: string
    }
    color: {
      white: string
      black: string
      gray: string
      lightNeutral: string
      neutral: string
    }
    colorRgba: {
      gray: string
      darkGray: string
      white10a: string
      white20a: string
      white30a: string
      black60a: string
    }
    sectionInnerMaxWidth: string
    sitePaddingHorizontal: string
    gutter: string
  }
}
