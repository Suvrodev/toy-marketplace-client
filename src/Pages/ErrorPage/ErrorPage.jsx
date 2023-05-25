import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../assets/notFound/panda404.jpg'
import { FaHome } from 'react-icons/fa';

const ErrorPage = () => {
    return (
        <div className='notFound'>
            <h1 className='text-center text-white text-4xl mt-10 bg-red-700 p-7 rounded-3xl'>This Link is not not available in our site</h1>
            <div className='text-center mt-10 '><Link to='/'> <button className='btn btn-warning font-bold'>Go Home Page <FaHome className='ms-2'></FaHome> </button> </Link></div>
          
            <div className="imageConatiner mt-10 ">
             <img className='rounded-3xl' src={notFound} alt="" />
            </div> 
            {/* <h1 className='text-center fw-bold text-white bg-danger m-3 rounded-2 errorTitle'>This Link is not not available in our site</h1>
            <div className='text-center'><Link to='./'> <button className='btn btn-primary'>Go Home Page <FaHome/> </button> </Link></div>
            <div className="imageConatiner">
            <img className='dogImage img-fluid' src={notFound} alt="" />
            </div> */}
        </div>
    );
};

export default ErrorPage;