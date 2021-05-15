import React from "react"
import { ThemeProvider } from "styled-components"

const theme = {
  colors: {
    dark: "#141719",
    muted: "#F7F8F8",
    lightgrey: "#E8EAEC",
  },
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme
