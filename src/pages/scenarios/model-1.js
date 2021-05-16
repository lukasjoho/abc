import React, { useState, useRef } from "react"
import PageTitle from "src/components/PageTitle"

import Layout from "src/layouts/Layout"
import IconTitle from "src/images/icons/icon-chart-increasing.png"
import CompChart from "src/components/Chart"
import Form from "src/components/Form"

const ModelPage = () => {
  const cref = useRef()
  const [value, setValue] = useState({
    initial: "",
  })
  const handleChange = e => {
    setValue({ ...value, [e.target.name]: e.target.value })
    console.log("cref")
  }

  return (
    <Layout>
      <PageTitle icon="chart-increasing" text="EBITDA Growth Model" />
      <CompChart ref={cref} />
    </Layout>
  )
}

export default ModelPage
