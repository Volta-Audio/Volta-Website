import React from "react"
import SignupInput from "components/SignupInput"
import styled from "styled-components"
import { VoltaGrid } from "../theme/components"
import background from "../images/Max2.jpg"

const Wrapper = styled.div`
  text-align: left;
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
  grid-column: 2/10;
  text-align: left;
  color: ${({ theme: { colours } }) => colours.primary.white};
`

const InputWrapper = styled.div`
  grid-column: 2/12;
  margin-bottom: 128px;
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    margin-bottom: 120px;
  }
`

const HeaderTwo = styled.h4`
  color: white;
  text-align: left;
  grid-column: 2/5;
  margin-top: 112px;
  margin-bottom: 0;
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
  }
`

const Sub = styled.body`
  color: white;
  text-align: left;
  grid-column: 2/10;
  font-size: ${({ theme: { text } }) => text.smallFont};
  line-height: ${({ theme: { text } }) => text.smallLineHeight};
`

const Image = styled.img`
  width: 65%;
  margin-top: 102px;
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    width: calc(100% - 32px);
  }
`

const ArtistsRequestAccess = () => {
  return (
    <Wrapper>
      <Image src={background} />
      <StyledGrid>
        <Heading>
          Get Volta and start creating and performing in your own universe
        </Heading>
        <HeaderTwo>Request Access</HeaderTwo>
        <Sub>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut
        </Sub>
        <InputWrapper>
          <SignupInput />
        </InputWrapper>
      </StyledGrid>
    </Wrapper>
  )
}

export default ArtistsRequestAccess
