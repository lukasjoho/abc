//dependencies
import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"

//assets
import styled from "styled-components"
import Badge from "../components/00-shared/Badge"
import Upper from "src/components/00-shared/Upper"

const StyledSidebar = styled.div`
  width: 32rem;
  border-left: 1px solid ${props => props.theme.colors.lightgrey};
  flex-shrink: 0;
  background: white;
  .nav {
    display: flex;
    height: 4.5rem;
    .navitem {
      margin-right: 1rem;
      position: relative;
      height: 100%;
      display: flex;
      align-items: center;

      p {
        font-weight: 500;
        color: ${props => props.theme.colors.middlegrey};
        &.active {
          color: ${props => props.theme.colors.dark};
        }
      }
      div.active {
        height: 2px;
        background: ${props => props.theme.colors.dark};
        width: 100%;
        position: absolute;
        bottom: 0;
      }
    }
  }
`
const SidebarContainer = styled.div`
  padding: ${props => (props.nopb ? "0 1.6rem 0 1.6rem" : "1.6rem")};
  border-bottom: 1px solid ${props => props.theme.colors.lightgrey};
`

const StyledComment = styled.div`
  display: flex;
  margin-bottom: 3rem;
  &:last-child {
    margin-bottom: 1rem;
  }
  .person {
    margin-right: 1.7rem;
    width: 3rem;
    height: 3rem;
    flex-shrink: 0;
    img {
      width: 100%;
      border-radius: 100%;
      height: 100%;
    }
  }
  .message {
    .info {
      line-height: 2.5rem;
      margin-bottom: 0rem;
      color: ${props => props.theme.colors.grey};
      font-size: 1.5rem;
    }
    .text {
      span {
        color: ${props => props.theme.colors.blue};
      }
    }
  }
`
const Comment = ({ image, name, time, text }) => {
  return (
    <StyledComment>
      <div className="person">
        <GatsbyImage image={getImage(image)} />
      </div>
      <div className="message">
        <p className="info">{`${name}, ${time} ago`}</p>
        <p className="text">{text}</p>
      </div>
    </StyledComment>
  )
}
const NavItem = ({ text, active }) => {
  return (
    <div className="navitem">
      <p className={active && "active"}>{text}</p>
      <div className={active && "active"} />
    </div>
  )
}
const Sidebar = () => {
  const { imageAvatar1, imageAvatar2 } = useStaticQuery(graphql`
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
    }
  `)
  return (
    <StyledSidebar>
      <SidebarContainer>
        <Upper text="news box" mb="1rem" />
        <Badge
          text="Thanks for trying out our new feature! As we strive to constantly
        improve our product, we would appreciate your feedback! It takes no more than 3 minutes."
          link="https://www.google.com"
        />
      </SidebarContainer>
      <SidebarContainer nopb>
        <div className="nav">
          <NavItem text="Comments" active />
          <NavItem text="Activity" />
          <NavItem text="Settings" />
        </div>
      </SidebarContainer>
      <SidebarContainer>
        <Upper text="conversation" mb="2rem" />
        <Comment
          image={imageAvatar1.childImageSharp.gatsbyImageData}
          name="Lukas"
          time="29 min"
          text={<>I would love to! 🔥</>}
        />
        <Comment
          image={imageAvatar2.childImageSharp.gatsbyImageData}
          name="Andrew"
          time="30 min"
          text={
            <>
              Looks good <span>@Lukas</span>. Would you like to join Abacum?
            </>
          }
        />
        <Comment
          image={imageAvatar1.childImageSharp.gatsbyImageData}
          name="Lukas"
          time="1 hour"
          text={
            <>
              Hey <span>@here</span>, I added the first scenario model. Feel
              free to play around with the numbers!
            </>
          }
        />
      </SidebarContainer>
    </StyledSidebar>
  )
}

export default Sidebar
