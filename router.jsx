import { createHashRouter } from "react-router-dom"; 
import Layout from "./src/layouts/Layout";
import Inicio from "./src/views/Inicio";
import Destination from "./src/views/Destination";
import Crew from "./src/views/Crew";
import Technology from "./src/views/Technology";


const router = createHashRouter([ 
    { 
        path: '/', 
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
    },
    {
        path: '/crew',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Crew />
            }
        ]
    },
    {
        path: '/technology',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Technology />
            }
        ]
    }
]); 

export default router; 