
import ReactDOM from 'react-dom/client';


import './css/animate.css';
import './main.css';
import './css/theme.css'
import { RouterProvider } from "react-router-dom";
import router from './config/router'
import ScrollToTop from './components/ScrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <>
 

   <RouterProvider router={router} />

   

   
   
   
   </>
);



