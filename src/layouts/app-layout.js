
import { Outlet } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

import FooterSection from "../components/FooterSection"
import CursorMaus from "../components/CursorMaus/CursorMaus"
import Navbar from "../components/Navbar/Navbar"
import ScrollToTop from '../components/ScrollToTop';
import { ReactLenis, useLenis } from 'lenis/react'

const AppLayout = () => {

  const lenis = useLenis((lenis) => {
    // called every scroll
    console.log(lenis)
  })


  return (
    <div className="App" >
      <ReactLenis root />

      <ScrollToTop />

      <Navbar hclass={'header-section'} />
       <CursorMaus />

      <Outlet/>



      <FooterSection />
     
    </div>
  );
}

export default AppLayout;