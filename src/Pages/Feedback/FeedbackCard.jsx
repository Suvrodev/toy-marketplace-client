import { Rating } from "@smastrom/react-rating";
import React from "react";
import './FeedbackCard.css'

import '@smastrom/react-rating/style.css'

const FeedbackCard = ({ f }) => {
  const { id, baby_name, image_url, message, rating,age } = f;
 // console.log(f);
  return (
    <div className="card w-full md:w-96 bg-base-100 shadow-xl bg-green-200 ms-24 fb-card">
      <figure className="px-10 pt-10">
        <img
          src={image_url}
          alt="Shoes"
          className="rounded-xl feedbackImage"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{baby_name}</h2>
        <p>{message}</p>
        <div className="card-actions flex justify-end  w-full">
           <p>Age: {age} </p>
           <div className='rating flex gap-4'>
            <Rating style={{ maxWidth: 150 }} value={rating} readOnly/>
            <span>{rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
