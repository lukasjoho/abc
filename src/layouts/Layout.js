import * as React from "react"
import PropTypes from "prop-types"
import Navigation from "../components/Navigation"
import Sidebar from "../components/Sidebar"
import Theme from "src/Theme"
import GlobalStyle from "src/GlobalStyle"
import styled from "styled-components"
import Top from "../components/top"
import Header from "../components/header"

import IconPlus from "src/images/icons/icon-plus.svg"
import IconSave from "src/images/icons/icon-save.svg"
import IconPlay from "src/images/icons/icon-play.svg"
import IconDots from "src/images/icons/icon-dots.svg"
import IconArrow from "src/images/icons/icon-arrow.svg"

import ImageAvatar1 from "src/images/image-lukas.jpg"
import ImageAvatar2 from "src/images/image-andrew.jpg"
import ImageAvatar3 from "src/images/image-laura.jpg"
import ImageAvatar4 from "src/images/image-julio.jpg"
const StyledLayout = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  .body {
    display: flex;
    flex-grow: 1;
    .inner {
      flex-grow: 1;
      padding: 5.5rem;
    }
  }
`
const StyledTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 5rem;
  background: ${props => props.theme.colors.muted};
  border-bottom: 1px solid ${props => props.theme.colors.lightgrey};
  padding: 0 2rem;
`
const StyledDots = styled.div`
  display: flex;
  .dot {
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 100%;
    margin-right: 0.5rem;
    &:nth-child(1) {
      background: #ed6a5e;
    }
    &:nth-child(2) {
      background: #f5bf50;
    }
    &:nth-child(3) {
      background: #62c554;
      margin-right: 0;
    }
  }
`
const StyledRouting = styled.div``
const StyledAvatars = styled.div`
  display: flex;
  margin-left: 1rem;
  img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 100%;
    &:nth-child(1) {
      z-index: 4;
    }
    &:nth-child(2) {
      z-index: 3;
      margin-left: -0.5rem;
    }
    &:nth-child(3) {
      z-index: 2;
      margin-left: -0.5rem;
    }
    &:nth-child(4) {
      z-index: 1;
      margin-left: -0.5rem;
    }
  }
`
const StyledToolbar = styled.div`
  display: flex;
  align-items: center;
  .icon {
    height: 2rem;
    margin-left: 2.5rem;
  }
`

const Icon = ({ icon }) => {
  return (
    <div className="icon">
      <img src={icon} alt="" height="100%" />
    </div>
  )
}
const Layout = ({ children }) => {
  return (
    <>
      <Theme>
        <GlobalStyle />

        <StyledLayout>
          <StyledTop>
            <StyledDots>
              <div className="dot" />
              <div className="dot" />
              <div className="dot" />
            </StyledDots>
            <StyledRouting>
              <img src={IconArrow} alt="" />
            </StyledRouting>
            <StyledToolbar>
              <Icon icon={IconPlus} />
              <StyledAvatars>
                <img src={ImageAvatar1} alt="" />
                <img src={ImageAvatar2} alt="" />
                <img src={ImageAvatar3} alt="" />
                <img src={ImageAvatar4} alt="" />
              </StyledAvatars>
              <Icon icon={IconSave} />
              <Icon icon={IconPlay} />
              <Icon icon={IconDots} />
            </StyledToolbar>
          </StyledTop>
          <div className="body">
            <Navigation />
            <div className="inner">{children}</div>
            <Sidebar />
          </div>
        </StyledLayout>
      </Theme>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
