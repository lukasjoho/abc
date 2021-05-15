import React, { useEffect, useState } from "react"

const Form = ({ handleFieldValuesChange, fieldValues }) => {
  const handleChange = (e, index) => {
    handleFieldValuesChange(e, index)
  }

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
            {fieldValues.revenue.map((value, index) => (
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
            {fieldValues.cogs.map((value, index) => (
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
            {fieldValues.opex.map((value, index) => (
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
