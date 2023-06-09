import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css'
import router from '../router'
import { SpaceProvider } from './context/SpaceProvider'
import { RouterProvider } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SpaceProvider>
      <RouterProvider router={router} />
    </SpaceProvider>
  </React.StrictMode>
);