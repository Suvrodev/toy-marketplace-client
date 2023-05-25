import React, { useContext } from "react";
import './SubCategoryCard.css'
import { Link, useNavigate } from "react-router-dom";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";

const SubCategoryCard = ({ toy }) => {
  
  // console.log(_id)
 // console.log(toy);
  const {_id, toyPhoto, toyName, price, ratting } = toy;

  const {user}=useContext(AuthContext);
  const navigate=useNavigate();

  // const handleViewDetail=(id)=>{
  //     console.log(id)
  //     {
  //       user ?
  //       navigate(`/toydetails/${_id}`)
  //       :
  //       <>
         
  //          {Swal.fire('You have to login first')}
  //          {navigate('/login')}
          
  //       </>
  //     }
  // }

 
  return (
    <div className="w-11/12 mx-auto rounded-3xl SCC ">
      <div className="hero-content  flex-col justify-center">
        <div className="text-center  h-1/2">
            <img
            src={toyPhoto}
            className="w-full  mx-auto rounded-lg shadow-2xl subcategorycardimg"
            />
        </div>
        <div className="text-center h-1/2">
          <h1 className="text-5xl font-bold text-center">{toyName}</h1>
          <p className="py-6 text-center">
           <span className="font-bold"> Price: ${price}</span>
          </p>
          <div className='rating flex gap-4 mb-5'>
            <Rating style={{ maxWidth: 150 }} value={ratting} readOnly/>
            <span>{ratting}</span>
          </div>

          {/* <button onClick={()=>handleViewDetail(_id)} className="btn btn-primary">View Details</button> */}

          <Link to={`/toydetails/${_id}`}><button className="btn btn-primary">View Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default SubCategoryCard;
