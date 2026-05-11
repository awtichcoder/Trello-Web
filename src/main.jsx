import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import CssBaseline from '@mui/material/CssBaseline'
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles' // theme provider
import { ThemeProvider } from '@mui/material/styles'
import theme from './Theme.js'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <CssVarsProvider theme={theme}>
      <CssBaseline />
      <App />
    </CssVarsProvider>
  </>
)
