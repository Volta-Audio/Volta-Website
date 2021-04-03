import React from "react"
import styled from "styled-components"
import hero from "../videos/hero.mp4"
import circleIcon from "../icons/circlevolta.png"
import { VoltaGrid } from "../theme/components"

const StyledGrid = styled(VoltaGrid)`
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    padding: ${({ theme: { spacing } }) => spacing.small};
    padding-bottom: 0;
    display: flex;
    flex-direction: column;
  }
`

const Video = styled.video`
  z-index: -1;
  overflow: hidden;
  ${({ theme: { breakpoints } }) => breakpoints.desktop} {
    width: 100%;
    position: fixed:
  }
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    position: absolute;
    right: 0;
    bottom: -25%;
    min-width: 100%;
    min-height: 100%;
    transform: translateX(calc((100% - 100vw) / 2));
  }
`

const CircleIcon = styled.img`
  margin-top: 56px;
  height: 56px;
  width: 56px;
  grid-column: 1/3;
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    margin-top: 32px;
  }
`

const Wrapper = styled.div`
  position: relative;
  height: auto,
  overflow: hidden;
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    overflow: hidden;
    height: 726px;
  }
`

const VoltaLogo = styled.h1`
  font-family: "SharpGrotesk-Bold25";
  font-size: 72px;
  line-height: 40px;
  letter-spacing: 1;
  color: white;
  align-self: center;
  grid-column: 5/9;
  vertical-align: middle;
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    margin-top: 240px;
  }
`

const ContentOverlay = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const Hero = () => {
  return (
    <Wrapper>
      <Video autoPlay={true} loop={true} muted={true}>
        <source src={hero} type="video/mp4" />
      </Video>
      <ContentOverlay>
        <StyledGrid>
          <CircleIcon src={circleIcon} alt="Volta" />
          <VoltaLogo>VOLTA</VoltaLogo>
        </StyledGrid>
      </ContentOverlay>
    </Wrapper>
  )
}

export default Hero
