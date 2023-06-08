
import ReactDOM from 'react-dom/client'
import './index.css'
import router from '../router'
import { RouterProvider } from 'react-router-dom'
import { SpaceProvider } from './context/SpaceProvider'
import { HashRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(

  <HashRouter>
    <SpaceProvider>
      <RouterProvider router={router} />
    </SpaceProvider>
  </HashRouter>


);