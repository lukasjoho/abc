//dependencies
import React from "react"

//components
import Layout from "../layouts/Layout"
import Overview from "../components/01-scenarios/Overview"
import Meta from "../components/00-shared/Meta"
import PageTitle from "../components/00-shared/PageTitle"

const ScenariosPage = () => {
  return (
    <>
      <Meta
        title="Scenarios"
        description="All your scenario models in one place."
        url="https://scenariofeature.netlify.app/scenarios"
      />
      <Layout>
        <PageTitle icon="chart-increasing" text="Your scenarios" />
        <Overview />
      </Layout>
    </>
  )
}

export default ScenariosPage
