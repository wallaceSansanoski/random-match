import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ContextActivityProvider } from './Context/contextActivit.jsx'
import { ContextPlayersProvider } from './Context/contextPlayers.jsx'
import { ContextNameTeamProvider } from './Context/ContextNameTeam.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <ContextPlayersProvider>
      <ContextNameTeamProvider>
      <ContextActivityProvider>
        <App />
      </ContextActivityProvider>
      </ContextNameTeamProvider>
    </ContextPlayersProvider>
  // </React.StrictMode>,
)
