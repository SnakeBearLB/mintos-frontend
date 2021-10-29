
import React from "react"
import { Link } from "react-router-dom"
import { Logo, Nav } from "../styles/Header.styled"
import logo from "../logo.svg"



function Header(props) {
  return (
    
    <Nav className="nav">
      <Logo src={logo}/>
      <Link to="/">
        <div>Assets</div>
      </Link>
      <Link to="/minter">
        <div>Minter</div>
      </Link>
    </Nav>
  )
}

export default Header;