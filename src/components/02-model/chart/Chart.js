//dependencies
import React, { useState, useEffect, forwardRef } from "react"

//components
import { Line, Bar } from "react-chartjs-2"
import Form from "../form/Form"
import Table from "../Table"

//styles
import { StyledChart, StyledSwitch, StyledSwitchLarge } from "./Styles.js"

const Switch = ({ handleClick, chartType }) => {
  return (
    <StyledSwitch>
      <button
        name="line"
        onClick={e => handleClick(e)}
        className={chartType === "line" && "active"}
      >
        Line
      </button>
      <button
        name="bar"
        onClick={e => handleClick(e)}
        className={chartType === "bar" && "active"}
      >
        Bar
      </button>
    </StyledSwitch>
  )
}

const SwitchLarge = ({ handleClick, vizType }) => {
  return (
    <StyledSwitchLarge>
      <button
        name="graph"
        onClick={e => handleClick(e)}
        className={vizType === "graph" && "active"}
      >
        Graph
      </button>
      <button
        name="table"
        onClick={e => handleClick(e)}
        className={vizType === "table" && "active"}
      >
        Table
      </button>
    </StyledSwitchLarge>
  )
}

const CompChart = () => {
  //hooks
  const [chartType, setChartType] = useState("line")
  const [vizType, setVizType] = useState("graph")
  const [chartdata, setChartdata] = useState({})
  const [statedata, setStatedata] = useState({
    worst: [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160],
    base: [60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170],
    best: [70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180],
  })
  const [fieldValues, setFieldValues] = useState({
    initial: 1,
    revenue: [100, 5.0, 12.0, 15.0],
    cogs: [40, 3.0, 8.0, 12.0],
    opex: [20, 2.0, 4.0, 8.0],
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
  //handleChanges
  const handleType = e => {
    setChartType(e.target.name)
  }
  const handleViz = e => {
    setVizType(e.target.name)
  }
  //change specific array value after state value change was triggered
  const updateFieldArray = (e, index) => {
    fieldValues[e.target.name][index] = parseFloat(e.target.value)
    return [...fieldValues[e.target.name]]
  }

  //update assumptions after changing them in the table
  const handleFieldValuesChange = (e, index) => {
    setFieldValues({
      ...fieldValues,
      [e.target.name]: updateFieldArray(e, index),
    })
    transformValues(index)
  }

  //transform user assumptions into array with length of 12
  const generateArray = index => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    const newData = array.map((item, i) => {
      if (i === 0) {
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

  //update state data with new array
  const transformValues = index => {
    if (index === 0) {
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
      if (index === 1) {
        selected = "worst"
      }
      if (index === 2) {
        selected = "base"
      }
      if (index === 3) {
        selected = "best"
      }
      const newArray = generateArray(index)

      setStatedata({
        ...statedata,
        [selected]: [...newArray],
      })
    }
  }

  //chart component
  const chart = () => {
    let datacontent = statedata
    setChartdata({
      labels: [...labels],
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

  //set options for chart
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
            max: 400,
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

  //initialize chart
  useEffect(() => {
    chart()
  }, [statedata])

  //fill chart with data
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
        {vizType === "graph" && (
          <>
            <Switch handleClick={handleType} chartType={chartType} />
            {chartType === "line" && (
              <Line
                id="canvas"
                data={chartdata}
                width={100}
                height={40}
                options={options}
              />
            )}
            {chartType === "bar" && (
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
        {vizType === "table" && <Table statedata={statedata} labels={labels} />}
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
