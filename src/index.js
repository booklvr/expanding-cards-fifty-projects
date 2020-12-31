/* global module */
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import './assets/index.scss'
import App from './App'

const root = document.getElementById('root')

function renderApp() {
  // const App = require('./App').default
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    root
  )
}

renderApp()

if (module.hot) {
  module.hot.accept(renderApp)
}
