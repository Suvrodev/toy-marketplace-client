import React from 'react';
import Banner from './Banner/Banner';
import Gallery from './Gallery/Gallery';
import ShopByCategory from './ShopByCategory/ShopByCategory';
import useTitle from '../../Hooks/useTitle';
import ImageGallary from './Gallery/newGallary/ImageGallary';
import Feedback from '../Feedback/Feedback';
import CommonQsn from './CommonQsn/CommonQsn';

const Home = () => {

    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <ImageGallary></ImageGallary>
            <ShopByCategory></ShopByCategory>
            <Feedback></Feedback>
            <CommonQsn></CommonQsn>
           
        </div>
    );
};

export default Home;