import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../App/AppLayout";
import Homepage from "../HomePage/HomePage";
import BlogDetails from "../BlogDetails/BlogDetails";
import ContactPage from "../ContactPage/ContactPage";
import NotFoundPage from "../../components/NotFound"
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "blog-single/:slug",
        element: <BlogDetails />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
    path:"*",
    element:<NotFoundPage />
  }
    ],
    
  },
  
]);

export default router;