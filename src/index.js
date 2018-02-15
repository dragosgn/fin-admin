import React from 'react'
import {Provider} from "react-redux"
import {ThemeProvider} from 'styled-components'


import App from "./components/App"

// theming at general level
const theme = {

}


const renderApp = (Component) => {
  <ThemeProvider theme={theme}>
    <Provider>
      <Component />
    </Provider>
  </ThemeProvider>, document.getElementById("app")
}


renderApp(App)
