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
import Overview from "../components/Overview"
import Meta from "../components/Meta"
const ScenariosPage = () => (
  <>
    <Meta
      title="Scenarios"
      description="All your scenario models in one place."
      url="https://kind-ride-786754.netlify.app/scenarios"
    />
    <Layout>
      <PageTitle icon="chart-increasing" text="Your scenarios" />
      <Overview />
    </Layout>
  </>
)

export default ScenariosPage
