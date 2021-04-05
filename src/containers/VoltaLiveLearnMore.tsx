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
  grid-column: 3/11;
  text-align: left;
  color: ${({ theme: { colours } }) => colours.primary.white};
`

const Sub = styled.p`
  margin-top: 0;
  text-align: left;
  grid-column: 7/11;
  color: ${({ theme: { colours } }) => colours.primary.white};
`

const HeadingTwo = styled.h3`
  grid-column: 1/6;
  text-align: left;
  color: ${({ theme: { colours } }) => colours.primary.white};
`

const SubTwo = styled(Sub)`
  grid-column: 1/6;
  margin-bottom: 120px;
`

const VoltaLiveLearnMore = () => {
  return (
    <div>
      <StyledGrid>
        <Heading>
          Connect and create with artists in their own immersive XR universe
        </Heading>
        <Sub>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna
        </Sub>
        <HeadingTwo>
          Create and connect with artists in their own immersive world
        </HeadingTwo>
        <SubTwo>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna
        </SubTwo>
      </StyledGrid>
    </div>
  )
}

export default VoltaLiveLearnMore
