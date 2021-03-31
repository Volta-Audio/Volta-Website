import React from "react"
import { Root, Routes, addPrefetchExcludes } from "react-static"
import { Link, Router } from "@reach/router"
import { createGlobalStyle } from "styled-components"

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(["dynamic"])

const GlobalStyle = createGlobalStyle`
  * {
    scroll-behavior: smooth;
  }
  body {
    font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue',
    Helvetica, Arial, 'Lucida Grande', sans-serif;
    font-weight: 300;
    font-size: 16px;
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
    color: #108db8;
    font-weight: bold;
  }

  img {
    max-width: 100%;
  }
`

function App() {
  return (
    <Root>
      <GlobalStyle />
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <div className="content">
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </div>
    </Root>
  )
}

export default App
