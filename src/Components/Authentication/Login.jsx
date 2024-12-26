import React, { useContext, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { AuthContext } from '../AuthProvider/AuthProvider';
import axios from 'axios';

const Login = () => {
    const location = useLocation();
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { signInUser, signInWithGoogle} = useContext(AuthContext);
    const emailRef = useRef();
    const auth = getAuth();

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        setError(""); 

        signInUser(email, password)
            .then((result) => {
                // console.log(result.user.email);
                const user={email:email}
                toast.success("Login successful!", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: true,
                  
                });
                e.target.reset();
                // navigate(location?.state || "/"); 

                    // for jwt token 
axios.post('https://b10a11-server-side-gray.vercel.app/jwt',user,{withCredentials:true})
.then(res=>{
//   console.log(res.data);
})
              
            })

            .catch((error) => {
                // console.error("ERROR:", error.message);
                setError(error.message); 
                toast.error("Login failed: " + error.message, {
                    position: "top-right",
                    autoClose: 3000,

                });
            });   
    
      navigate(location?.state|| '/')      


                // update last login time 
      const lastSignInTime=result?.user?.metadata?.lastSignInTime


      const loginInfo ={email,lastSignInTime}
      fetch(`https://b10a11-server-side-gray.vercel.app/clients`,{
        method:'PATCH',
        headers:{
            'content-type':'application/json'
    },
          body:JSON.stringify(loginInfo)
    })
    .then(res=>res.json())
    .then(data=>{
    //   console.log('sign in info update in db',data);
    })
    
      .catch(error=>{
        // console.log(error);
      })
    
    
        };
// forgot password 
    const handleForgetPassword = () => {
        const email = emailRef.current.value;
        if (!email) {
            toast.warn("Please provide a valid email address.", {
                position: "top-right",
                autoClose: 3000,
            });
        } else {
            // console.log(email);
            sendPasswordResetEmail(auth, email)
                .then(() => {
                    toast.success("Password reset email sent! Please check your inbox.", {
                        position: "top-right",
                        autoClose: 3000,
                      
                    });
                })
                .catch((error) => {
                    // console.error("ERROR:", error.message);
                    toast.error("Failed to send password reset email: " + error.message, {
                        position: "top-right",
                        autoClose: 3000,
                    });
                });
        }
    };

// for google signin 
const handleGoogleSignIn=()=>{
    signInWithGoogle()
    .then(result=>{
        // console.log(result.user);
        navigate('/')
    })
    .catch((error) => {
        // console.error("ERROR:", error.message);
       
    });
}


    return (
      <div className=''>
<div className="relative inset-0">
  <img
    className=" object-cover lg:w-full  opacity-80 h-screen "
    src="https://i.ibb.co.com/rH7mrRg/15-g-signature-premium-family-room-standard.jpg"
    alt="Background"
  />
  <div className="absolute inset-0 bg-black bg-opacity-30"></div>
</div>

          <div className="flex items-center  justify-center ">
     
            <ToastContainer />
            <div className= " w-30 sm:h-96 lg:h-[600px]  bg-white/30 rounded-lg  shadow-lg  backdrop-blur-md  card bg-base-100 lg:w-full lg:max-w-lg  p-10 absolute bottom-0">
                <h2 className="text-2xl text-center font-bold mb-5">
                    Login to Your Account
                </h2>
                <form onSubmit={handleLogin} className="card-body">
                    {/* Email Field */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            name="email"
                            ref={emailRef}
                            type="email"
                            placeholder="Enter your email"
                            className="input input-bordered"
                            required
                        />
                    </div>

                    {/* Password Field */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            name="password"
                            type="password"
                            placeholder="Enter your password"
                            className="input input-bordered"
                            required
                        />
                        <label onClick={handleForgetPassword} className="label">
                            <span className="label-text-alt link link-hover">
                                Forgot password?
                            </span>
                        </label>
                    </div>

                    {/* Display Error */}
                    {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

                    {/* Submit Button */}
                
                  <div className="form-control mt-6">
                    <button className="btn  rounded-md bg-green-600 text-white">
                            Login
                        </button>
                    </div>
                </form>

                {/* Register Redirect */}
                <p className="text-center font-semibold mt-3">
                    Don’t Have An Account?{" "}
                    <Link className="text-red-500 underline" to="/register">
                        Register
                    </Link>
                </p>
                <button
      onClick={handleGoogleSignIn}
      className="flex items-center justify-center p-2   shadow-sm bg-white btn w-[300px]  ml-14 mt-5"
    >
      <img className='w-6 h-6 mr-2 ' src="https://i.ibb.co.com/k9sCr1Z/Logo-google-icon-PNG.png" alt="" /> {/* Google Logo */}
      <span className="text-gray-600 font-medium">Log in with Google</span>
    </button>
            </div>
        </div>
      </div>
    );
};

export default Login;
