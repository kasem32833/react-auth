
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import app from "../../Firebase/Firebase.init";
import { useState } from "react";
import { NavLink } from "react-router-dom";



const Register = () => {
    // save message to state
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const auth = getAuth(app);
   
    const handleRegister = (event) =>{
        // prevent reload 
        event.preventDefault()
        // get input value
        const email = event.target.email.value;
        const password = event.target.password.value;
        // console.log(email, password);
     
         if(!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)){
            console.log('please provide a valid email')
            return;
        }else if(!/[A-Z]/.test(password)){
            console.log('Use at leaset one Uppercase letter in password', password)
            return;
        }

        // login

        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
            console.log(result.user)
            setSuccess('User Register successfully ')

            // send varification email
            sendEmailVerification(result.user)
            .then(()=>{
                alert('Please check your email and varify your account')
            })
          
        })
        .catch((error)=>{
            console.log(error.message)
            setError(error.message)
        })

        // reset message
        setSuccess('')
        setError('')

    }
    return (
        <div>
            <div className="container mx-auto flex justify-center items-center mt-10">
                <div className="bg-gray-300 rounded-lg h-[500px] w-1/2 flex justify-center items-center">
                    <div>
                        <p className="text-3xl font-bold text-violet-500">Register Your Account</p>
                        <div className="flex justify-center h-[300px] items-center">
                            <form onSubmit = {handleRegister} className=" flex justify-center items-center flex-col">
                                <input className="w-full px-4 py-2 rounded-lg" type="text"  name="email" placeholder="Type your email" required/>
                                <br />
                                <input className="w-full px-4 py-2 rounded-lg" type="password"  name="password" placeholder="Your Password" required />
                                <br />
                                <div className="flex justify-center items-center">
                                    {
                                        error && <p className="text-red-500">{error}</p>
                                    }
                                    {
                                        success && <p  className="text-green-500">{success}</p>

                                    }
                                </div>
                                <p className="mb-4">Already have an account pleae <NavLink to="/login" className="text-green-500 font-bold">Login</NavLink></p>
                                <input className="btn btn-primary" type="submit" value="Submit" />
                            </form>
                        </div>
                      
                    </div>
                </div>
              

            </div>
        </div>
    );
};

export default Register;