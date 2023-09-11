"use client"

import React, {createContext, useState, useEffect, useContext} from 'react';
import {axiosWithBase} from "../../utils";
import {useRouter} from "next/navigation";

// Create the auth context
export const AuthContext = createContext({});

// Create the auth provider component
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    //const [isLoading, setIsLoading] = useState(true);

    const csrf = () => axiosWithBase.get("sanctum/csrf-cookie");
    const router = useRouter();


    // Simulate user authentication
    useEffect(() => {
        // Check if user is logged in
        //const isLoggedIn = localStorage.getItem('isLoggedIn');

        /*if (isLoggedIn) {
            // User is logged in, set the user state
            setUser({ name: 'John Doe' });
        }*/

        // Set loading state to false
        //setIsLoading(false);
    }, []);


    const getLoggedUser = async () => {

        const {data} = await axiosWithBase.get("/api/user");
        //console.log(data)

        setUser(data);

    };

    // Login function
    const login = async ({...data}) => {

        await csrf();

        try {
            await axiosWithBase.post("/login", data);
            await getLoggedUser();

            //console.log(user)

            router.push("/news-and-articles")
        }catch(e){
            console.log('errr',e)
        }

        // Perform login logic here

        // Set the user state
        //setUser({ name: 'John Doe' });

        // Set isLoggedIn flag in localStorage
        //localStorage.setItem('isLoggedIn', true);
    };

    // Logout function
    const logout = () => {
        // Perform logout logic here
        router.push("/")
        axiosWithBase.post('/logout').then(()=>{
            setUser({});
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
