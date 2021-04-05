import React from "react"
import styled from "styled-components"
import hero from "../videos/hero.mp4"

const Wrapper = styled.div`
  height: 822px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;

  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    height: 805px;
  }
`

const Inner = styled.div`
  width: 779px;
  text-align: left;
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    width: 100vw;
  }
`

const Video = styled.video`
  ${({ theme: { breakpoints } }) => breakpoints.desktop} {
    width: 779px;
  }
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    height: 423px;
  }
`

const VideoWrapper = styled.div`
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    display: grid;
    grid-template-columns: auto;
    align-items: center;
    justify-content: center;
  }
`

const H4 = styled.h4`
  color: ${({ theme: { colours } }) => colours.primary.white};
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    padding: 0 32px;
    align-self: left;
  }
`

const TopText = styled(H4)`
  margin-top: 120px;
  margin-bottom: 32px;
`
const MiddleText = styled(H4)`
  margin-top: 32px;
  margin-bottom: 12px;
`
const BottomText = styled(H4)`
  margin-top: 0;
`

const UpcomingEvents = () => {
  return (
    <Wrapper>
      <Inner>
        <TopText>Upcoming events</TopText>
      </Inner>
      <VideoWrapper>
        <Video autoPlay={true} loop={true} muted={true}>
          <source src={hero} type="video/mp4" />
        </Video>
      </VideoWrapper>
      <Inner>
        <MiddleText>Event title</MiddleText>
        <BottomText>Two lines of text</BottomText>
      </Inner>
    </Wrapper>
  )
}

export default UpcomingEvents
