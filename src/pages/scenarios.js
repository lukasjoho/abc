import * as React from "react"
import PageTitle from "../components/PageTitle"

import Layout from "../layouts/Layout"
import IconTitle from "src/images/icons/icon-chart-increasing.png"
import Chart from "../components/Chart"
const IndexPage = () => (
  <Layout>
    <PageTitle icon={IconTitle} text="Revenue Growth Model" />
    <Chart />
  </Layout>
)

export default IndexPage
