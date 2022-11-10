import { createGlobalStyle } from 'styled-components'
import 'normalize.css'
import { theme } from './theme'

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin:0;
    padding:0;
    font-family: 'Biotif-Medium', Helvetica, "Helvetica Neue", Arial, "Lucida Grande", sans-serif;
  }

  html {
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;

    &:not(.no-smooth-scroll) {
      scroll-behavior: smooth;
    }
  }

  body {
    font-size: 1.6rem;
    color: ${theme.color.black};
    background-color: ${theme.color.white};
  }

  a {
    color: currentColor;
    display: block;
    text-decoration: none;
  }

  button {
    border:none;
    outline:none;

    &:focus{
      outline:none;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    font-size: 100%;
    font-weight: normal;
  }

  section {
    height: 100vh;
  }
`
