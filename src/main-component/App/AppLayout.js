
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../../components/footer/Footer';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import CursorMaus from '../../components/CursorMaus/CursorMaus';

const AppLayout = () => {

  return (
    <div className="App" id='scrool'>

      <Navbar hclass={'header-section'} />
       <CursorMaus />

      <Outlet/>



      <Footer />
     
    </div>
  );
}

export default AppLayout;