import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

import IconGraph from "src/images/icons/icon-graph.svg"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import { motion } from "framer-motion"
const StyledOverview = styled.div`
  display: flex;
  > * {
    margin-right: 5rem;
    &:last-child {
      margin-right: 0rem;
    }
  }
`
const StyledModelItem = styled(motion.div)`
  border: 1px solid ${props => props.theme.colors.lightgrey};
  border-radius: 1.5rem;
  width: 280px;
  overflow: hidden;
  transition: 0.15s ease;
  flex-shrink: 0;
  &.new {
    border: 2px dashed ${props => props.theme.colors.lightgrey};
    display: flex;
    justify-content: center;
    align-items: center;

    .innerContent {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: ${props => props.theme.colors.middlegrey};
      img {
        width: 4rem;
        margin-bottom: 1.5rem;
      }
      h2 {
        font-weight: 500;
        font-size: 2rem;
      }
    }
  }
  &.content {
    &:hover {
      border: 1px solid ${props => props.theme.colors.middlegrey};
    }
    .footer {
      width: 100%;
      background: ${props => props.theme.colors.muted};
      display: flex;
      padding: 1.5rem 1rem;
      align-items: center;
      .avatar {
        width: 3rem;
        height: 3rem;
        border-radius: 100%;
        overflow: hidden;
        margin-right: 0.8rem;
      }
      .info {
        h2 {
          font-size: 1.6rem;
          font-weight: 500;
        }
        h3 {
          font-weight: 500;
          color: ${props => props.theme.colors.middlegrey};
          font-size: 1.2rem;
          letter-spacing: 0rem;
        }
      }
    }
  }
`
const variants = {
  hidden: { scale: 0.9 },
  visible: { scale: 1 },
}

const ModelItem = ({ avatar, image, title, updated, newItem, delay }) => {
  return (
    <>
      {image && (
        <Link to="/scenarios/model-1">
          <StyledModelItem
            className={newItem ? "new" : "content"}
            initial="hidden"
            animate="visible"
            transition={{ type: "spring", delay: delay }}
            variants={variants}
          >
            <>
              <GatsbyImage image={getImage(image)} />
              <div className="footer">
                <div className="avatar">
                  <GatsbyImage image={getImage(avatar)} />
                </div>
                <div className="info">
                  <h2>{title}</h2>
                  <h3>{updated}</h3>
                </div>
              </div>
            </>
          </StyledModelItem>
        </Link>
      )}
      {newItem && (
        <StyledModelItem
          className={newItem ? "new" : "content"}
          initial="hidden"
          animate="visible"
          transition={{ type: "spring", delay: delay }}
          variants={variants}
        >
          <div className="innerContent">
            <img src={IconGraph} alt="" />
            <h2>Create new model</h2>
          </div>
        </StyledModelItem>
      )}
    </>
  )
}
const Overview = ({ text }) => {
  const { imageLukas, imageModel1 } = useStaticQuery(graphql`
    query {
      imageLukas: file(relativePath: { eq: "image-lukas.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 40
            placeholder: BLURRED
            formats: [AUTO, WEBP]
            quality: 80
          )
        }
      }
      imageModel1: file(relativePath: { eq: "image-model1.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 300
            placeholder: BLURRED
            formats: [AUTO, WEBP]
            quality: 80
          )
        }
      }
    }
  `)
  return (
    <StyledOverview>
      <ModelItem
        image={imageModel1.childImageSharp.gatsbyImageData}
        avatar={imageLukas.childImageSharp.gatsbyImageData}
        title="EBITDA Growth Model"
        updated="17h ago"
        delay={0}
      />
      <ModelItem newItem delay={0.1} />
    </StyledOverview>
  )
}

export default Overview
