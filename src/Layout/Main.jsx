import React from 'react';
import './Main.css'
import { Outlet } from 'react-router-dom';
import Header from '../Pages/SharedPage/Header/Header';
import Footer from '../Pages/SharedPage/Footer/Footer';

const Main = () => {
    return (
        <div className='main'>
            <Header></Header>
            {/* This is Main */}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;