import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { FaGoogle } from "react-icons/fa";
import loginImage from '../../assets/loginImg.jpg'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import useTitle from '../../Hooks/useTitle';



const Login = () => {

   useTitle('Login')

    const navigate=useNavigate();
    const loc=useLocation()
    //console.log(loc)
    const from= loc.state?.from?.pathname || '/';
   // console.log(from)

   const {SignInByMail,GoogleLogin}=useContext(AuthContext)

   const [error,setError]=useState("")

   const handleLogin=(event)=>{
    event.preventDefault();
    const form=event.target;
    const email=form.email.value;
    const password=form.password.value;

  // console.log(email, password)

   SignInByMail(email,password)
   .then(result=>{
     const loggedUser=result.user;
    // console.log("Logged User: ",loggedUser)
     setError("")
     navigate(from, {replace: true} )
   })
   .catch(error=>{
    console.log(error.message)
    setError(error.message)
   })
}

const handleLoginGoogle=()=>{
   console.log("Google")
   GoogleLogin()
   .then(result=>{
      const loggedUser=result.user;
    //  console.log('By Google')
    //  console.log(loggedUser)
  
     // console.log(loginUser)
      navigate(from, {replace: true} )

   })
   .catch(error=>{
     console.log(error.message)
   })
 }


    return (
        <div className="hero min-h-screen bg-base-200">
        
          <div className="card w-full md:w-1/3 shadow-2xl ">
            <div className="card-body">
            <h1 className="text-3xl font-bold text-center">Login now!</h1>

            <form onSubmit={handleLogin}>
              <div className="form-control">
                  <label className="label">
                      <span className="label-text">Email</span>
                  </label>
                  <input
                      type="email"
                      placeholder="email"
                      className="input input-bordered"
                      name="email"
                      required
                  />
                  </div>
                  <div className="form-control">
                  <label className="label">
                      <span className="label-text">Password</span>
                  </label>
                  <input
                      type="password"
                      placeholder="password"
                      className="input input-bordered"
                      name="password"
                      required
                  />
                
                  </div>
                  <div className="form-control mt-6">
                  <input type="submit" className="btn btn-primary" value="Login" />
                  </div>
            </form>
            <div className="flex items-center justify-center flex-col gap-5">
              <p className="font-bold">Or Sign up With</p>
              <button onClick={handleLoginGoogle} className="btn text-yellow-300"> <FaGoogle/> </button>
            </div>
            <p className="text-center my-4">New to Suvrodeb Toy Market? <Link to='/signup' className="font-bold text-orange-500">Sign Up</Link> </p>
            {
              error && <p className='bg-red-500 text-center p-5 text-white font-bold'>{error}</p>
            }
            </div>
          </div>
      </div>
   
    );
};

export default Login;