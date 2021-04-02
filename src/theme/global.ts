import { createGlobalStyle } from "styled-components"


const GlobalStyle = createGlobalStyle`
  * {
    scroll-behavior: smooth;
  }
  @font-face {
    font-family: 'NHaasGroteskDSStd-95Blk';
    src: url(../fonts/NeueHaasGroteskDisplayStd/NHaasGroteskDSStd-95Blk.otf) format('opentype');
    /* other formats include: 'woff2', 'truetype, 'opentype',
                              'embedded-opentype', and 'svg' */
  }
  @font-face {
    font-family: 'NHaasGroteskDSStd-75Bd';
    src: url(../fonts/NeueHaasGroteskDisplayStd/NHaasGroteskDSStd-75Bd.otf) format('opentype');
    /* other formats include: 'woff2', 'truetype, 'opentype',
                              'embedded-opentype', and 'svg' */
  }
  @font-face {
    font-family: 'NHaasGroteskDSStd-45L';
    src: url(../fonts/NeueHaasGroteskDisplayStd/NHaasGroteskDSStd-45L.otf) format('opentype');
    /* other formats include: 'woff2', 'truetype, 'opentype',
                              'embedded-opentype', and 'svg' */
  }
  body {
    font-family: 'NHaasGroteskDSStd-45L', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue',
    Helvetica, Arial, 'Lucida Grande', sans-serif;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 2px;
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
    font-weight: bold;
  }
  img {
    max-width: 100%;
  }

  h1 {
    font-family: 'NHaasGroteskDSStd-95Blk';
    font-size: 64px;
    line-height: 54px;
  }
  h2 {
    font-family: 'NHaasGroteskDSStd-95Blk';
    font-size: 54px;
    line-height: 54px;
  }
  h3 {
    font-family: 'NHaasGroteskDSStd-75Bd';
    font-size: 48px;
    line-height: 44px;
  }
  h4 {
    font-family: 'NHaasGroteskDSStd-75Bd';
    font-size: 24px;
    line-height: 24px;
    letter-spacing: 1px;
  }
  .small-body {
    font-size: 14px;
    line-height: 16px;
  }

  @media (max-width: 575px) {
    h1 {
      font-family: 'NHaasGroteskDSStd-95Blk';
      font-size: 50px;
      line-height: 48px;
      letter-spacing: 1px;
    }
    h2 {
      font-family: 'NHaasGroteskDSStd-95Blk';
      font-size: 32px;
      line-height: 36px;
    }
    h3 {
      font-family: 'NHaasGroteskDSStd-75Bd';
      font-size: 24px;
      line-height: 24px;
    }
  }
`

export default GlobalStyle