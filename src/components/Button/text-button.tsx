import React from "react"
import styled from "styled-components"
import { Link } from "@reach/router"
import * as arrow from "../../icons/button_arrow.png"

interface TextButtonProps {
  text: string
  onClick?: () => void
  to?: string
}

const VoltaButton = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  height: 72px;
  border-radius: 40px;
  color: ${({ theme: { colours } }) => colours.primary.white};
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
  grid-column-start: 3;
  grid-column-end: 7;
  height: 78px;
  border-radius: 52px;
  align-items: center;
  background-color: ${({ theme: { colours } }) => colours.primary.lightPink};
  padding: 4px;
  &:hover {
    background-color: ${({ theme: { colours } }) => colours.primary.hover};
  }
  &:active {
    background-color: ${({ theme: { colours } }) => colours.primary.active};
  }
`

const TextButton = ({ onClick, text, to }: TextButtonProps) => {
  if (!onClick && !to) return null
  const contents = (
    <>
      <h4>{text}</h4>
      <img style={{ width: "27px" }} src={arrow} />
    </>
  )
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

export default TextButton
