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
  position: relative;
  img {
    height: 1.4rem;
    margin-right: 1rem;
  }
  &:hover {
    background: #7ea094;
  }
  &.animation {
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 4rem;
      background: #99b9ae;
      animation: pulse 3s infinite;
      border-radius: 0.6rem;
      z-index: -1;
      transform: scale(1);
    }

    @keyframes pulse {
      0% {
        transform: scale(1);
        opacity: 1;
      }
      50% {
        transform: scale(1.5);
        opacity: 0;
      }
      100% {
        transform: scale(1.5);
        opacity: 0;
      }
    }
  }
`
const Button = ({ text, href, animation }) => {
  return (
    <>
      {href ? (
        <a href={href} target="_blank">
          <StyledButton className={animation && "animation"}>
            <img src={IconArrowButton} alt="" />
            {text}
          </StyledButton>
        </a>
      ) : (
        <StyledButton className={animation && "animation"}>
          <img src={IconArrowButton} alt="" />
          {text}
        </StyledButton>
      )}
    </>
  )
}

export default Button
