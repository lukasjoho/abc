import React from "react"
import styled from "styled-components"
const Single = styled.div`
  background: ${props => props.theme.colors.lightgrey};
  width: 100rem;
  height: 20rem;
  border-radius: 1.5rem;
`
const StyledSkeletons = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const Skeletons = () => {
  return (
    <div>
      <Single />
      <Single />
      <Single />
      <Single />
    </div>
  )
}

export default Skeletons
