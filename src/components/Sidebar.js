import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const StyledSidebar = styled.div`
  width: 32rem;
  border-left: 2px solid ${props => props.theme.colors.lightgrey};
`
const Sidebar = () => {
  return <StyledSidebar>Activity</StyledSidebar>
}

export default Sidebar
