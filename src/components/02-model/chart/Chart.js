import React, { useState, useEffect, forwardRef } from "react"
import { Line, Bar } from "react-chartjs-2"
import styled from "styled-components"
import Form from "../form/Form"
import Table from "../Table"

const StyledChart = styled.div`
  margin-bottom: 4rem;
  max-width: 800px;
  display: flex;
  flex-direction: column;
`
const StyledSwitch = styled.div`
  align-self: flex-end;
  margin-bottom: 2rem;
  button {
    all: unset;
    padding: 0rem 0.5rem;
    font-weight: 500;
    color: ${props => props.theme.colors.middlegrey};
    font-size: 1.2rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    margin-bottom: ${props => props.mb};
    border-radius: 0.5rem;
    cursor: pointer;
    transition: 0.15s ease;
    &.active {
      color: ${props => props.theme.colors.dark};
    }
  }
`
const Switch = ({ handleClick, chartType }) => {
  return (
    <StyledSwitch>
      <button
        name="line"
        onClick={e => handleClick(e)}
        className={chartType == "line" && "active"}
      >
        Line
      </button>
      <button
        name="bar"
        onClick={e => handleClick(e)}
        className={chartType == "bar" && "active"}
      >
        Bar
      </button>
    </StyledSwitch>
  )
}
const StyledSwitchLarge = styled.div`
  align-self: flex-start;
  margin-bottom: 2rem;
  margin-top: 2rem;
  button {
    all: unset;
    padding: 1rem 1.5rem;
    font-weight: 500;
    color: ${props => props.theme.colors.middlegrey};
    font-size: 1.2rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    margin-bottom: ${props => props.mb};
    border-radius: 0.5rem;
    cursor: pointer;
    transition: 0.15s ease;
    &.active {
      background: ${props => props.theme.colors.lightgrey};
      color: ${props => props.theme.colors.dark};
    }
  }
`
const SwitchLarge = ({ handleClick, vizType }) => {
  return (
    <StyledSwitchLarge>
      <button
        name="graph"
        onClick={e => handleClick(e)}
        className={vizType == "graph" && "active"}
      >
        Graph
      </button>
      <button
        name="table"
        onClick={e => handleClick(e)}
        className={vizType == "table" && "active"}
      >
        Table
      </button>
    </StyledSwitchLarge>
  )
}

const CompChart = () => {
  const [chartType, setChartType] = useState("line")
  const handleType = e => {
    setChartType(e.target.name)
  }
  const handleViz = e => {
    setVizType(e.target.name)
  }
  const [vizType, setVizType] = useState("graph")

  const [chartdata, setChartdata] = useState({})
  const [statedata, setStatedata] = useState({
    worst: [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160],
    base: [60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170],
    best: [70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180],
  })
  const labels = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEZ",
  ]

  const [fieldValues, setFieldValues] = useState({
    initial: 1,
    revenue: [100, 5.0, 12.0, 15.0],
    cogs: [40, 3.0, 8.0, 12.0],
    opex: [20, 2.0, 4.0, 8.0],
  })
  const updateFieldArray = (e, index) => {
    fieldValues[e.target.name][index] = parseFloat(e.target.value)
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
        return parseFloat(ebit).toFixed(2)
      } else {
        const futureEbit =
          fieldValues.revenue[0] * (1 + fieldValues.revenue[index] / 100) ** i -
          fieldValues.cogs[0] * (1 + fieldValues.cogs[index] / 100) ** i -
          fieldValues.opex[0] * (1 + fieldValues.opex[index] / 100) ** i
        return parseFloat(futureEbit).toFixed(2)
      }
    })
    return newData
  }

  const transformValues = index => {
    if (index == 0) {
      const worst = generateArray(1)
      const base = generateArray(2)
      const best = generateArray(3)
      setStatedata({
        ...statedata,
        worst: [...worst],
        base: [...base],
        best: [...best],
      })
    } else {
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
  }

  const chart = () => {
    let datacontent = statedata
    setChartdata({
      labels: [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEZ",
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
            max: 500,
            fontFamily: "Inter",
            fontColor: "#C2C7CC",
            padding: 10,
            callback: function (value) {
              return "$ " + value + " M"
            },
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
            fontColor: "#C2C7CC",
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
        {vizType == "graph" && (
          <>
            <Switch handleClick={handleType} chartType={chartType} />
            {chartType == "line" && (
              <Line
                id="canvas"
                data={chartdata}
                width={100}
                height={40}
                options={options}
              />
            )}
            {chartType == "bar" && (
              <Bar
                id="canvas"
                data={chartdata}
                width={100}
                height={40}
                options={options}
              />
            )}
          </>
        )}
        {vizType == "table" && <Table statedata={statedata} labels={labels} />}
        <SwitchLarge handleClick={handleViz} vizType={vizType} />
      </StyledChart>

      <Form
        handleFieldValuesChange={handleFieldValuesChange}
        fieldValues={fieldValues}
      />
    </>
  )
}
export default forwardRef(CompChart)
