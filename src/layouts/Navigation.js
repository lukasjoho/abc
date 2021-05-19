import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Emoji from "react-apple-emojis"
import ImageAcme from "src/images/image-acmecorp.png"
import IconIntegrations from "src/images/icons/icon-integrations.svg"
import IconMagnifier from "src/images/icons/icon-magnifier.svg"
import IconModeling from "src/images/icons/icon-modeling.svg"
import IconMappings from "src/images/icons/icon-mappings.svg"
import IconWorkflow from "src/images/icons/icon-workflow.svg"
import IconTables from "src/images/icons/icon-tables.svg"
import IconBell from "src/images/icons/icon-bell.svg"
const StyledNavigation = styled.div`
  background: ${props => props.theme.colors.muted};
  width: 26rem;
  padding: 1.6rem;
  flex-shrink: 0;
`
const StyledNavSection = styled.div`
  margin-bottom: 2.8rem;
  h2 {
    font-weight: 500;
    color: ${props => props.theme.colors.middlegrey};
    font-size: 1.2rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    margin-bottom: 1rem;
    padding-left: 1.5rem;
  }
`
const NavSection = ({ title, children }) => {
  return (
    <StyledNavSection>
      {title && <h2>{title}</h2>}
      {children}
    </StyledNavSection>
  )
}
const StyledNavItem = styled.div`
  display: flex;
  height: 4rem;
  padding: 0 1.2rem;
  align-items: center;
  border-radius: 1rem;
  &.spaced {
    margin-bottom: 1.6rem;
  }
  &.featured {
    border: 2px dashed ${props => props.theme.colors.lightgrey};
  }
  .viz {
    width: 3rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 0.8rem;
    border-radius: 1rem;
    overflow: hidden;
    .emoji {
      width: 1.8rem;
      height: 1.8rem;
    }
    .svg {
      width: 1.8rem;
      height: 1.8rem;
    }
    img {
      width: 100%;
    }
  }

  p {
    font-weight: 400;
    color: ${props => props.theme.colors.grey};
    &.highlighted {
      color: ${props => props.theme.colors.dark};
      font-size: 1.8rem;
    }
  }
`
const NavItem = ({ icon, image, text, link, featured, svg }) => {
  return (
    <>
      {link ? (
        <Link
          to={link}
          activeClassName="activeNav"
          partiallyActive={!image ? true : false}
        >
          <StyledNavItem
            className={(image && "spaced") || (featured && "featured")}
          >
            <div className="viz">
              {icon && <Emoji className="emoji" name={icon} />}
              {svg && <img className="svg" alt="icon" src={svg} />}
              {image && <img src={image} alt="item" />}
            </div>
            <p className={image && "highlighted"}>{text}</p>
          </StyledNavItem>
        </Link>
      ) : (
        <StyledNavItem className={image && "spaced"}>
          <div className="viz">
            {icon && <Emoji className="emoji" name={icon} />}
            {svg && <img className="svg" alt="" src={svg} />}
            {image && <img src={image} alt="" />}
          </div>
          <p className={image && "highlighted"}>{text}</p>
        </StyledNavItem>
      )}
    </>
  )
}
const Navigation = () => {
  return (
    <StyledNavigation>
      <NavSection>
        <NavItem image={ImageAcme} text="Acme Corp" link="/" />
        <NavItem svg={IconMagnifier} text="Search" />
        <NavItem svg={IconBell} text="Updates" />
      </NavSection>
      <NavSection title="acme spaces">
        <NavItem icon="telescope" text="Forecasting" />
        <NavItem icon="rocket" text="Performance" />
        <NavItem
          icon="chart-increasing"
          text="Scenarios"
          link="/scenarios"
          featured
        />
      </NavSection>
      <NavSection title="shared spaces">
        <NavItem icon="money-mouth-face" text="Finance team" />
        <NavItem icon="bar-chart" text="Investor dashboard" />
      </NavSection>
      <NavSection title="private spaces">
        <NavItem icon="notebook-with-decorative-cover" text="Notes" />
      </NavSection>
      <NavSection title="settings spaces">
        <NavItem svg={IconTables} text="Tables" />
        <NavItem svg={IconWorkflow} text="Workflows" />
        <NavItem svg={IconModeling} text="Modeling" />
        <NavItem svg={IconMappings} text="Mappings" />
        <NavItem svg={IconIntegrations} text="Integrations" />
      </NavSection>
    </StyledNavigation>
  )
}

export default Navigation
