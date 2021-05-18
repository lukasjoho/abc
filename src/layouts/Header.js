//dependencies
import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"

//assets
import IconPlus from "src/images/icons/icon-plus.svg"
import IconSave from "src/images/icons/icon-save.svg"
import IconPlay from "src/images/icons/icon-play.svg"
import IconDots from "src/images/icons/icon-dots.svg"
import IconArrow from "src/images/icons/icon-arrow.svg"

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
  .avatar {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 100%;
    overflow: hidden;
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

const Header = () => {
  const {
    imageAvatar1,
    imageAvatar2,
    imageAvatar3,
    imageAvatar4,
  } = useStaticQuery(graphql`
    query {
      imageAvatar1: file(relativePath: { eq: "image-lukas.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 40
            placeholder: BLURRED
            formats: [AUTO, WEBP]
            quality: 80
          )
        }
      }
      imageAvatar2: file(relativePath: { eq: "image-andrew.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 40
            placeholder: BLURRED
            formats: [AUTO, WEBP]
            quality: 80
          )
        }
      }
      imageAvatar3: file(relativePath: { eq: "image-laura.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 40
            placeholder: BLURRED
            formats: [AUTO, WEBP]
            quality: 80
          )
        }
      }
      imageAvatar4: file(relativePath: { eq: "image-julio.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 40
            placeholder: BLURRED
            formats: [AUTO, WEBP]
            quality: 80
          )
        }
      }
    }
  `)
  return (
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
          <div className="avatar">
            <GatsbyImage
              image={getImage(imageAvatar1.childImageSharp.gatsbyImageData)}
            />
          </div>
          <div className="avatar">
            <GatsbyImage
              image={getImage(imageAvatar2.childImageSharp.gatsbyImageData)}
            />
          </div>
          <div className="avatar">
            <GatsbyImage
              image={getImage(imageAvatar3.childImageSharp.gatsbyImageData)}
            />
          </div>
          <div className="avatar">
            <GatsbyImage
              image={getImage(imageAvatar4.childImageSharp.gatsbyImageData)}
            />
          </div>
        </StyledAvatars>
        <Icon icon={IconSave} />
        <Icon icon={IconPlay} />
        <Icon icon={IconDots} />
      </StyledToolbar>
    </StyledTop>
  )
}

export default Header
