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
      const response = await fetch('https://b10a11-server-side-gray.vercel.app/clients', {
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
      // console.error("Registration failed:", error.message);
      toast.error("Registration failed: " + error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      toast.success("Google Sign-In successful!");
      navigate('/');
    } catch (error) {
      // console.error("Google Sign-In failed:", error.message);
      toast.error("Google Sign-In failed: " + error.message);
    }
  };
  

  return (
<div className="relative  min-h-screen flex items-center justify-center bg-gray-900 px-4">
  {/* Background Image */}
  <img 
    className="absolute inset-0 w-full h-full object-cover opacity-50" 
    src="https://i.ibb.co/PvQ0dFw8/3d4adec0dd46a256d464e14e49a56641.jpg" 
    alt="Background" 
  />

  {/* Registration Card */}
  <div className="relative z-10 w-full max-w-md bg-white/30 backdrop-blur-lg shadow-lg rounded-lg p-6 sm:p-10">
    <h2 className="text-2xl font-bold text-center text-white">Register Your Account</h2>

    <form onSubmit={handleRegister} className="space-y-4 mt-4">
      {/* Name Fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="label-text text-white">First Name</label>
          <input name="firstName" type="text" placeholder="First Name" className="input input-bordered w-full" required />
        </div>
        <div>
          <label className="label-text text-white">Last Name</label>
          <input name="lastName" type="text" placeholder="Last Name" className="input input-bordered w-full" required />
        </div>
      </div>

      {/* Your Name */}
      <div>
        <label className="label-text text-white">Your Name</label>
        <input name="name" type="text" placeholder="Enter your name" className="input input-bordered w-full" required />
      </div>

      {/* Photo URL */}
      <div>
        <label className="label-text text-white">Photo URL</label>
        <input name="photo" type="text" placeholder="Photo URL (Optional)" className="input input-bordered w-full" />
      </div>

      {/* Email */}
      <div>
        <label className="label-text text-white">Email</label>
        <input name="email" type="email" placeholder="Enter your email" className="input input-bordered w-full" required />
      </div>

      {/* Password */}
      <div>
        <label className="label-text text-white">Password</label>
        <div className="relative">
          <input
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            className="input input-bordered w-full"
            required
          />
          <span
            className="absolute top-1/2 transform -translate-y-1/2 right-4 cursor-pointer text-gray-300"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        {passwordError && <p className="text-red-500 text-sm mt-2">{passwordError}</p>}
      </div>

      {/* Submit Button */}
      <div className="mt-4">
        <button className="px-4 py-2 bg-primary text-white rounded-full hover:bg-white shadow-xl hover:text-[#af9556] transition duration-300 w-full">Register</button>
      </div>
    </form>

    {/* Login Link */}
    <p className="text-center font-semibold mt-4 text-white">
      Already Have An Account? <Link to="/login" className="text-red-600 underline">Login</Link>
    </p>

    {/* Google Sign-In */}
    <button
      onClick={handleGoogleSignIn}
      className="flex items-center justify-center p-2 shadow-sm bg-white btn w-full mt-4"
    >
      <img className='w-6 h-6 mr-2' src="https://i.ibb.co/k9sCr1Z/Logo-google-icon-PNG.png" alt="Google" />
      <span className="text-gray-600 font-medium">Log in with Google</span>
    </button>
  </div>
  </div>


  );
};

export default Register;
