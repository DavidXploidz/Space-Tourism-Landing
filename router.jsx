import { createBrowserRouter } from "react-router-dom"; 
import Layout from "./src/layouts/Layout";
import Inicio from "./src/views/Inicio";


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
]); 

export default router; 