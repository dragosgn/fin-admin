import React from 'react'
import {Provider} from "react-redux"
import {ThemeProvider} from 'styled-components'
import {createStore, applyMiddleware, combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'



import App from "./components/App"

// theming at general level
const theme = {
}


const rootReducer = combineReducers({

})


const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware
))


const renderApp = (Component) => {
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Component />
    </Provider>
  </ThemeProvider>, document.getElementById("app")
}


renderApp(App)
