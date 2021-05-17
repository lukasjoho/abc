import React from "react"
import styled from "styled-components"
const StyledTable = styled.div`
  width: 100%;
  border: 1px solid ${props => props.theme.colors.lightgrey};
  border-radius: 1.5rem;
  position: relative;
  overflow: scroll;

  table {
    text-align: left;
    font-size: 1.4rem;
    border-collapse: collapse;

    th {
      color: ${props => props.theme.colors.grey};
      font-weight: 400;
      text-transform: uppercase;
      font-size: 1.2rem;
      letter-spacing: 0.1rem;
      height: 4rem;
      border-bottom: 1px solid ${props => props.theme.colors.lightgrey};
      padding-left: 1.5rem;

      div {
        width: 8rem;
      }
    }
    tr {
      td {
        height: 4rem;
        border-bottom: 1px solid ${props => props.theme.colors.lightgrey};
        padding-left: 1.5rem;
      }
      &:last-child {
        td {
          border-bottom: 1px solid transparent;
        }
      }
    }
  }
`
const Table = ({ statedata, labels }) => {
  return (
    <StyledTable>
      <table>
        <tbody>
          <tr>
            <th>Scenarios</th>

            {labels.map(label => (
              <th>
                <div>{label}</div>
              </th>
            ))}
          </tr>
          <tr>
            <td>Worst</td>
            {statedata.worst.map(value => (
              <td>${value}M</td>
            ))}
          </tr>
          <tr>
            <td>Base</td>
            {statedata.base.map(value => (
              <td>${value}M</td>
            ))}
          </tr>
          <tr>
            <td>Best</td>
            {statedata.best.map(value => (
              <td>${value}M</td>
            ))}
          </tr>
        </tbody>
      </table>
    </StyledTable>
  )
}

export default Table
