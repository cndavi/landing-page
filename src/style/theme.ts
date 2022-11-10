import type { MmdTheme } from 'styled-components'
import './fonts.css'

export const theme: MmdTheme = {
  font: {
    body: `"Biotif-Medium", sans-serif`,
    heading: `"Bogart-Bold", sans-serif`,
  },
  color: {
    white: '#fff',
    black: '#000',
    gray: '#222',
    lightNeutral: '#f8f8f8',
    neutral: '#e0dcdc',
  },
  colorRgba: {
    gray: 'rgba(201, 201, 201, 0.1)',
    darkGray: 'rgba(201, 201, 201, 0.3)',
    white10a: 'rgba(255, 255, 255, 0.1)',
    white20a: 'rgba(255, 255, 255, 0.2)',
    white30a: 'rgba(255, 255, 255, 0.3)',
    black60a: 'rgba(0, 0, 0, 0.6)',
  },
  sectionInnerMaxWidth: '163.2rem',
  sitePaddingHorizontal: '10.5%',
  gutter: '24px',
}
