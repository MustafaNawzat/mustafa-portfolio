import React from 'react'
import {NavLink} from 'react-router-dom';
import "./style.css"

// Bootstrp
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


class Navigation extends React.Component {

  render() {
    return (
      <>
      <Navbar expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
              <NavLink exact activeClassName="link-active" className="link p-0 mt-3 mr-3 text-uppercase font-weight-bold" to="/"  href="#">About</NavLink>
              <NavLink activeClassName="link-active" className="link p-0 mt-3 mr-3 text-uppercase font-weight-bold" to="/Projects"  href="#">Projects</NavLink>
              <NavLink activeClassName="link-active" className="link p-0 mt-3 mr-3 text-uppercase font-weight-bold" to="/Contact"  href="#">Contact</NavLink>
              <NavLink activeClassName="link-active" className="link p-0 mt-3 mr-3 text-uppercase font-weight-bold" to="/resume"  href="#">resume</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </>
    )
  }
}
export default Navigation;