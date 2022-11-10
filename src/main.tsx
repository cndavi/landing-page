import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// theme
import { ThemeProvider } from 'styled-components'
import { theme } from './style/theme'
import { GlobalStyle } from './style/global-style'

// routes
import { BrowserRouter as Router } from 'react-router-dom'

// styles
import './style/global-style'

// fonts
import './style/fonts/Biotif-Medium.woff'
import './style/fonts/Biotif-Regular.woff'
import './style/fonts/Biotif-SemiBold.woff'
import './style/fonts/Biotif-Book.woff'
import './style/fonts/Biotif-Light.woff'
import './style/fonts/Biotif-Bold.woff'
import './style/fonts/Bogart-Light-Trial.woff'
import './style/fonts/Bogart-Bold-Trial.woff'
import './style/fonts/Bogart-Medium-Trial.woff'
import './style/fonts/Bogart-Regular-Trial.woff'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </React.StrictMode>
)
