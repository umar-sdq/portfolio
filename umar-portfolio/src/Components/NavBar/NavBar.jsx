import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
        <p>Umar Siddiqui</p>
      <div className="nav-links">
        <NavLink to="/" end>About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/passions">Passions</NavLink>
      </div>
    </div>
  )
}

export default Navbar
