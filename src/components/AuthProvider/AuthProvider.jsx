import { createContext } from "react";
import PropTypes from 'prop-types'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/Firebase.init";

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    

    const createUser = (email, password)=>{
      return  createUserWithEmailAndPassword(auth, email, password)
    }

    const signinUser = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const authInfo = {user, createUser, signinUser}
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
        
    );
};

export default AuthProvider;