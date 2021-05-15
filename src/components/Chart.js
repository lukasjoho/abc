import React, { useState, useEffect, useRef, forwardRef } from "react"
import { Line } from "react-chartjs-2"

import Form from "./Form"

const CompChart = () => {
  const [chartdata, setChartdata] = useState({})
  const [statedata, setStatedata] = useState({
    worst: [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160],
    base: [60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170],
    best: [70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180],
  })

  const [fieldValues, setFieldValues] = useState({
    initial: 1,
    revenue: [100, 5, 12, 25],
    cogs: [40, 2, 6, 12],
    opex: [20, 1, 3, 6],
  })
  const updateFieldArray = (e, index) => {
    fieldValues[e.target.name][index] = parseInt(e.target.value)
    return [...fieldValues[e.target.name]]
  }
  const handleFieldValuesChange = (e, index) => {
    setFieldValues({
      ...fieldValues,
      [e.target.name]: updateFieldArray(e, index),
    })
    transformValues(index)
  }
  const generateArray = index => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    const newData = array.map((item, i) => {
      if (i == 0) {
        const ebit =
          fieldValues.revenue[0] - fieldValues.cogs[0] - fieldValues.opex[0]
        return ebit
      } else {
        const futureEbit =
          fieldValues.revenue[0] * (1 + fieldValues.revenue[index] / 100) ** i -
          fieldValues.cogs[0] * (1 + fieldValues.cogs[index] / 100) ** i -
          fieldValues.opex[0] * (1 + fieldValues.opex[index] / 100) ** i
        return parseFloat(futureEbit)
      }
    })
    return newData
  }
  const transformValues = index => {
    let selected
    if (index == 1) {
      selected = "worst"
    }
    if (index == 2) {
      selected = "base"
    }
    if (index == 3) {
      selected = "best"
    }
    const newArray = generateArray(index)

    setStatedata({
      ...statedata,
      [selected]: [...newArray],
    })
  }

  const handleState = () => {
    setStatedata([40, 80, 75, 90, 67, 120, 100, 110, 100, 130, 90, 120])
  }

  const chart = () => {
    let datacontent = statedata
    setChartdata({
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "Dezember",
      ],
      datasets: [
        {
          label: "Worse",
          borderColor: "red",
          borderWidth: 5,
          data: datacontent.worst,
        },
        {
          label: "Base",
          borderColor: "yellow",
          borderWidth: 5,
          data: datacontent.base,
        },
        {
          label: "Best",
          borderColor: "green",
          borderWidth: 5,
          data: datacontent.best,
        },
      ],
    })
  }
  useEffect(() => {
    chart()
  }, [statedata])
  useEffect(() => {
    const worst = generateArray(1)
    const base = generateArray(2)
    const best = generateArray(3)
    setStatedata({
      ...statedata,
      worst: [...worst],
      base: [...base],
      best: [...best],
    })
  }, [])

  return (
    <>
      <Line
        id="canvas"
        data={chartdata}
        width={100}
        height={60}
        options={{
          maintainAspectRatio: true,
          plugins: {
            legend: {
              display: true,
              position: "bottom",
            },
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  min: 0,
                  max: 200,
                },
              },
            ],
          },
        }}
      />

      <Form
        handleFieldValuesChange={handleFieldValuesChange}
        fieldValues={fieldValues}
      />
    </>
  )
}
export default forwardRef(CompChart)
