import InputField from "components/input-field"
import React from "react"
import styled from "styled-components"
import { VoltaGrid } from "../theme/components"

const Wrapper = styled.div`
  background-color: ${({ theme: { colours } }) => colours.secondary.darkGrey};
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    background-color: ${({ theme: { colours } }) => colours.primary.black};
  }
`

const StyledGrid = styled(VoltaGrid)`
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    padding: ${({ theme: { spacing } }) => spacing.small};
    padding-bottom: 0;
    display: flex;
    flex-direction: column;
  }
`

const Header = styled.h4`
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
  background-color: ${({ theme: { colours } }) => colours.secondary.darkGrey};
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    background-color: ${({ theme: { colours } }) => colours.primary.black};
  }
`

const InputWrapper = styled.div`
  grid-column: 2/12;
  margin-bottom: 128px;
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    margin-bottom: 120px;
  }
`

const NewsletterSignup = () => {
  return (
    <Wrapper>
      <StyledGrid>
        <Header>Connect with Volta</Header>
        <Sub>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut
        </Sub>
        <InputWrapper>
          <InputField placeholder="Please enter your email" />
        </InputWrapper>
      </StyledGrid>
    </Wrapper>
  )
}

export default NewsletterSignup
