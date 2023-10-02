import React, { useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, GithubAuthProvider } from "firebase/auth";
import app from '../../Firebase/Firebase.init';

const Login = () => {
    const [user, setUser] = useState();
    const auth = getAuth(app);

    console.log(auth)
    const googleAuthProvider = new GoogleAuthProvider;
    const githubAuthProvider = new GithubAuthProvider

// Google signin
    const handleGoogleSignIn = ()=>{
        signInWithPopup(auth, googleAuthProvider)
        .then( result => {
           const user = result.user;
           setUser(user)
        })
        .catch(error => {
            console.log('error', error.message)
        })
    }
// github signin 
    const handleGithubSignIn = () =>{
        signInWithPopup(auth, githubAuthProvider)
        .then((result)=>{
            const logedInuser = result.user;
            console.log(logedInuser);
            setUser(logedInuser)
        })
        .catch(error =>{
            console.log(error)
        })
    }
// signout 
    const handleLogOut = () =>{
        signOut(auth)
        .then(()=>{
            setUser(null)
        })
        .catch(error =>{
            console.log(error)
        })
    }
  


    return (
        <div> 
            { user &&
            <div className='flex justify-center items-center'>
                <div className='text-center space-y-2'>
                    <p>{user.displayName}</p>
                    <p>{user.email}</p>
                    <div className='flex justify-center items-center'>
                        <img src={user.photoURL} alt="" />  
                    </div>
                </div>
            </div>
            }
            {
                user ? <button className='btn-primary px-4 py-2 rounded-lg mt-10' onClick={handleLogOut}>Log Out</button> :
                <div className='flex gap-4 justify-center'>
                    <button className='btn-primary px-4 py-2 rounded-lg mt-10' onClick={handleGoogleSignIn}>Signin With Google</button> 
                    <button className='btn-primary px-4 py-2 rounded-lg mt-10' onClick={handleGithubSignIn}>Signin With github</button> 

                </div>

                
            }
                

        </div>
        // { user &&
        //     <div>
        //     <div className='flex justify-center items-center'>
        //       
        //     </div>
        //     <div className="flex gap-4">
        // }
       
        // {
        //     user ? <button className='btn-primary px-4 py-2 rounded-lg mt-10' onClick={handleGoogleSignIn}>Signin With Google</button> :
        //     <button className='btn-primary px-4 py-2 rounded-lg mt-10' onClick={handleGoogleSignIn}>Signin With Google</button>
        // }
            
        
    );
};

export default Login;