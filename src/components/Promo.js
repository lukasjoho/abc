import React from "react"
import styled from "styled-components"
import Emoji from "react-apple-emojis"
import Button from "./Button"
import ImageChart from "src/images/image-promo-chart.jpg"
import ImageNavItem from "src/images/image-promo-navitem.jpg"
import { Link } from "gatsby"
const StyledPromo = styled.div`
  border: 1px solid #c9dbcb;
  border-radius: 1.5rem;
  background: #f5faf8;
  padding: 2rem;
  margin-bottom: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.15s ease;
  max-width: 900px;
  &:hover {
    border: 1px solid #9bb09d;
  }
  .text {
    width: 50%;
  }
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
    margin-bottom: 1.5rem;
  }
  .images {
    width: 50%;
    position: relative;
    .chart {
      width: 100%;
      border: 1px solid ${props => props.theme.colors.lightgrey};
      border-radius: 1rem;
    }
    .navitem {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 50%;
      transform: translate3d(-25%, 5%, 0);
      border: 1px solid ${props => props.theme.colors.lightgrey};
      border-radius: 1rem;
    }
  }
`
const Promo = () => {
  return (
    <Link to="/scenarios">
      <StyledPromo>
        <div classNae="text">
          <div className="label">
            <Emoji className="emoji" name="sparkles" />
            <h2>New</h2>
          </div>
          <h3>Scenario Models</h3>
          <p>Let us introduce you to scenario models! </p>
          <Button text="Get Started" />
        </div>
        <div className="images">
          <img className="chart" src={ImageChart} alt="" />
          <img className="navitem" src={ImageNavItem} alt="" />
        </div>
      </StyledPromo>
    </Link>
  )
}

export default Promo
