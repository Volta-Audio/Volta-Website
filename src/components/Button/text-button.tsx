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
    <VoltaButton
      onClick={onClick}
      role="button"
      aria-pressed="true"
      tabIndex={0}
    >
      {contents}
    </VoltaButton>
  ) : (
    <Link to={to}>{contents}</Link>
  )
}

export default TextButton
