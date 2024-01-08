import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ContextActivityProvider } from './Context/contextActivit.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextActivityProvider>
      <App />
    </ContextActivityProvider>
  </React.StrictMode>,
)
