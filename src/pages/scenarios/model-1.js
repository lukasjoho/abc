//dependencies
import React from "react"

//components
import PageTitle from "src/components/00-shared/PageTitle"
import Layout from "src/layouts/Layout"
import CompChart from "src/components/02-model/chart/Chart"
import Meta from "../../components/00-shared/Meta"

const ModelPage = () => {
  return (
    <>
      <Meta
        title="EBITDA Growth Model"
        description="Your model."
        url="https://kind-ride-786754.netlify.app/scenarios/model-1"
      />
      <Layout>
        <PageTitle icon="chart-increasing" text="EBITDA Growth Model" />
        <CompChart />
      </Layout>
    </>
  )
}

export default ModelPage
