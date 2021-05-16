import React from "react"
import styled from "styled-components"
const StyledButton = styled.button`
  all: unset;
  height: 4rem;
  padding: 0 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.colors.green};
  border-radius: 0.6rem;
  color: white;
`
const Button = ({ text }) => {
  return <StyledButton>{text}</StyledButton>
}

export default Button
