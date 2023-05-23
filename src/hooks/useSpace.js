import { useContext } from "react";
import SpaceContext from '../context/SpaceProvider'


const useSpace = () => {

    return useContext(SpaceContext)

}

export default useSpace