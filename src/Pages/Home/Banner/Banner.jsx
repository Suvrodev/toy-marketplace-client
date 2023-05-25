import React from 'react';
import Banner1 from '../../../assets/Banner/Banner_1.jpg'
import Banner2 from '../../../assets/Banner/Banner_2.jpg'
import Banner3 from '../../../assets/Banner/Banner_3.jpg'
import Banner4 from '../../../assets/Banner/Banner_4.jpg'


const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={Banner1} className="w-full rounded-xl" />
                <div className="bg-gradient-to-r rounded-xl from-[#4b85bc] to-[rgba(21,21,21,0)] absolute h-full  flex transform items-center left-0  top-0">
                   <div className='text-white space-y-7 w-full md:w-1/2 pl-12'>
                     <h2 className='text-lg md:text-6xl font-bold'> Explore a World of Imagination</h2>
                     <p>Unleash your child's imagination with our wide selection of toys and ignite endless adventures.</p>
                     <div>
                       <button className="btn btn-primary mr-5">Find Panda</button>
                       <button className="btn btn-outline btn-secondary">Latest Toys</button>
                     </div>
                   </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a> 
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide2" className="carousel-item relative w-full">
            <img src={Banner2} className="w-full rounded-xl" />
                <div className="bg-gradient-to-r rounded-xl from-[#6bc268] to-[rgba(21,21,21,0)] absolute h-full  flex transform items-center left-0  top-0">
                   <div className='text-white space-y-7 w-full md:w-1/2 pl-12'>
                     <h2 className='text-lg md:text-6xl font-bold'>Play, Dream, Create: Welcome to Our Toy Wonderland</h2>
                     <p>Discover a world of wonder and joy with our carefully curated collection of toys for all ages.</p>
                     <div>
                       <button className="btn btn-primary mr-5">Find Cow Toy</button>
                       <button className="btn btn-outline btn-secondary">Latest Toys</button>
                     </div>
                   </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a> 
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide3" className="carousel-item relative w-full">
            <img src={Banner3} className="w-full rounded-xl" />
                <div className="bg-gradient-to-r rounded-xl from-[#57b6d9] to-[rgba(21,21,21,0)] absolute h-full  flex transform items-center left-0  top-0">
                   <div className='text-white space-y-7 w-full md:w-1/2 pl-12'>
                     <h2 className='text-lg md:text-6xl font-bold'>Fun Times Await: Discover the Magic of Toys</h2>
                     <p>From classic favorites to the latest trends, find the perfect toy to bring smiles and laughter</p>
                     <div>
                       <button className="btn btn-primary mr-5">Find Elephant</button>
                       <button className="btn btn-outline btn-secondary">Latest Toys</button>
                     </div>
                   </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a> 
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide4" className="carousel-item relative w-full">
            <img src={Banner4} className="w-full rounded-xl" />
                <div className="bg-gradient-to-r rounded-xl from-[#a357ad] to-[rgba(21,21,21,0)] absolute h-full  flex transform items-center left-0  top-0">
                   <div className='text-white space-y-7 w-full md:w-1/2 pl-12'>
                     <h2 className='text-lg md:text-6xl font-bold'>Where Toys Come to Life: Experience Endless Playtime Joy</h2>
                     <p>Step into a magical realm of play and let your child's imagination soar with our enchanting toy selection.</p>
                     <div>
                       <button className="btn btn-primary mr-5">Find Tiger</button>
                       <button className="btn btn-outline btn-secondary">Latest Toys</button>
                     </div>
                   </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a> 
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;