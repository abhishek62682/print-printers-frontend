
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';

import './css/animate.css';
import './main.css';
import './css/theme.css'
import { RouterProvider } from "react-router-dom";
import router from './main-component/router';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <RouterProvider router={router} />
);


reportWebVitals();
