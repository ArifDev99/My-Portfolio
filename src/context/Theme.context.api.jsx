import { createContext,useContext, useEffect, useState } from "react"


export const Themecontext=createContext();

export const useTheme=()=>{
    return useContext(Themecontext);
}


export const Themeprovider=({children})=>{

    const [isdarkMode,setIsdarkMode]=useState(true);

    const toggleMode = ()=>{
        setIsdarkMode(perv=>!perv);

    }
    const theme= isdarkMode ? "dark" : "light"

    useEffect(()=>{
        document.documentElement.setAttribute("data-theme",theme)
    },[isdarkMode,theme])


    return (
        <Themecontext.Provider value={{theme , toggleMode}} >
            {children}
        </Themecontext.Provider>
    )
}

