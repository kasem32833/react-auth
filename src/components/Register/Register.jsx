
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../../Firebase/Firebase.init";
import { useState } from "react";



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
        console.log(email, password);

        // login

        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
            console.log(result.user)
            setSuccess('User Register successfully ')
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
                <div className="bg-gray-300 rounded-lg h-[500px] w-1/2">
                    <div className="flex justify-center h-[300px] items-center">
                        <form onSubmit = {handleRegister} className=" flex justify-center items-center flex-col">
                            <input className="w-full px-4 py-2 rounded-lg" type="text"  name="email" placeholder="Type your email" />
                            <br />
                            <input className="w-full px-4 py-2 rounded-lg" type="password"  name="password" placeholder="Your Password" />
                            <br />
                            <input className="btn btn-primary" type="submit" value="Submit" />
                        </form>
                    </div>
                    <div className="flex justify-center items-center">
                        {
                            error && <p className="text-red-500">{error}</p>
                        }
                        {
                            success && <p  className="text-green-500">{success}</p>

                        }
                    </div>
                </div>
              

            </div>
        </div>
    );
};

export default Register;