import { createContext,useState } from "react";

export const userContext = createContext({});

export function UserContextProvider({children}){
    const [toggle, setToggle] = useState(false);
    
    return (
        <userContext.Provider value={{toggle,setToggle}}>
            {children}
        </userContext.Provider>
    )
}