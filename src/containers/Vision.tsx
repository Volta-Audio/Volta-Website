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

const Heading = styled.h2`
  grid-column: 3/10;
  text-align: left;
  margin-top: 120px;
  margin-bottom: 0;
  color: ${({ theme: { colours } }) => colours.primary.white};
`

const Sub = styled.p`
  margin-top: 0;
  text-align: left;
  grid-column: 6/10;
  color: ${({ theme: { colours } }) => colours.primary.white};
`

const HeadingTwo = styled.h3`
  grid-column: 2/6;
  text-align: left;
  color: ${({ theme: { colours } }) => colours.primary.white};
`

const SubTwo = styled(Sub)`
  grid-column: 2/6;
  margin-bottom: 184px;
`

const Vision = () => {
  return (
    <div>
      <StyledGrid>
        <Heading>Create, perform and connect in your own universe</Heading>
        <Sub>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna
        </Sub>
        <HeadingTwo>Immersive experience as a creative canvas</HeadingTwo>
        <SubTwo>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna
        </SubTwo>
      </StyledGrid>
    </div>
  )
}

export default Vision
