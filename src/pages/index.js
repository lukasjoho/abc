import * as React from "react"
import PageTitle from "../components/PageTitle"

import Layout from "../layouts/Layout"
import IconTitle from "src/images/icons/icon-chart-increasing.png"
import "@fontsource/inter/100.css"
import "@fontsource/inter/200.css"
import "@fontsource/inter/300.css"
import "@fontsource/inter/400.css"
import "@fontsource/inter/500.css"
import "@fontsource/inter/600.css"
import "@fontsource/inter/700.css"
import "@fontsource/inter/800.css"
import "@fontsource/inter/900.css"
import Promo from "../components/Promo"

import styled from "styled-components"
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
const Single = styled.div`
  background: ${props => props.theme.colors.lightgrey};
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: 1.5rem;
`

const IndexPage = () => (
  <Layout>
    <PageTitle icon="office-building" text="Home" />
    <Promo />
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
  </Layout>
)

export default IndexPage
