import React, { useEffect, useState } from 'react';
import './FeedBack.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



import cat1 from '../../assets/Gallery/cat-1.jpg'
import FeedbackCard from './FeedbackCard';


const Feedback = () => {

    const [feedback,setFeedback]=useState([])
    useEffect(()=>{
     fetch('feedback.json')
     .then(res=>res.json())
     .then(data=>setFeedback(data))
    },[])
 
  //  console.log(feedback)

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide:2,
          infinite: true,
          dots: true
        }
      }
    ]
  };

    return (
        <div className='mt-16 m-5'>
        <h1 className='text-center text-4xl w-11/12 md:w-1/2 rounded-xl text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-auto p-4 mb-10'>Gotten Feedback</h1>
        <Slider {...settings} className='sliderContainer'>
          {
            feedback.map(f=> <FeedbackCard
            key={f.id}
            f={f}
            ></FeedbackCard> )
          }
        
        </Slider>
      </div>
    );
};

export default Feedback;