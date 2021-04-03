const theme = {
  colours: {
    primary: {
      pink: "#DD0473",
      lightPink: "#E9499B",
      roseBud: "#9C155A",
      black: "#232323",
      white: "#FFFFFF",
      hover: "#EB5BA5",
      active: "#D2428C"
    },
    secondary: {
      darkGrey: "#505050",
      grey: "#999999",
      lightGrey: "#DDDDDD",
    },
  },
  breakpoints: {
    mobile: "@media only screen and (max-width: 767px)",
    desktop: "@media only screen and (min-width: 768px)",
  },
  text: {
    smallFont: "12px",
    smallLineHeight: "18px"
  },
  spacing: {
    xxl: "96px",
    xl: "80px",
    l: "64px",
    m: "48px",
    s: "32px",
    xs: "8px"
  }
}

export * as GlobalStyle from './global'
export default theme