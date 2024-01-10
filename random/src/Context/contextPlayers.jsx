import { createContext, useState } from "react";

export const ContextPlayers = createContext()

export const ContextPlayersProvider = ({children}) => {

    const [ players, setPlayers ] = useState(['wallace', 'jeam', 'carlos', 'cris', 'jorge', 'alex', 'luam', 'kaue', 'kauam','rean','walladce', 'jedam', 'carlfos', 'crfis', 'jorfge', 'alefx', 'lfuafm', 'kaufe', 'kaufam','refan'])
    return (
        <ContextPlayers.Provider value={{players, setPlayers}}>{children}</ContextPlayers.Provider>
    )
}