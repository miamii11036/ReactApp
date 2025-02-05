import React from "react";

const DayContext = React.createContext();

const DayProvider = function({children}) {
    const day = new Date().getDay();
    return (
        <DayContext.Provider value={{day}}>
            {children}
        </DayContext.Provider>
    )
}
export default DayProvider
export const useDayContext = () => React.useContext(DayContext)