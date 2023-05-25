import React, { useEffect, useState } from 'react';
import './ImageGallary.css'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

const ImageGallary = () => {
    const [Images,setImages]=useState([])

    useEffect(()=>{
        fetch('gellary.json')
        .then(res=>res.json())
        .then(data=>setImages(data))
    },[])

   let Imagess=Images.slice(0,12)

  //  console.log(Images)

    return (
        <div className='p-10 galleryContainer m-5 mt-10 rounded-3xl' data-aos="fade-up">
        <h1 className='text-center text-4xl w-11/12 md:w-1/2 rounded-xl text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-auto p-4 mb-10'>Image Gallery</h1>
            
          <div className='' data-aos="flip-right" data-aos-duration="3000">
          <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
                <Masonry gutter="50px">
                    {
                        Imagess.map((image,i)=>(
                            <img 
                              key={i}
                              src={image.photo}
                              style={{width: "100%", display: "block", borderRadius: "12px"}}
                              alt=''
                            />
                        ))
                    }
                </Masonry>
            </ResponsiveMasonry>
          </div>
        </div>
       
    );
};

export default ImageGallary;