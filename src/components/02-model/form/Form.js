//dependencies
import React from "react"

//styles
import { StyledDot, StyledTitle, StyledTable } from "./Styles.js"
import { motion } from "framer-motion"
const CaseHead = ({ text, color }) => {
  return (
    <th>
      <div>
        {text}
        <StyledDot color={color} />
      </div>
    </th>
  )
}

const TableRow = ({ rowLabel, valueName, fieldValues, handleChange }) => {
  return (
    <tr>
      <td style={{ width: "160px" }}>
        <span>{rowLabel}</span>
      </td>
      {fieldValues[valueName].map((value, index) => (
        <td key={index}>
          <input
            type="number"
            value={value}
            name={valueName}
            onChange={e => handleChange(e, index)}
            step="0.1"
          />
        </td>
      ))}
    </tr>
  )
}

const Form = ({ handleFieldValuesChange, fieldValues }) => {
  const handleChange = (e, index) => {
    handleFieldValuesChange(e, index)
  }

  return (
    <motion.div layoutId="form">
      <StyledTitle>
        <span role="img" aria-label="emoji">
          ⬇️
        </span>{" "}
        Adjust your scenarios below
      </StyledTitle>
      <StyledTable>
        <tbody>
          <tr>
            <th>Assumptions</th>
            <th style={{ width: "160px" }}>Actuals (Million)</th>
            <CaseHead text="Worst (%)" color="#F1726F" />
            <CaseHead text="Base (%)" color="#F4C686" />
            <CaseHead text="Best (%)" color="#7ABB80" />
          </tr>
          <TableRow
            rowLabel="Revenue Growth"
            valueName="revenue"
            handleChange={handleChange}
            fieldValues={fieldValues}
          />
          <TableRow
            rowLabel="COGS Growth"
            valueName="cogs"
            handleChange={handleChange}
            fieldValues={fieldValues}
          />
          <TableRow
            rowLabel="Opex Growth"
            valueName="opex"
            handleChange={handleChange}
            fieldValues={fieldValues}
          />
        </tbody>
      </StyledTable>
    </motion.div>
  )
}

export default Form
