import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';


export const AuthContext=createContext();
const auth=getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser]=useState([])
    const [loading,setLoading]=useState(true)

      ///Reg By Email and Password Start
      const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    ///Reg By Email and Password End

    ///Sign in by Email Start
    const SignInByMail=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    ///Sign in by Email End


    ////update start

    // const updateUserData=(name,photo)=>{
    //     console.log('Heating')
    //     updateProfile(user,{
    //         displayName: name,
    //         photoURL: photo
    //     })
    //     .then(result=>{
    //         console.log(result)
    //         //setError("")
    //     })
    //     .catch(error=>{
    //         console.log(error)
    //         //setError(error.message)
    //     })
    // }

    ////update end


    ///Sign in By Google Start
    const googleProvider=new GoogleAuthProvider();
    const GoogleLogin=()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider);
    }
    ///Sign in By Google End


    ///Logout Start
    const LogOut=()=>{
        setLoading(true)
        return signOut(auth);
    }
    ///Logout End

     //Check User start
     useEffect(()=>{
        const unSubscribe= onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
           // console.log("Current User: ",currentUser)
            setLoading(false)
        })

        return ()=>{
            return unSubscribe();
        }
       
    },[])
    //Check User end



    const authInfo={
        user,
        loading,
        createUser,
        SignInByMail,
        LogOut,
        GoogleLogin,
      
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;