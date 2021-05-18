//dependencies
import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

//utils
import Theme from "src/Theme"
import GetWindowDimensions from "src/utils/_getWindowDimensions.js"
import GlobalStyle from "src/GlobalStyle"

//components
import Navigation from "./Navigation"
import Sidebar from "./Sidebar"
import Button from "src/components/00-shared/Button"
import Header from "./Header"

const StyledLayout = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: none;

  .body {
    display: flex;
    flex-grow: 1;

    .inner {
      flex-grow: 1;
      padding: 5.5rem;
      min-width: 600px;
    }
  }
  @media (min-width: 960px) {
    display: flex;
    flex-direction: column;
  }
`
const StyledMobile = styled.div`
  padding: 3rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  @media (min-width: 960px) {
    display: none;
  }
  h1 {
    font-size: 3rem;
    line-height: 4.5rem;
    margin-bottom: 3rem;
  }
`

const Layout = ({ children }) => {
  const { windowWidth } = GetWindowDimensions()
  const isDesktop = windowWidth >= 960
  return (
    <>
      <Theme>
        <GlobalStyle />

        <StyledLayout>
          <Header />
          <div className="body">
            <Navigation />
            <div className="inner">{children}</div>
            <Sidebar />
          </div>
        </StyledLayout>

        <StyledMobile>
          <h1>
            We are not yet on mobile. <br />
            Visit our website instead.
          </h1>
          <Button text="Our Website" href="https://abacum.io" />
        </StyledMobile>
      </Theme>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
