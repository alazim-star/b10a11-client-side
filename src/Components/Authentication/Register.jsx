import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { AuthContext } from '../AuthProvider/AuthProvider';



const Register = () => {
  const { createUser, updateUserProfile, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = e.target.photo.value || '';
    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;

    // Password Validation
    if (!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)) {
      setPasswordError("Password must have at least 6 characters, include an uppercase and a lowercase letter.");
      return;
    }
    setPasswordError(""); // Clear previous errors

    try {
      // Create User
      const result = await createUser(email, password);
      // console.log("User created at Firebase:", result.user);
      
      const createdAt = result.user.metadata.creationTime;
      const newClient = { name, email, createdAt };

      // Save user to database
      const response = await fetch('http://localhost:5000/clients', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newClient),
      });
      const data = await response.json();

      if (data.insertedId) {
        // console.log("Client added to database:", data);
        toast.success("Registration successful! Welcome!");
      }

      // Update Profile
      await updateUserProfile({ displayName: `${firstName} ${lastName}`, photoURL: photo });
      
      e.target.reset();
      navigate('/');

    } catch (error) {
      console.error("Registration failed:", error.message);
      toast.error("Registration failed: " + error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      toast.success("Google Sign-In successful!");
      navigate('/');
    } catch (error) {
      console.error("Google Sign-In failed:", error.message);
      toast.error("Google Sign-In failed: " + error.message);
    }
  };

  return (
    <div className="items-center min-h-screen flex justify-center ">
      <ToastContainer />
      <div className="card bg-base-100  max-w-lg p-10">
        <h2 className="text-2xl text-center font-bold">Register Your Account</h2>
        <form onSubmit={handleRegister} className="card-body">
          {/* Name Section */}
          <div className="form-control">
            <div className="flex space-x-4">
              <div>
                <label className="label">
                  <span className="label-text">First Name</span>
                </label>
                <input name="firstName" type="text" placeholder="First Name" className="input input-bordered" required />
              </div>
              <div>
                <label className="label">
                  <span className="label-text">Last Name</span>
                </label>
                <input name="lastName" type="text" placeholder="Last Name" className="input input-bordered" required />
              </div>
            </div>
         
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input name="name" type="text" placeholder="Enter your name" className="input input-bordered w-[450px]" required />
          </div>

          {/* Photo URL */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input name="photo" type="text" placeholder="Photo URL (Optional)" className="input  w-[450px] input-bordered" />
          </div>

          {/* Email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input name="email" type="email" placeholder="Enter your email" className=" w-[450px] input input-bordered" required />
          </div>

          {/* Password */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <div className="relative">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className=" w-[450px] input input-bordered "
                required
              />
          
              <span
                className="absolute top-1/2 transform -translate-y-1/2 -right-16 cursor-pointer text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            {passwordError && <p className="text-red-500 text-sm mt-2">{passwordError}</p>}
          </div>

          {/* Submit */}
          <div className="form-control mt-6">
            <button className="btn bg-green-600 text-white w-[450px] rounded-lg">Register</button>
          </div>
        </form>
        <p className="text-center font-semibold mt-4 ml-10">
          Already Have An Account? <Link to="/login" className="text-red-500 underline">Login</Link>
        </p>
        <button
          onClick={handleGoogleSignIn}
          className="flex items-center justify-center p-2 shadow-sm bg-white btn w-full mt-5 ml-10"
        >
          <img className='w-6 h-6 mr-2 ' src="https://i.ibb.co.com/k9sCr1Z/Logo-google-icon-PNG.png" alt="" />
          <span className="text-gray-600 font-medium">Log in with Google</span>
        </button>
      </div>
    </div>
  );
};

export default Register;
