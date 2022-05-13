import {createContext, useReducer, useEffect } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
    currentUser: JSON.parse(localStorage.getItem("user")) || null,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    // to prevent the user from being logged out automatically 
    useEffect(() => {
        // Save it to local storage
        localStorage.setItem("user", JSON.stringify(state.currentUser));
    }, [state.currentUser])

    return (
    <AuthContext.Provider value={{ currentUser: state.currentUser, dispatch }}>
        {children}
        </AuthContext.Provider>
    );
}
