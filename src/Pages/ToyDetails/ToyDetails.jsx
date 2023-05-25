import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';

import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const ToyDetails = () => {

  useTitle('Toy Details')

    const [toy,setToy]=useState("")
    const {id}=useParams();
   // console.log(id)

   useEffect(()=>{
    fetch(`https://toy-marketplace-server-rho.vercel.app/alltoys/${id}`)
    .then(res=>res.json())
    .then(data=>setToy(data))
   },[])

    //console.log(toy)
    const {_id,toyPhoto,toyName,seller_name,subcategory,price,available_quantity,seller_email,details,ratting}=toy;

    return (
      <div className='bg-purple-500 w-11/12 md:w-6/12 mx-auto flex items-center justify-center p-5'>
          <div className="card w-96 md:w-11/12 glass">
            <figure className='p-10'>
              <img src={toyPhoto} alt="car!" className='m-10 rounded-3xl w-full md:w-96'/>
            </figure>
            <div className="card-body">
              <h1 className="text-center text-4xl text-white"> <span className='hidden md:inline-block'>Toy Name:</span> {toyName} </h1>
              <p className="text-center mt-5 text-white font-bold text-2xl"> Seller Name: {seller_name} </p>
              <p className="text-center mt-5 text-white text-2xl font-bold">Seller Email: {seller_email} </p>
              <p className="text-center mt-5 text-white font-bold"> <span className='flex flex-col'><span className='text-2xl'>Description</span> <span className='italic text-green-400'>{details}</span></span> </p>
              <div className='flex flex-col md:flex-row justify-between text-center md:text-left'>
                <div>
                   <p className='md:text-2xl text-white mb-2'>Price: <span className='font-bold'>${price}</span> </p>
                   <span className='md:text-2xl text-white'>Available Quantity: <span className='font-bold'>{available_quantity}</span> </span>
                </div>

                <div className='rating flex justify-center items-center mt-5 gap-1  text-center'>
                  <Rating style={{ maxWidth: 150 }} value={ratting} readOnly/>
                   <span className='font-bold'>{ratting}</span>
                </div>
              </div>
              
            
              
            </div>
        </div>
      </div>
    );
};

export default ToyDetails;