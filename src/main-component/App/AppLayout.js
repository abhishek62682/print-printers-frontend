import React from 'react';
import AllRoute from '../router'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
// import CustomCursor from '../../components/CustomCursor/CustomCursor';

const AppLayout = () => {

  return (
    <div className="App" id='scrool'>

      <Navbar hclass={'header-section'} />

      <Outlet/>



      <Footer />
     
    </div>
  );
}

export default AppLayout;