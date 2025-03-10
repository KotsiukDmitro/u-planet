import { useContext } from "react";
import { ScrollContext } from "../helpers/ScrollContextProvider";


export const useScrollContext = () => {
    return useContext(ScrollContext)
}