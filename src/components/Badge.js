import React from "react"
import styled from "styled-components"
const StyledBadge = styled.div`
  border: 1px solid ${props => props.theme.colors.blue};
  background: ${props => `${props.theme.colors.blue}50`};
  border-radius: 1rem;
  width: 100%;
  padding: 1rem;
  font-size: 1.4rem;
`
const Badge = ({ text }) => {
  return (
    <StyledBadge>
      <p>{text}</p>
    </StyledBadge>
  )
}

export default Badge
