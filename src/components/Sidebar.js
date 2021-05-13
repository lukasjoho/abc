import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const StyledSidebar = styled.div`
  background: ${props => props.theme.colors.muted};
  width: 24rem;
`
const Sidebar = () => {
  return (
    <StyledSidebar>
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
    </StyledSidebar>
  )
}

export default Sidebar
