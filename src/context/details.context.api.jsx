import { createContext, useContext } from "react";
import data from "../Data/My_data.json";


export const My_details_context=createContext();

export const useDetails=()=>{
    return(
        useContext(My_details_context)
    )
}

export const Details_provider=({children ,value})=>{
    return(
        <My_details_context.Provider value={value}>
            {children}
        </My_details_context.Provider>
    )
}