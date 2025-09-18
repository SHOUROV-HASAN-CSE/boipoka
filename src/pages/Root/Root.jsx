import React from 'react';
import Navbar from '../../components/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';

const Root = () => {
  return (
    <div className='md:max-w-7xl md:mx-auto'>
      <Navbar/>
      <Outlet/>
      <Footer/>
      
    </div>
  );
};

export default Root;