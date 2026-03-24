import { createBrowserRouter } from "react-router-dom";

import HomePage from "../../pages/home-page";
import BlogDetails from "../../pages/BlogDetails";
import RequestAQuote from "../../pages/requestquote-page";
import AppLayout from "../../layouts/app-layout";
import NotFoundPage from "../../pages/notfound-page"
import PrivacyPolicy from "../../pages/privacy-page";
import TermsOfUse from "../../pages/termsofuse-page";
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "blog-single/:slug",
        element: <BlogDetails />,
      },
      {
        path: "request-a-quote",
        element: <RequestAQuote />,
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicy />,
      },
       {
        path: "terms-of-use",
        element: <TermsOfUse />,
      },
     
      {
    path:"*",
    element:<NotFoundPage />
  }
    ],
    
  },
  
]);

export default router;