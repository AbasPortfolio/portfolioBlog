import { createContext, useEffect, useState } from "react";
import { Data } from '../DummyData'

export const UserContext = createContext();

const UserProvider = ({children}) => {
    const [currentUser,setCurrentUser] = useState(Data)

   

    return <UserContext.Provider value={{currentUser, setCurrentUser}}>
        {children}
    </UserContext.Provider>
}

export default UserProvider;