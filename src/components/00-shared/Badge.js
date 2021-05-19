//dependencies
import React from "react"
import styled from "styled-components"

const StyledBadge = styled.div`
  background: ${props => `${props.theme.colors.blue}50`};
  border-radius: 1rem;
  width: 100%;
  padding: 1rem;
  font-size: 1.4rem;
  button {
    all: unset;
    width: 100%;
    background: #d7e2eb;
    text-align: center;
    height: 3.5rem;
    border-radius: 6px;
    margin-top: 1rem;
  }
`
const Badge = ({ text }) => {
  return (
    <StyledBadge>
      <p>{text}</p>
      <button>To The Survey</button>
    </StyledBadge>
  )
}

export default Badge
