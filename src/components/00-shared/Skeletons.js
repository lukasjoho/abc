import React from "react"
import styled from "styled-components"
const Single = styled.div`
  background: ${props => props.theme.colors.lightgrey};
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: 1.5rem;
`

const StyledSkeletons = styled.div`
  .row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 4rem;
    .col {
      width: 45%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
`

const Skeletons = () => {
  return (
    <StyledSkeletons>
      <div className="row">
        <Single height="200px" width="30%" />
        <Single height="200px" width="30%" />
        <Single height="200px" width="30%" />
      </div>
      <div className="row">
        <div className="col">
          <Single height="200px" width="100%" />
        </div>
        <div className="col">
          <Single height="30px" width="100%" />
          <Single height="30px" width="100%" />
          <Single height="30px" width="100%" />
          <Single height="30px" width="100%" />
          <Single height="30px" width="100%" />
        </div>
      </div>
    </StyledSkeletons>
  )
}

export default Skeletons
