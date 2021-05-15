import * as React from "react"
import PropTypes from "prop-types"
import Navigation from "../components/Navigation"
import Sidebar from "../components/Sidebar"
import Theme from "src/Theme"
import GlobalStyle from "src/GlobalStyle"
import styled from "styled-components"
import Header from "../components/header"
const StyledLayout = styled.div`
  display: flex;
  width: 100vw;
  min-height: 100%;
  .grow {
    flex-grow: 1;
  }
`
const Layout = ({ children }) => {
  return (
    <>
      <Theme>
        <GlobalStyle />
        <Header />
        <StyledLayout>
          <Navigation />
          <div className="grow">{children}</div>
          <Sidebar />
        </StyledLayout>
      </Theme>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
