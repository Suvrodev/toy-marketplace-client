import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import registerImage from '../../assets/registerImage.png'
import { Link, useNavigate } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';
import useTitle from '../../Hooks/useTitle';

const SignUp = () => {
    useTitle('SignUp')
    
    const navigate=useNavigate();
    const {createUser}=useContext(AuthContext)

    const [error,setError]=useState("")

     const updateUserData=(user,name,photo)=>{
        console.log('Heating')
        updateProfile(user,{
            displayName: name,
            photoURL: photo
        })
        .then(result=>{
            console.log(result)
            setError("")
        })
        .catch(error=>{
            console.log(error)
            setError(error.message)
        })
    }

  

    const handleSignUp=(event)=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const photo=form.photo.value;
        const email=form.email.value;
        const password=form.password.value;

        console.log(name,"\n",photo,"\n",email,"\n",password)

        createUser(email,password)
        .then(result=>{
            const registeredUser=result.user;
            console.log(registeredUser)
            updateUserData(registeredUser,name,photo)
            // updateUserData(name,photo)
            console.log(registeredUser)
            setError("")
            navigate('/' , {replace: true})
        })
        .catch(error=>{
            console.log(error.message)
            setError(error.message)
        })

    }

    return (
        <div className="hero min-h-screen bg-base-200">
         
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
            <h1 className="text-3xl font-bold text-center">Sign Up</h1>
  
             <form onSubmit={handleSignUp}>
              <div className="form-control">
                  <label className="label">
                      <span className="label-text">Name</span>
                  </label>
                  <input
                      type="text"
                      placeholder="Name"
                      className="input input-bordered"
                      name="name"
                      required
                  />
                  </div>

              <div className="form-control">
                  <label className="label">
                      <span className="label-text">Photo url</span>
                  </label>
                  <input
                      type="url"
                      placeholder="Photo url"
                      className="input input-bordered"
                      name="photo"
                      required
                  />
                  </div>

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
                  <input type="submit" className="btn btn-primary" value="Sign up" />
                  </div>
             </form>
             <p className="text-center my-4">Already Have an Account <Link to='/login' className="font-bold text-orange-500">Login</Link> </p>
             {
                 error && <p className='bg-red-500 text-center p-5 text-white font-bold'>{error}</p>
             }
            </div>
          </div>
        </div>
     
    );
};

export default SignUp;