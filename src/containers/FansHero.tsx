import React from "react"
import styled from "styled-components"
import { VoltaGrid } from "../theme/components"
import background from "../images/Max2.jpg"

const Wrapper = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  height: 761px;
  overflow: hidden;
`

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
    <Wrapper>
      <StyledGrid>
        <ForFans>FOR FANS</ForFans>
      </StyledGrid>
    </Wrapper>
  )
}

export default FansHero
