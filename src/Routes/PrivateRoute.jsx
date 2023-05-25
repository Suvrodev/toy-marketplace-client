import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location=useLocation();
   // console.log(location)
    if(loading){
        return <progress className="progress w-56 bg-green-500"></progress>
    }

    if(user?.email){
        return children
    }

    Swal.fire('You have to login first')
    return <Navigate state={{from:location}} to='/login' replace></Navigate>
    
};

export default PrivateRoute;