import React from "react";

const UserContext = React.createContext();

function UserProvider({children}) {
    const [username, setUsername] = React.useState("Mia")
    const [IsLogIn, setIsLogIn] = React.useState(false)

    const toggleUser = function() {
        const dice = Math.random();

        if (dice > 0.3 && dice <= 0.6) {
            setUsername("Tom");
        } else if (dice > 0.6) {
            setUsername("Leo");
        } else {
            setUsername("Mia");
        }
    }

    
    return (
        <UserContext.Provider value={{username, toggleUser, IsLogIn, setIsLogIn}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;
export const UseUserContext = () => React.useContext(UserContext);