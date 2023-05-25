import React, { useEffect, useState } from 'react';
import SubCategoryCard from '../SubCategoryCard';

const FlyingToy = () => {

    const [toys,setToys]=useState([])

    useEffect(()=>{
        fetch('https://toy-marketplace-server-rho.vercel.app/category?subcategory=flyingToy')
        .then(res=>res.json())
        .then(data=>setToys(data))
    },[])
  //  console.log(toys)
    return (
        <div className='' data-aos="fade-up-right "  data-aos-duration="3000">
            {/* <span className='bg-purple-400 rounded-xl p-5 mb-10 font-bold  '>Flying Toy :{toys.length} </span> */}
                <div className='grid md:grid-cols-3 gap-5 mt-10 p-5'>
                {
                    toys.map(toy=> <SubCategoryCard
                    key={toy._id}
                    toy={toy}
                    ></SubCategoryCard> )
                }
            </div>
        </div>
    );
};

export default FlyingToy;