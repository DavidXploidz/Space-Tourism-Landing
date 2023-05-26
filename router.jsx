import { createBrowserRouter } from "react-router-dom"; 
import Layout from "./src/layouts/Layout";
import Inicio from "./src/views/Inicio";
import Destination from "./src/views/Destination";


const router = createBrowserRouter([ 
    { 
        path: '/home', 
        element: <Layout />, 
       //Children quiere decir las paginas que utilizaran ese layout 
        children: [ 
            { 
                index: true, 
                element: <Inicio /> 
            }
        ] 
    }, 
    {
        path: '/destination',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Destination />
            }
        ]
    }
]); 

export default router; 