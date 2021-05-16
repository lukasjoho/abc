import React, { useEffect, useState } from "react"
import styled from "styled-components"
const StyledDot = styled.div`
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 100%;
  background: ${props => props.color};
  margin-left: 0.5rem;
  flex-shrink: 0;
`
const StyledTable = styled.table`
  border-collapse: collapse;
  border: none;
  color: ${props => props.theme.colors.grey};
  width: 100%;
  td,
  th {
    border: 1px solid ${props => props.theme.colors.lightgrey};

    padding: 0;
    height: 4rem;
    text-align: left;
  }
  td {
    &:first-child {
      color: ${props => props.theme.colors.dark};
      padding: 0 1rem;
      border-left: none;
      span {
        width: 10rem;
      }
    }
  }
  tr:first-child th {
    border-top: none;
  }
  tr:last-child td:first-child {
    border-bottom: none;
  }
  th {
    font-weight: 400;
    text-transform: uppercase;
    font-size: 1.2rem;
    letter-spacing: 0.1rem;
    padding: 0 1rem;
    &:first-child {
      border-left: none;
    }
    &:last-child {
      border-right: none;
    }
    > div {
      display: flex;
      align-items: center;
    }
  }
  input {
    color: ${props => props.theme.colors.dark};
    background: ${props => props.theme.colors.yellow};
    height: 4rem;
    border: none;
    outline: none;
    font-family: "Inter";
    padding: 0;

    transition: 0.3s ease;
    padding: 0 1rem;
    width: 100%;
    font-size: 1.6rem;
    &:hover {
      border-radius: 1rem;

      box-shadow: 0px 0px 6px ${props => `${props.theme.colors.grey}60`};
      transform: scale(1.01);
      background: ${props => props.theme.colors.yellow};
    }
    &:focus {
      border-radius: 1rem;

      box-shadow: 0px 0px 12px ${props => `${props.theme.colors.grey}60`};
      transform: scale(1.03);
      background: ${props => props.theme.colors.yellow};
    }
  }
`
const Form = ({ handleFieldValuesChange, fieldValues }) => {
  console.log("Fieldvalues", fieldValues)
  const handleChange = (e, index) => {
    handleFieldValuesChange(e, index)
  }

  return (
    <div>
      <StyledTable>
        <tbody>
          <tr>
            <th>Assumptions</th>
            <th style={{ width: "160px" }}>Actuals (Million)</th>
            <th>
              <div>
                Worst (%)
                <StyledDot color="#F1726F" />
              </div>
            </th>
            <th>
              <div>
                Base (%)
                <StyledDot color="#F4C686" />
              </div>
            </th>
            <th>
              <div>
                Best (%)
                <StyledDot color="#7ABB80" />
              </div>
            </th>
          </tr>
          <tr>
            <td style={{ width: "160px" }}>
              <span>Revenue Growth</span>
            </td>
            {fieldValues.revenue.map((value, index) => (
              <td key={index}>
                <input
                  type="number"
                  value={value}
                  name="revenue"
                  onChange={e => handleChange(e, index)}
                  step="0.1"
                />
              </td>
            ))}
          </tr>
          <tr>
            <td>
              <span>COGS Growth</span>
            </td>
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
            <td>
              <span>Opex Growth</span>
            </td>
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
      </StyledTable>
    </div>
  )
}

export default Form
