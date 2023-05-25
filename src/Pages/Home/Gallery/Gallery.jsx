import React, { useEffect, useState } from 'react';
import './Gallery.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import cat1 from '../../../assets/Gallery/cat-1.jpg'
import cat2 from '../../../assets/Gallery/cat-2.jpg'
import Cow1 from '../../../assets/Gallery/cat-1.jpg'
import Cow2 from '../../../assets/Gallery/cat-2.jpg'
import Panda1 from '../../../assets/Gallery/panda-1.webp'
import Panda2 from '../../../assets/Gallery/panda-2.jpg'
import Tiger from '../../../assets/Gallery/tiger-1.jpg'

import Unicorn from '../../../assets/Gallery/unicorn-1.webp'
import Horse from '../../../assets/Gallery/horse-1.jpg'
import Dog from '../../../assets/Gallery/Dog-1.jpg'
import Elephent from '../../../assets/Gallery/Elephent-1.jpg'
import Deer from '../../../assets/Gallery/deer-1.jpg'
import dinosaur from '../../../assets/Gallery/dinosaur-2.jpg'

const Gallery = () => {

  


    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500
      };

    return (
      <div className='mt-16'>
        <h1 className='text-center mt-10 mb-10 text-5xl'>Gotten Feedback</h1>
        <Slider {...settings}>
          <div>
             <img className='w-full imgSize ' src={Panda1} alt="" />
          </div>
          <div className='ms-16'>
          <img className='w-full imgSize' src={Dog} alt="" />
          </div>
          <div  className='ms-16'>
          <img className='w-full imgSize' src={Tiger} alt="" />
          </div >
          <div  className='ms-16'>
          <img className='w-full imgSize' src={Unicorn} alt="" />
          </div>
          <div  className='ms-16'>
          <img className='w-full imgSize' src={Elephent} alt="" />
          </div>
          <div  className='ms-16'>
          <img className='w-full imgSize' src={dinosaur} alt="" />
          </div>
        </Slider>
      </div>
    );
};

export default Gallery;