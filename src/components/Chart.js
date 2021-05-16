import React, { useState, useEffect, useRef, forwardRef } from "react"
import { Line, Bar } from "react-chartjs-2"
import styled from "styled-components"
import Form from "./Form"

const StyledChart = styled.div`
  /* border: 1px solid ${props => props.theme.colors.lightgrey}; */
  margin-bottom: 4rem;
  max-width: 800px;
`

const CompChart = () => {
  const [chartdata, setChartdata] = useState({})
  const [statedata, setStatedata] = useState({
    worst: [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160],
    base: [60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170],
    best: [70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180],
  })

  const [fieldValues, setFieldValues] = useState({
    initial: 1,
    revenue: [100, 5, 12, 15],
    cogs: [40, 3, 8, 12],
    opex: [20, 2, 4, 8],
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

  const chart = () => {
    let datacontent = statedata
    setChartdata({
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dez",
      ],
      datasets: [
        {
          label: "Worst",
          backgroundColor: "#F1726F25",
          borderColor: "#F1726F",
          borderWidth: 3,
          data: datacontent.worst,
          lineTension: 0,
        },
        {
          label: "Base",
          backgroundColor: "#F4C68625",
          borderColor: "#F4C686",
          borderWidth: 3,
          data: datacontent.base,
          lineTension: 0,
        },
        {
          label: "Best",
          backgroundColor: "#7ABB8025",
          borderColor: "#7ABB80",
          borderWidth: 3,
          data: datacontent.best,
          lineTension: 0,
        },
      ],
    })
  }
  const options = {
    maintainAspectRatio: true,
    legend: {
      display: false,
      position: "bottom",
      labels: {
        font: {
          size: 2,
          family: "Inter",
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          font: {
            size: 2,
            family: "Inter",
          },
        },
      },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            min: 0,
            max: 300,
            fontFamily: "Inter",
            fontColor: "#707880",
          },
          gridLines: {
            display: true,
            lineWidth: 2,
            drawBorder: false,
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            fontFamily: "Inter",
            fontColor: "#707880",
          },
          gridLines: {
            display: false,
            drawBorder: true,
            borderWidth: 2,
          },
        },
      ],
    },
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
    console.log()
  }, [])

  return (
    <>
      <StyledChart>
        <Line
          id="canvas"
          data={chartdata}
          width={100}
          height={60}
          options={options}
        />
      </StyledChart>

      <Form
        handleFieldValuesChange={handleFieldValuesChange}
        fieldValues={fieldValues}
      />
    </>
  )
}
export default forwardRef(CompChart)
