import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { MainApp } from './09-useContext/MainApp'
// import { HooksApp } from './HooksApp'
import './index.css'
// import './08-useReducer/intro-reducer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter >
    {/* <HooksApp /> */}
    < MainApp />
  </BrowserRouter>
)
