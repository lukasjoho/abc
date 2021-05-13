import React, { useState, useEffect, useRef } from "react"
import { Line } from "react-chartjs-2"
const Chart = () => {
  const [chartdata, setChartdata] = useState(null)
  const ref = useRef(null)
  const [value, setValue] = useState([62, 59, 65, 63, 70, 75, 81])
  useEffect(() => {
    const data = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "My First dataset",
          borderColor: "#c7f1fd",
          borderWidth: 3,

          data: [62, 59, 65, 63, 70, 75, 81],
        },
      ],
    }
    setChartdata(data)
  }, [])

  const handleClick = () => {
    console.log(ref.current.data.datasets[0].data)
    // setValue([62, 59, 65, 63, 70, 75, ])
    ref.current.data.datasets[0].data = [62, 59, 45, 63, 70, 75, 81]
    ref.current.update()
  }

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
          legend: {
            display: false,
          },
          scales: {
            gridLines: [
              {
                color: "red",
              },
            ],
            xAxes: [
              {
                gridLines: {
                  color: "rgba(158,174,176,0.05)",
                },
                ticks: {
                  display: false, //this will remove only the label
                  lineHeight: 0,
                },
              },
            ],
            yAxes: [
              {
                gridLines: {
                  color: "rgba(158,174,176,0.05)",
                },
                ticks: {
                  display: false, //this will remove only the label
                },
              },
            ],
          },
        }}
      />
      <button onClick={handleClick}>Update Chart</button>
    </>
  )
}

export default Chart
