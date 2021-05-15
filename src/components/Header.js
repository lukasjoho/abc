import React from "react"
import styled from "styled-components"
import IconPlus from "src/images/icons/icon-plus.svg"
import IconSave from "src/images/icons/icon-save.svg"
import IconPlay from "src/images/icons/icon-play.svg"
import IconDots from "src/images/icons/icon-dots.svg"

import ImageAvatar1 from "src/images/image-lukas.jpg"
import ImageAvatar2 from "src/images/image-andrew.jpg"
import ImageAvatar3 from "src/images/image-laura.jpg"
import ImageAvatar4 from "src/images/image-julio.jpg"
const StyledHeader = styled.div`
  background: ${props => props.theme.colors.muted};
  height: 40px;
  width: 100vw;
  display: flex;
  align-items: center;
  border-bottom: 2px solid ${props => props.theme.colors.lightgrey};
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
const StyledAvatars = styled.div`
  display: flex;
`
const StyledToolbar = styled.div`
  display: flex;
`
const Icon = ({ icon }) => {
  return (
    <div className="icon">
      <img src={icon} alt="" />
    </div>
  )
}
const Header = () => {
  return (
    <StyledHeader>
      <StyledDots>
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
      </StyledDots>
      <StyledToolbar>
        <Icon icon={IconPlus} />
        <StyledAvatars>
          <img src={ImageAvatar1} alt="" />
          <img src={ImageAvatar2} alt="" />
          <img src={ImageAvatar3} alt="" />
          <img src={ImageAvatar4} alt="" />
        </StyledAvatars>
      </StyledToolbar>
    </StyledHeader>
  )
}

export default Header
