import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
html{
  font-size: 62.5%;
  -webkit-tap-highlight-color: transparent;
  body{
    font-size: 1.6rem;
    font-family: "Helvetica";
    margin: 0;
    color: ${props => props.theme.colors.dark};
  }
}

`
export default GlobalStyle
