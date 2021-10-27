
import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import logo from "../logo.svg"

const Nav = styled.nav`
  diplay: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 20px;
  margin-bottom: 40px;
`
const Logo = styled.img`
  width: 100px;
`

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