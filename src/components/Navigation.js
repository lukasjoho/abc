import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const StyledNavigation = styled.div`
  background: ${props => props.theme.colors.muted};
  width: 24rem;
`
const NavSection = ({ children }) => {
  return <div></div>
}
const StyledNavItem = styled.div`
  display: flex;
`
const NavItem = ({ icon, text }) => {
  return (
    <StyledNavItem>
      <img src={icon} alt="" />
      <p>{text}</p>
    </StyledNavItem>
  )
}
const Navigation = () => {
  return (
    <StyledNavigation>
      <ul>
        <Link to="/">
          <li> Home</li>
        </Link>
      </ul>
      <ul>
        <Link to="/scenarios">
          <li>Scenarios</li>
        </Link>
      </ul>
      <NavSection>
        <NavItem text="Scenarios" />
      </NavSection>
    </StyledNavigation>
  )
}

export default Navigation
