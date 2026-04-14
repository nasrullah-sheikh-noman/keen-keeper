import React from 'react';
import Navbar from '../components/shared/navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/shared/footer/Footer';
import { ToastContainer } from 'react-toastify';

const Mainlayout = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
       <ToastContainer />
    </div>
  );
};

export default Mainlayout;