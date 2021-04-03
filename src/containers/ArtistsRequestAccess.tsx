import TextButton from "components/Button/text-button"
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

const Heading = styled.h3`
  grid-column: 2/10;
  text-align: left;
  color: ${({ theme: { colours } }) => colours.primary.white};
`

const ButtonWrapper = styled.div`
  grid-column: 2/6;
  margin-bottom: 146px;
`

const ArtistsRequestAccess = () => {
  return (
    <div>
      <StyledGrid>
        <Heading>
          Get Volta and start creating and performing in your own universe
        </Heading>
        <ButtonWrapper>
          <TextButton text="Get Access" onClick={() => {}} />
        </ButtonWrapper>
      </StyledGrid>
    </div>
  )
}

export default ArtistsRequestAccess
