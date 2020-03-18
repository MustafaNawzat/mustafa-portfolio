import React from 'react'
import { NavLink } from 'react-router-dom';
import "./style.css"
 
class Navbar extends React.Component {

  
  render() {

    return (
      <div>
        <NavLink className="links" to="/" >About</NavLink>
        <NavLink className="links" to="/Cv" >cv</NavLink>
        <NavLink className="links" to="/Projects" >Projects</NavLink>
        <NavLink className="links" to="/Contact" >Contact</NavLink>
      </div>
    )
  }
}
export default Navbar;