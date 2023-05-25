import React from 'react';
import { FaFacebook, FaFacebookMessenger, FaGooglePlus, FaInstagram, FaPinterest, FaTwitter, FaWhatsapp, FaYahoo } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import toyLogo from '../../../assets/toyLogo.png'

const Footer = () => {
    return (
        <div className='Footer bg-black mt-7 rounded-3xl'>
          
          <div className=' bg-black mt-7 rounded-3xl p-7 grid md:grid-cols-5 gap-2 text-center md:text-left'>
          <section className='findSection text-2xl'>
                <h2>Find Us</h2>
                <div className="ICON flex gap-4 mt-5 text-3xl justify-center md:justify-start ">

                    <a href='https://www.facebook.com/suvrodev.1122' target='_blank'> <FaFacebook/> </a>
                    <FaTwitter/>
                    <FaWhatsapp/>
                    <FaGooglePlus/>
                    <FaInstagram/>
                </div>
            </section>

            <section className='mostSold'>
                <h2 className='text-2xl'>Most sold Toy</h2>
                <p>Panda</p>
                <p>Unicorn</p>
                <p>Tiger</p>
                <p>Whale</p>
                <p>Elephant</p>
                
                
            </section>

            <section className='address'>
                <h2 className='text-2xl'>Address</h2>
                <p> 123 Toy Street, City, New Zealand</p>
                <small className='text-green-500'>Open: <span className='ms-2 font-bold text-yellow-400'>All Time</span> </small>

            </section>

            <section className='category'>
                <h2 className='text-2xl'>Our Toy Category</h2>
                <p>Flying Toy</p>
                <p>Sea Toy</p>
                <p>Jungle Toy</p>
                <p>Adorable Toy</p>
                <p>Pet</p>
            </section>

            <section className='category'>
                <h2 className='text-2xl'>Contact with us</h2>
                <p className='flex items-center justify-center md:justify-start gap-2'> <span> <FaYahoo/></span><span> suvrodev.cse@yahoo.com </span></p>
                <p className='flex items-center  justify-center md:justify-start gap-2'> <span><FaWhatsapp/> </span> <span>01518748081</span> </p>
                <p className='flex items-center  justify-center md:justify-start gap-2'> <span><FaFacebookMessenger/></span> <span> <a href='https://www.facebook.com/suvrodev.1122' target='_blank' >Suvrodeb</a></span> </p>
            </section>
          </div>

          <div>
            <div className='bg-black flex flex-col items-center justify-center md:flex-row'>
                <img className='w-44' src={toyLogo} alt="" />
                <h1 className='text-4xl webName'>Toy Galaxy</h1>
            </div>
            <div className='bg-black text-center'>
                <small className='font-bold mt-5'> Copyright <span>©</span> Suvrodeb Howlader 2023 </small>
            </div>
          </div>
           
            
        </div>
    );
};

export default Footer;