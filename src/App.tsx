import React from "react"
import { ThemeProvider, createTheme } from "@chainsafe/common-theme"
import { CssBaseline } from "@chainsafe/common-components"
import "@chainsafe/common-theme/dist/font-faces.css"
import HomePage from "./HomePage"

const theme = createTheme({
  globalStyling: {
    body: {
      backgroundColor: "#fafafa",
      overflowX: "hidden",
    },
  },
  themeConfig: {
    palette: {
      primary: {
        main: "#A700D0",
      }
    },
    constants: {
      headerHeight: 70,
    },
    typography: {
      h1: {
        fontSize: "124px",
        lineHeight: "96px",
        fontWeight: 300,
      },
      h2: {
        fontSize: "48px",
        lineHeight: "56px",
      },
      h3: {
        fontSize: "30px",
        lineHeight: "38px",
      },
      h4: {
        fontSize: "24px",
        lineHeight: "28px"
      }
    }
  }
})


const App: React.FC<{}> = () => {
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <HomePage/>
    </ThemeProvider>
  )
}

export default App

