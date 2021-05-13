import * as React from "react"
import PageTitle from "../components/PageTitle"

import Layout from "../layouts/Layout"
import IconTitle from "src/images/icons/icon-chart-increasing.png"
const IndexPage = () => (
  <Layout>
    <PageTitle icon={IconTitle} text="Scenario Models" />
  </Layout>
)

export default IndexPage