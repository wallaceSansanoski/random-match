import { createContext, useState } from "react";

export const ContextActivity = createContext()

export const ContextActivityProvider = ({children}) => {

    const [ kindActivity, setKindActivity ] = useState('Futebol de campo')
    return (
        <ContextActivity.Provider value={{setKindActivity, kindActivity}}>{children}</ContextActivity.Provider>
    )
}