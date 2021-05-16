import React from "react"
import { ThemeProvider } from "styled-components"

const theme = {
  colors: {
    dark: "#141719",
    muted: "#F7F8F8",
    lightgrey: "#E8EAEC",
    grey: "#707880",
    middlegrey: "#C2C7CC",
    green: "#7EA095",
    blue: "#426C8D",
    yellow: "#FDF9EC",
  },
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme
