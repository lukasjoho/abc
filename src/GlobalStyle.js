import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
html{
  font-size: 62.5%;
  -webkit-tap-highlight-color: transparent;
  *{
    box-sizing: border-box;
  }
  body{
    font-size: 1.6rem;
    font-family: "Inter";
    margin: 0;
    color: ${props => props.theme.colors.dark};
    h1, h2,h3,h4,h5,h6{
      margin: 0;
    }
    p{
      margin: 0;
      line-height: 1.5;
    }
     a{
      text-decoration: none;
      color: inherit;
    }
    .activeNav{
      >*{
        background: #E5E7E9;
        p{
          color: ${props => props.theme.colors.dark};
        }
      }
    
    }
   
  }
  
}

`
export default GlobalStyle
