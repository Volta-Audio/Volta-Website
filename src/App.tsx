import React from "react"
import { Root, Routes } from "react-static"
import { Router } from "@reach/router"
import { ThemeProvider } from "styled-components"

import Footer from "components/footer"
import theme from "./theme"
import GlobalStyle from "./theme/global"

function App() {
  return (
    <Root>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        {/* <nav>
          <Link to="/">Home</Link>
        </nav> */}
        <div className="content">
          <React.Suspense fallback={<em>Loading...</em>}>
            <Router>
              <Routes path="*" />
            </Router>
          </React.Suspense>
        </div>
        <Footer />
      </ThemeProvider>
    </Root>
  )
}

export default App
