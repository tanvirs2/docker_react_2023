"use client"

import React, {createContext, useState, useEffect, useContext} from 'react';
import {axiosWithBase} from "../../utils";
import {useRouter} from "next/navigation";

// Create the auth context
export const AuthContext = createContext({});

// Create the auth provider component
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const csrf = () => axiosWithBase.get("sanctum/csrf-cookie");
    const router = useRouter();


    // Simulate user authentication
    useEffect( () => {

        (async ()=>{
            if (!user) {
                await getLoggedUser();
                setIsLoading(false);
            }
        })()

    }, []);


    const getLoggedUser = async () => {
        setIsLoading(true);
        try {
            const {data} = await axiosWithBase.get("/api/user");
            setUser(data);
        } catch (e){
            console.log('user not logged in')
        }
    };

    // Login function
    const login = async ({...data}) => {
        setIsLoading(true);

        await csrf();

        try {

            await axiosWithBase.post("/login", data);
            await getLoggedUser();
            setIsLoading(false);

            router.push("/news-and-articles")

        }catch(e){
            console.log('errr',e)
        }

    };

    // Logout function
    const logout = () => {
        setIsLoading(true);

        // Perform logout logic here
        axiosWithBase.post('/logout').then(()=>{
            setIsLoading(false);

            router.push("/")
            setUser(null);
        })
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
            {isLoading && <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center">
                <h2 className="text-center text-white text-xl font-semibold">Loading...</h2>
                <p className="w-1/3 text-center text-white">
                    This may take a few seconds, please wait...
                </p>
            </div>
            }
            {children}
        </AuthContext.Provider>
    );
};


export default function useAuthContext() {
    return useContext(AuthContext);
};
