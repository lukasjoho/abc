import React, { useState, useEffect, useRef, forwardRef } from "react"
import { Line } from "react-chartjs-2"
import { Chart, Tooltip, CategoryScale, LinearScale, Title } from "chart.js"
import Form from "./Form"
Chart.register(LinearScale)
const CompChart = () => {
  const [chartdata, setChartdata] = useState(null)
  const ref = useRef(null)
  const [componentref, setComponentRef] = useState()
  const handleData = data => {
    setChartdata(data)
  }
  const handleValues = (value, index) => {
    const length = ref.current.data.datasets[0].data
    const newData = length.map((item, i) => {
      if (i == 0) {
        return value[0]
      } else {
        const newValue = value[0] * (1 + value[index] / 100) ** i
        return parseFloat(newValue.toFixed(2))
      }
    })
    return newData
  }

  const handleCall = (value, index) => {
    ref.current.data.datasets[index - 1].data = handleValues(value, index)
    ref.current.update()
    // console.log("ref", ref.current.props.data.datasets[index - 1].data)
    // console.log("Updater", ref.current.update())
  }
  const getData = () => {}
  const handleRef = componentref => {}

  useEffect(() => {
    const data = {
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
          data: [80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190],
        },
        {
          label: "Base",
          borderColor: "yellow",
          borderWidth: 5,
          data: [90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200],
        },
        {
          label: "Best",
          borderColor: "green",
          borderWidth: 5,
          data: [100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210],
        },
      ],
    }
    handleData(data)

    // console.log(componentref.legend.position)
  }, [ref.current])

  return (
    <>
      <Line
        ref={ref}
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
            y: {
              display: true,
              grid: {
                color: "#ececec",
              },
              ticks: {
                color: "#8c8c8b",
                font: {
                  size: 12,
                  weight: "900",
                },
                padding: 50,
                beginAtZero: true,
                suggestedMin: 50,
                suggestedMax: 100,
                min: 10,
                max: 200,
              },
            },
          },
        }}
      />
      <button onClick={getData}>GET DATA</button>
      <Form handleCall={handleCall} />
    </>
  )
}
export default forwardRef(CompChart)
