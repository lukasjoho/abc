import React, { useEffect, useState } from "react"

const Form = ({ handleCall }) => {
  const [value, setValue] = useState({
    initial: 1,
    revenue: [100, 5, 12, 25],
    cogs: [40, 2, 6, 12],
    opex: [20, 1, 3, 6],
  })
  const updateItem = (e, index) => {
    value[e.target.name][index] = parseInt(e.target.value)
    return [...value[e.target.name]]
  }
  const handleChange = (e, index) => {
    setValue({ ...value, [e.target.name]: updateItem(e, index) })
    handleCall(value[e.target.name], index)
  }
  useEffect(() => {
    // console.log(value)
  })
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Assumptions</th>
            <th>Current</th>
            <th>Worst Case</th>
            <th>Base Case</th>
            <th>Best Case</th>
          </tr>
          <tr>
            <td>Revenue Growth</td>
            {value.revenue.map((value, index) => (
              <td key={index}>
                <input
                  type="number"
                  value={value}
                  name="revenue"
                  onChange={e => handleChange(e, index)}
                />
              </td>
            ))}
          </tr>
          <tr>
            <td>COGS Growth</td>
            {value.cogs.map((value, index) => (
              <td key={index}>
                <input
                  type="number"
                  value={value}
                  name="cogs"
                  onChange={e => handleChange(e, index)}
                />
              </td>
            ))}
          </tr>
          <tr>
            <td>Opex Growth</td>
            {value.opex.map((value, index) => (
              <td key={index}>
                <input
                  type="number"
                  value={value}
                  name="opex"
                  onChange={e => handleChange(e, index)}
                />
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Form
