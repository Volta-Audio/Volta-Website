import React, { ReactElement } from "react"
import styled from "styled-components"

interface GridProps {
  children: ReactElement | ReactElement[]
}

const VoltaGrid = styled.div`
  margin: 0 auto;
  ${({ theme: { breakpoints } }) => breakpoints.desktop} {
    display: grid;
    width: 1110px;
    grid-template-columns: repeat(12, 65px);
    gap: 30px;
  }
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    padding: ${({ theme: { spacing } }) => spacing.small};
    padding-bottom: 0;
  }
`

const Grid = ({ children }: GridProps) => {
  return (
    <div>
      <VoltaGrid>{children}</VoltaGrid>
    </div>
  )
}

export default Grid
