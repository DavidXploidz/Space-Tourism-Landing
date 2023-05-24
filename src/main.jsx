import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from '../router'
import { RouterProvider } from 'react-router-dom'
import { SpaceProvider } from './context/SpaceProvider'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <SpaceProvider>
        <RouterProvider router={router} />
      </SpaceProvider>
  </React.StrictMode>,
)
