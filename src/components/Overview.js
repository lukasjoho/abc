import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import ImageModel1 from "src/images/image-model1.jpg"
import ImageLukas from "src/images/image-lukas.jpg"
import IconGraph from "src/images/icons/icon-graph.svg"
const StyledOverview = styled.div`
  display: flex;
  > * {
    margin-right: 5rem;
    &:last-child {
      margin-right: 0rem;
    }
  }
`
const StyledModelItem = styled.div`
  border: 1px solid ${props => props.theme.colors.lightgrey};
  border-radius: 1.5rem;
  width: 300px;
  overflow: hidden;
  transition: 0.15s ease;
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
const ModelItem = ({ avatar, image, title, updated, newItem }) => {
  return (
    <>
      {image && (
        <Link to="/model-1">
          <StyledModelItem className={newItem ? "new" : "content"}>
            <>
              <img src={image} alt="" width="100%" />
              <div className="footer">
                <div className="avatar">
                  <img src={avatar} alt="" width="100%" />
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
        <StyledModelItem className={newItem ? "new" : "content"}>
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
  return (
    <StyledOverview>
      <ModelItem
        image={ImageModel1}
        avatar={ImageLukas}
        title="EBITDA Growth Model"
        updated="17h ago"
      />
      <ModelItem newItem />
    </StyledOverview>
  )
}

export default Overview
