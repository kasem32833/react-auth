import { NavLink } from "react-router-dom";
import app from "../../Firebase/Firebase.init";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useState } from "react";

const Login = () => {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const auth = getAuth(app);

  const handleSignIn = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    console.log(" sign in button clicked");
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setSuccess("User Loged in successfully");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div>
      <div className="container mx-auto flex justify-center items-center mt-10">
        <div className="bg-gray-300 rounded-lg h-[500px] w-1/2 flex justify-center items-center">
          <div>
            <div className="flex justify-center h-[300px] items-center">
              <div>
                <p className="text-3xl font-bold text-violet-500 mb-10">
                  Login Your Account
                </p>
                <form
                  onSubmit={handleSignIn}
                  className=" flex justify-center items-center flex-col"
                >
                  <input
                    className="w-full px-4 py-2 rounded-lg"
                    type="text"
                    name="email"
                    placeholder="Type your email"
                  />
                  <br />
                  <input
                    className="w-full px-4 py-2 rounded-lg"
                    type="password"
                    name="password"
                    placeholder="Your Password"
                  />
                  <br />
                  <p>
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </p>
                  <p className="mb-4">
                    New here please{" "}
                    <NavLink
                      to="/register"
                      className="text-green-500 font-bold"
                    >
                      Register
                    </NavLink>
                  </p>
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Submit"
                  />
                </form>
              </div>
            </div>
            <div className="flex justify-center items-center">
              {error && <p className="text-red-500">{error}</p>}
              {success && <p className="text-green-500">{success}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
