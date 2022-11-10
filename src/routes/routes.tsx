import { ReactElement } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Path } from './Path'
import Home from '../scenes/Home/Home'
import Work from '../scenes/Work/Work'
import About from '../scenes/About/About'
import Contact from '../scenes/Contact/Contact'

export const Routes = (): ReactElement => {
  return (
    <Switch>
      <Route path={Path.Home} exact>
        <Home />
      </Route>
      <Route path={Path.Work}>
        <Work />
      </Route>
      <Route path={Path.About}>
        <About />
      </Route>
      <Route path={Path.Contact}>
        <Contact />
      </Route>
    </Switch>
  )
}
