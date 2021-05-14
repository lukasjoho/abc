import React, { useState, useEffect, useRef, forwardRef } from "react"
import { Line } from "react-chartjs-2"

import Form from "./Form"
const Chart = () => {
  const [chartdata, setChartdata] = useState(null)
  const ref = useRef(null)
  // const options = {
  //   maintainAspectRatio: true,
  //   legend: {
  //     position: "bottom",
  //   },
  //   scales: {
  //     y: {
  //       display: true,
  //       ticks: {
  //         beginAtZero: true, // minimum value will be 0.
  //         min: 0,
  //       },
  //     },
  //   },
  // }
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
      // {
      //   label: "Base",
      //   borderColor: "yellow",
      //   borderWidth: 5,
      //   data: [90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200],
      // },
      // {
      //   label: "Best",
      //   borderColor: "green",
      //   borderWidth: 5,
      //   data: [100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210],
      // },
    ],
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
  }

  useEffect(() => {
    setChartdata(data)
  }, [])

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
            gridLines: [
              {
                color: "red",
              },
            ],
          },
        }}
      />

      <Form handleCall={handleCall} />
    </>
  )
}
export default forwardRef(Chart)
