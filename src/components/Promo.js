import React from "react"
import styled from "styled-components"
import Emoji from "react-apple-emojis"
import Button from "./Button"
const StyledPromo = styled.div`
  border: 1px solid #c9dbcb;
  border-radius: 1.5rem;
  background: #f5faf8;
  padding: 2rem;

  .label {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
    .emoji {
      width: 2rem;
      height: 2rem;
      margin-right: 0.5rem;
    }
    h2 {
      text-transform: uppercase;
      font-size: 1.2rem;
      font-weight: 400;
      letter-spacing: 0.1rem;
    }
  }
  h3 {
    margin-bottom: 0.5rem;
  }
  p {
    margin-bottom: 2rem;
  }
`
const Promo = () => {
  return (
    <StyledPromo>
      <div className="label">
        <Emoji className="emoji" name="sparkles" />
        <h2>New!</h2>
      </div>
      <h3>Scenarios</h3>
      <p>Let us introduce you to scenario models!</p>
      <Button text="Get Started" />
    </StyledPromo>
  )
}

export default Promo
