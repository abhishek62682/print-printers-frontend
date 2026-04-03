import { Outlet } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

import FooterSection from "../components/FooterSection";
import CursorMaus from "../components/CursorMaus/CursorMaus";
import Navbar from "../components/Navbar/Navbar";
import ScrollToTop from '../components/ScrollToTop';
import { ReactLenis } from 'lenis/react';
import { HelmetProvider } from 'react-helmet-async';
import PageLoader from '../components/PageLoader';

const AppLayout = () => {
  return (
    <HelmetProvider>
      <div className="App">
        <ReactLenis root />

        <ScrollToTop />
        <PageLoader />

        <Navbar hclass={'header-section'} />
        <CursorMaus />

        <main>
          <Outlet />
        </main>

        <FooterSection />
      </div>
    </HelmetProvider>
  );
};

export default AppLayout;