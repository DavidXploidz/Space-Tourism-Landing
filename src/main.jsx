import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { SpaceProvider } from './context/SpaceProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SpaceProvider>
      <App />
    </SpaceProvider>
  </React.StrictMode>,
)
