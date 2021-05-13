import * as React from "react"
import PropTypes from "prop-types"
import Sidebar from "../components/Sidebar"
import Theme from "src/Theme"
import GlobalStyle from "src/GlobalStyle"

const Layout = ({ children }) => {
  return (
    <>
      <Theme>
        <GlobalStyle />
        <div>
          <Sidebar />
          {children}
        </div>
      </Theme>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
