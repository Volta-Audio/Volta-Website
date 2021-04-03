import React from "react"
import styled from "styled-components"
import * as logo from "../icons/VOLTA.png"
import * as twitter from "../icons/twitter.png"
import * as facebook from "../icons/facebook.png"
import * as google from "../icons/google.png"
import * as insta from "../icons/insta.png"
import Grid from "./grid"

const Container = styled.div`
  text-align: center;
  background-color: ${({ theme: { colours } }) => colours.primary.black};
  height: 200px;
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    height: 258px;
    display: flex;
    align-items: center;
  }
`

const Logo = styled.img`
  grid-column-start: 1;
  grid-column-end: 3;
  align-self: center;
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    margin-top: 20px;
  }
`

const SocialA = styled.a`
  padding-left: 30px;
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    padding-left: 0;
  }
`

const SocialIcon = styled.img`
  height: 18px;
`

const SocialWrapper = styled.div`
  align-self: center;
  display: flex;
  ${({ theme: { breakpoints } }) => breakpoints.desktop} {
    grid-column-end: 13;
    grid-column-start: 9;
    justify-self: end;
  }
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    width: 150px;
    justify-content: space-between;
    margin: 0 auto;
    padding: 0;
    order: 2;
  }
`

const Copyright = styled.p`
  font-size: ${({ theme: { text } }) => text.smallFont};
  line-height: ${({ theme: { text } }) => text.smallLineHeight};
  color: ${({ theme: { colours } }) => colours.secondary.grey};
  grid-column-start: 5;
  grid-column-end: 8;
  align-self: end;
  margin-bottom: 26px;
  ${({ theme: { breakpoints } }) => breakpoints.mobile} {
    order: 3;
    margin-top: 0;
    margin-bottom: 20px;
  }
`

const SocialGroup = () => {
  return (
    <SocialWrapper>
      <SocialLink src={twitter} href="https://twitter.com/experiencevolta" />
      <SocialLink
        src={facebook}
        href="https://www.facebook.com/ExperienceVolta/"
      />
      <SocialLink src={google} href="" />
      <SocialLink
        src={insta}
        href="https://www.instagram.com/experiencevolta"
      />
    </SocialWrapper>
  )
}

const SocialLink = ({ src, href }: { src: string; href: string }) => {
  return (
    <SocialA href={href}>
      <SocialIcon src={src} />
    </SocialA>
  )
}

const Footer = () => {
  return (
    <Container>
      <Grid>
        <Logo src={logo} />
        <Copyright>Copyright © 2021 - Volta</Copyright>
        <SocialGroup />
      </Grid>
    </Container>
  )
}

export default Footer
