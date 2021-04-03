import React from "react"
import styled from "styled-components"
// import { VoltaGrid } from "../theme/components"
import oculus from "../icons/oculus_logo.png"
import TextButton from "components/Button/text-button"

const Wrapper = styled.div`
  background-color: ${({ theme: { colours } }) => colours.primary.white};
  padding-bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    padding: 32px;
  }
`

const OculusLogo = styled.img`
  width: 201px;
`

const Heading = styled.h3`
  width: 480px;
  margin-bottom: ${({ theme: { spacing } }) => spacing.small};
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    width: auto;
  }
`

const Sub = styled.p`
  margin-top: 0;
  grid-column: 4/9;
  width: 450px;
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    width: auto;
  }
`

const ButtonWrapper = styled.div`
  margin-bottom: 158px;
  margin-top: 42px;
  width: 419px;
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    margin-bottom: 146px;
    width: 250px;
  }
`

const DesktopButtonWrapper = styled(ButtonWrapper)`
  display: block;
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    display: none;
  }
`

const MobileButtonWrapper = styled(ButtonWrapper)`
  display: none;
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    display: block;
  }
`

const OculusDownload = () => {
  return (
    <Wrapper>
      <OculusLogo src={oculus} alt="Oculus logo" />
      <Heading>Download Volta Live in the Oculus Store</Heading>
      <Sub>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna
      </Sub>
      <DesktopButtonWrapper>
        <TextButton text="Download Volta Live" to="/home" />
      </DesktopButtonWrapper>
      <MobileButtonWrapper>
        <TextButton text="Download" to="/home" />
      </MobileButtonWrapper>
    </Wrapper>
  )
}

export default OculusDownload
