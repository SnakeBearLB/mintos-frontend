import styled from "styled-components"
import { devices } from "./MediaSizes.styled"

export const Nav = styled.nav`
  diplay: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 20px;
  margin-bottom: 40px;
`
export const Logo = styled.img`
  width: 200px;

  @media(max-width: 375px) {
    width: 100px;
  }
`
