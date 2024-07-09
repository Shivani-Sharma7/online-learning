import React,{createContext, useContext, useEffect, useState} from "react";

export const UserContext = createContext();
export const UserProvider = ({children}) => {
    const [userData,setUserData]=useState(() => {
        const storedUserData = localStorage.getItem("formData");
        return storedUserData ? JSON.parse(storedUserData) : null;
    });

    const logoutUser = () => {
        localStorage.removeItem('formData');
        setUserData(null);
    }

    useEffect(() => {
        localStorage.setItem("formData", JSON.stringify(userData));
    },[userData]);

    return(
        <UserContext.Provider value={{userData,setUserData,logoutUser}}>
            {children}
        </UserContext.Provider>
    )
};