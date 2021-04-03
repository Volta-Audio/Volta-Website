import React from "react"
import styled from "styled-components"
import { VoltaGrid } from "../theme/components"

const StyledGrid = styled(VoltaGrid)`
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    padding: ${({ theme: { spacing } }) => spacing.small};
    padding-bottom: 0;
    display: flex;
    flex-direction: column;
  }
`

const ForFans = styled.h1`
  color: white;
  align-self: center;
  grid-column: 4/10;
  vertical-align: middle;
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    margin-top: 240px;
  }
`

const FansHero = () => {
  return (
    <div>
      <StyledGrid>
        <ForFans>FOR FANS</ForFans>
      </StyledGrid>
    </div>
  )
}

export default FansHero
