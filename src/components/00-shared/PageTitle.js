import React from "react"
import styled from "styled-components"
import Emoji from "react-apple-emojis"
const StyledTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4rem;
  .emoji {
    height: 3rem;
    width: 3rem;
    margin-right: 2.2rem;
  }
  h1 {
    font-size: 3rem;
  }
`
const PageTitle = ({ icon, text }) => {
  return (
    <StyledTitle>
      <Emoji className="emoji" name={icon} />
      <h1>{text}</h1>
    </StyledTitle>
  )
}

export default PageTitle
