import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import reportWebVitals from './reportWebVitals'
import ConfigureStore from './store/store'
import App from './App'
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const initialState = window.INITIAL_REDUX_STATE
export const { store, persistor } = ConfigureStore(initialState)

ReactDOM.render(
  <React.Fragment>
    <App store={store} persistor={persistor} />
  </React.Fragment>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
