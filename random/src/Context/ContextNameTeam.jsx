import { createContext, useState } from "react";

export const ContextNameTeam = createContext(['Team 1', 'Team 2'])
export const ContextNameTeamProvider = ({children}) => {

    const [teamNames , setTeamNames ] = useState([])

    return  <ContextNameTeam.Provider value={{setTeamNames, teamNames}}>{children}</ContextNameTeam.Provider>
}