import { NavLink } from 'react-router-dom'

const Navbar = (): JSX.Element => {
  return (
    <div className="header">
      <NavLink
        to="/"
        exact
        activeStyle={{
          fontWeight: 'bold',
          color: 'red',
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/work"
        exact
        activeStyle={{
          fontWeight: 'bold',
          color: 'red',
        }}
      >
        Work
      </NavLink>
      <NavLink
        to="/about"
        exact
        activeStyle={{
          fontWeight: 'bold',
          color: 'red',
        }}
      >
        About
      </NavLink>
      <NavLink
        to="/contact"
        exact
        activeStyle={{
          fontWeight: 'bold',
          color: 'red',
        }}
      >
        Contact
      </NavLink>
    </div>
  )
}

export default Navbar
