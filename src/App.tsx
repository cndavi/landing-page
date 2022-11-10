import { Suspense } from 'react'
import { GlobalStyle } from './style/global-style'
import { Routes } from './routes/routes'
import { useCssViewportValues } from './hooks/useCssViewportValues'
import Navbar from './scenes/Navbar/Navbar'

const App = (): JSX.Element => {
  useCssViewportValues()

  return (
    <div className="app">
      <GlobalStyle />
      <Navbar />
      <Suspense fallback={<div>Loading</div>}>
        <Routes />
      </Suspense>
    </div>
  )
}

export default App
