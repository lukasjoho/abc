import React from "react"
import styled from "styled-components"
const StyledUpper = styled.div`
  font-weight: 500;
  color: ${props => props.theme.colors.middlegrey};
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  margin-bottom: ${props => props.mb};
`
const Upper = ({ text, mb }) => {
  return <StyledUpper mb={mb}>{text}</StyledUpper>
}

export default Upper
