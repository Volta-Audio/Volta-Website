import React from "react"
import styled from "styled-components"
import { VoltaGrid } from "../theme/components"
import background from "../images/Max2.jpg"

const Wrapper = styled.div`
  text-align: right;
  padding-top: 120px;
`

const StyledGrid = styled(VoltaGrid)`
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    padding: ${({ theme: { spacing } }) => spacing.small};
    padding-bottom: 0;
    display: flex;
    flex-direction: column;
  }
`

const Heading = styled.h3`
  grid-column: 2/6;
  text-align: left;
  margin-top: 64px;
  color: ${({ theme: { colours } }) => colours.primary.white};
`

const Sub = styled.p`
  margin-top: 0;
  text-align: left;
  grid-column: 2/6;
  color: ${({ theme: { colours } }) => colours.primary.white};
`

const Image = styled.img`
  width: 90%;
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    width: calc(100% - 32px);
  }
`

const ArtistsLearnMore = () => {
  return (
    <Wrapper>
      <Image src={background} />
      <StyledGrid>
        <Heading>Tools that enable an artist to just plug and play</Heading>
        <Sub>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna
        </Sub>
      </StyledGrid>
    </Wrapper>
  )
}

export default ArtistsLearnMore
