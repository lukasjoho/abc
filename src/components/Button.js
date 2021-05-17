import React from "react"
import styled from "styled-components"
import IconArrowButton from "src/images/icons/icon-arrow-button.svg"
const StyledButton = styled.button`
  all: unset;
  height: 4rem;
  padding: 0 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.colors.green};
  border-radius: 0.6rem;
  color: white;
  font-weight: 500;
  img {
    height: 1.4rem;
    margin-right: 1rem;
  }
  &:hover {
    background: #7ea094;
  }
`
const Button = ({ text, href }) => {
  return (
    <>
      {href ? (
        <a href={href} target="_blank">
          <StyledButton>
            <img src={IconArrowButton} alt="" />
            {text}
          </StyledButton>
        </a>
      ) : (
        <StyledButton>
          <img src={IconArrowButton} alt="" />
          {text}
        </StyledButton>
      )}
    </>
  )
}

export default Button
