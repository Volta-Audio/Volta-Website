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

const ForArtists = styled.h1`
  color: white;
  align-self: center;
  grid-column: 4/10;
  vertical-align: middle;
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    margin-top: 240px;
  }
`

const ArtistsHero = () => {
  return (
    <div>
      <StyledGrid>
        <ForArtists>FOR ARTISTS</ForArtists>
      </StyledGrid>
    </div>
  )
}

export default ArtistsHero
