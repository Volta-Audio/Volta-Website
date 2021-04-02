import React from "react"
import styled from "styled-components"
import { Link } from "@reach/router"
import * as arrow from "../../icons/button_arrow.png"

interface ArrowButtonProps {
  onClick?: () => void
  to?: string
}

const VoltaButton = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 32px;
  width: 103px;
  border-radius: 48px;
  background-color: ${({ theme: { colours } }) => colours.primary.lightPink};
  padding 0 40px;
  &:hover {
    background-color: ${({ theme: { colours } }) => colours.primary.hover};
  }
  &:active {
    background-color: ${({ theme: { colours } }) => colours.primary.active};
  }
  &:focus {
    border: 4px solid ${({ theme: { colours } }) => colours.primary.white};
    outline: none;
  }
`

const BorderWrapper = styled.div`
  display: flex;
  height: 38px;
  border-radius: 48px;
  width: 103px;
  align-items: center;
  background-color: ${({ theme: { colours } }) => colours.primary.lightPink};
  padding: 4px;
  &:hover {
    background-color: ${({ theme: { colours } }) => colours.primary.hover};
  }
  &:active {
    background-color: ${({ theme: { colours } }) => colours.primary.active};
  }
  &:focus {
    outline: none;
  }
`

const ArrowButton = ({ onClick, to }: ArrowButtonProps) => {
  if (!onClick && !to) return null
  const contents = <img style={{ width: "27px" }} src={arrow} />
  return onClick ? (
    <BorderWrapper>
      <VoltaButton onClick={onClick}>{contents}</VoltaButton>
    </BorderWrapper>
  ) : (
    <BorderWrapper>
      <Link to={to}>{contents}</Link>
    </BorderWrapper>
  )
}

export default ArrowButton
