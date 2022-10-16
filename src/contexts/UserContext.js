import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({children}) => {
    const [user,setUser] = useState({});
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const signIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    const signInWithGoogle = ()=>{
        signInWithPopup(auth,googleProvider)
        .then(result=>{
            const user= result.user;
            setUser(user);
        })
        .catch(error=>console.error(error))
    }
    const logOut = ()=>{
        return signOut(auth);
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoading(false);
            console.log(currentUser);
        })
        return(()=>{
            unsubscribe();
        })
    },[])

    const userInfo= {user, loading, createUser, signIn, logOut, signInWithGoogle};
    return (
        <div>
            <AuthContext.Provider value={userInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;