"use client"

import React, {createContext, useState, useEffect, useContext} from 'react';
import {axiosWithBase} from "../../utils";
import {useRouter} from "next/navigation";

// Create the auth context
export const AuthContext = createContext({});

// Create the auth provider component
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    //const [isLoading, setIsLoading] = useState(true);

    const csrf = () => axiosWithBase.get("sanctum/csrf-cookie");
    const router = useRouter();


    // Simulate user authentication
    useEffect( () => {

        (async ()=>{
            if (!user) {
                await getLoggedUser();
            }
        })()

    }, []);


    const getLoggedUser = async () => {
        try {
            const {data} = await axiosWithBase.get("/api/user");
            setUser(data);
        } catch (e){
            console.log('user not logged in')
        }
    };

    // Login function
    const login = async ({...data}) => {

        await csrf();

        try {

            await axiosWithBase.post("/login", data);
            await getLoggedUser();
            router.push("/news-and-articles")

        }catch(e){
            console.log('errr',e)
        }

    };

    // Logout function
    const logout = () => {
        // Perform logout logic here
        axiosWithBase.post('/logout').then(()=>{
            router.push("/")
            setUser(null);
        })

        // Set the user state to null

        // Remove isLoggedIn flag from localStorage
        //localStorage.removeItem('isLoggedIn');
    };

    // Provide the auth context value
    const authContextValue = {
        user,
        getLoggedUser,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={authContextValue}>
            {children}
        </AuthContext.Provider>
    );
};


export default function useAuthContext() {
    return useContext(AuthContext);
};
