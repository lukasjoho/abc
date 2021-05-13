import React from "react"
import styled from "styled-components"

const StyledTitle = styled.div`
  display: flex;
  img {
    height: 3rem;
  }
  h1 {
    font-size: 3rem;
  }
`
const PageTitle = ({ icon, text }) => {
  return (
    <StyledTitle>
      <img src={icon} alt="" />
      <h1>{text}</h1>
    </StyledTitle>
  )
}

export default PageTitle
