'use client';
import {useContext, createContext, useState, useEffect} from "react";
import { signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase";

//used to shate data that can be considered global 

const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const googleSignIn = () =>{
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider)
        
    }

    const logOut = () =>{
        signOut(auth)
    }

    useEffect(()=>{
        const sub = onAuthStateChanged(auth, async(currentUser)=>{
            setUser(currentUser);
            if(user){
            console.log('user:',user)
            const strigifiedUser = JSON.stringify(user)
            console.log('strigifiedUser',strigifiedUser)
            const res = await fetch("http://localhost:8081/users/saveUser", {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                  },
                   
                  body: strigifiedUser, 
                  // body data type must match "Content-Type" header
                })
            }
        });
       
        return () => sub();
    }, [user])


    return(
        <AuthContext.Provider value={{user, googleSignIn, logOut}}>{children}</AuthContext.Provider>
    )
}

export const UserAuth = () =>{
    return useContext(AuthContext)
}