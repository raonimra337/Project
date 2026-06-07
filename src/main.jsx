// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import ReactDom from 'react-dom/client'
// import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import {BrowserRouter} from 'react-router-dom'

ReactDom.createRoot(document.getElementById('root')).render(
  <stricMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </stricMode>
)
