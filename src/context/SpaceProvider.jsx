import { createContext, useState } from "react";


const SpaceContext = createContext()

const SpaceProvider = ({children}) => {

    const [hola, setHola] = useState('holfaefa')

    return(
        <SpaceContext.Provider 
            value={{
                hola
            }} 
        >
            {children}
        </SpaceContext.Provider>
    )
}



export {
    SpaceProvider
}

export default SpaceContext