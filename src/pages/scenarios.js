import React, { useState, useRef } from "react"
import PageTitle from "../components/PageTitle"

import Layout from "../layouts/Layout"
import IconTitle from "src/images/icons/icon-chart-increasing.png"
import Chart from "../components/Chart"
import Form from "../components/Form"

const IndexPage = () => {
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
      <PageTitle icon={IconTitle} text="Revenue Growth Model" />
      <Chart ref={cref} />
    </Layout>
  )
}

export default IndexPage
