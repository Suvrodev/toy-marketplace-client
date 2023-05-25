import React from 'react';
import Lottie, { useLottie } from "lottie-react";
import parrot from '../../../../public/parrot.json'

const CommonQsn = () => {
    const options = {
        animationData: parrot,
        loop: true
      };
    
      const { View } = useLottie(options);

    return (
        <div className='mt-20' data-aos="zoom-in-right">
            <h1 className='text-center text-4xl w-11/12 md:w-1/2 rounded-xl text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-auto p-4'>Common Question and our Answer</h1>

            <div className='flex flex-col md:flex-row '>
                <div className='clientQsn w-full md:w-1/2 p-2 md:m-10'>

                    <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            Do you offer gift wrapping services?
                        </div>
                            <div className="collapse-content">
                                <p>Yes, we provide complimentary gift wrapping services for all purchases made in our toy store. Just let our staff know that you'd like your items gift-wrapped, and we'll take care of it for you.</p>
                            </div>
                        </div>
                    <div tabIndex={0} className="mt-2 collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            What is your return or exchange policy for toys?
                        </div>
                            <div className="collapse-content">
                                <p>We have a hassle-free return and exchange policy for toys. If you're not completely satisfied with your purchase, you can return it within 30 days with the original receipt for a full refund. For exchanges, we offer a 60-day period during which you can exchange the toy for another item of equal value.</p>
                            </div>
                        </div>
                    <div tabIndex={0} className="mt-2 collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            Are these toys safe and tested for children?
                        </div>
                            <div className="collapse-content">
                                <p>YAbsolutely! The safety of our toys is our top priority. All the toys we carry in our store undergo rigorous safety testing to ensure they meet the highest industry standards. They are designed to be age-appropriate and free from any potential hazards.</p>
                            </div>
                        </div>
                    <div tabIndex={0} className="mt-2 collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                                Are there any discounts or promotions available?
                        </div>
                            <div className="collapse-content">
                                <p>Yes, we frequently run special promotions and offer discounts on selected toys. We recommend checking our website or social media pages for the latest updates on ongoing promotions. You can also sign up for our newsletter to receive exclusive offers and discounts.</p>
                            </div>
                        </div>
                    <div tabIndex={0} className="mt-2 collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            Can you help me find a specific toy or character?
                        </div>
                            <div className="collapse-content">
                                <p>Certainly! Our knowledgeable staff is here to assist you. If you're looking for a specific toy or character, feel free to ask any of our team members, and they will guide you to the right section or help you find alternative options if the specific toy is not available.</p>
                            </div>
                        </div>

                </div>

                <div className='anim w-full md:w-1/2 flex items-center justify-center'>
                    {View}
                </div>
            </div>
        </div>
    );
};

export default CommonQsn;