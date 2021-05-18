import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

export const StyledChart = styled(motion.div)`
  margin-bottom: 4rem;
  max-width: 800px;
  display: flex;
  flex-direction: column;
`
export const StyledSwitch = styled.div`
  align-self: flex-end;
  margin-bottom: 2rem;
  button {
    all: unset;
    padding: 0rem 0.5rem;
    font-weight: 500;
    color: ${props => props.theme.colors.middlegrey};
    font-size: 1.2rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    margin-bottom: ${props => props.mb};
    border-radius: 0.5rem;
    cursor: pointer;
    transition: 0.15s ease;
    &.active {
      color: ${props => props.theme.colors.dark};
    }
  }
`
export const StyledSwitchLarge = styled.div`
  align-self: flex-start;
  margin-bottom: 2rem;
  margin-top: 2rem;
  button {
    all: unset;
    padding: 1rem 1.5rem;
    font-weight: 500;
    color: ${props => props.theme.colors.middlegrey};
    font-size: 1.2rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    margin-bottom: ${props => props.mb};
    border-radius: 0.5rem;
    cursor: pointer;
    transition: 0.15s ease;
    &.active {
      background: ${props => props.theme.colors.lightgrey};
      color: ${props => props.theme.colors.dark};
    }
  }
`
