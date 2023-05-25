import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import { Link, NavLink } from 'react-router-dom';
import toyLogo from '../../../assets/toyLogo.png'
import './Navbar.css'
const Navbar = () => {
    const {user,LogOut}=useContext(AuthContext)
    const [nameVisibility,setNameVisibility]=useState(false)
  //  {
  //    user?.photoURL &&
  //    console.log('Photo url: ',user.photoURL)
  //  }

    const displayName=()=>{
      setNameVisibility(true)
     // console.log(nameVisibility)
    }
    const hideName=()=>{
      setNameVisibility(false)
     // console.log(nameVisibility)
    }

  //  console.log(nameVisibility)

    const handleLogout=()=>{
        LogOut()
        .then(res=>{
         
        })
        .catch(error=>{
          console.log(error.message)
        })
      }

      const navItems=<div className='lg:flex items-center justify-center '>
      <li><NavLink className={({isActive})=> isActive? 'text-blue-500 font-extrabold':''}  to='/'>Home</NavLink ></li>
      <li><NavLink className={({isActive})=> isActive? 'text-blue-500 font-extrabold':''}  to='/alltoys'>All Toys</NavLink ></li>
      <li><NavLink className={({isActive})=> isActive? 'text-blue-500 font-extrabold':''}  to='/blogs'>Blogs</NavLink ></li>

      {
       user ?
       <>
         <li> <NavLink className={({isActive})=> isActive? 'text-blue-500 font-extrabold':''}  to={'/addtoy'}>Add a Toy</NavLink > </li>
         <li> <NavLink className={({isActive})=> isActive? 'text-blue-500 font-extrabold':''}  to={'/mytoys'}>My Toy</NavLink > </li>
         {
           user.photoURL && 
           <img onMouseEnter={displayName} onMouseLeave={hideName} className='w-10 h-10 rounded-full' src={user.photoURL}></img>
         }
         {
           user.displayName && 
           <li className={`font-bold lg:ms-5 ${nameVisibility? 'yes' :'no'} `}> {user.displayName} </li>
         }
         <li> <button onClick={handleLogout} className='btn lg:ms-5'>Logout</button> </li>
       </>
       :
       <li><NavLink className={({isActive})=> isActive? 'text-blue-500 font-extrabold':''}   to='/login'>Login</NavLink ></li>
      }
    
     </div>

    return (
        <div className="navbar bg-base-100 h-28 mb-4 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
             {
                navItems
                
             }
           
            </ul>
          </div>
            <Link className="btn btn-ghost normal-case text-xl" to='/'> <img className='w-16 md:w-36 rounded-full' src={toyLogo} /> </Link>
            <h1 className='text-xl md:text-4xl webName '>ToyGalaxy</h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
             {navItems}
          </ul>
        </div>
        {/* <div className="navbar-end">
          <Link><button className="btn btn-outline btn-warning">Appointment</button></Link>
        </div> */}
      </div>
    );
};

export default Navbar;