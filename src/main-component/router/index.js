import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../App/AppLayout";
import Homepage from "../HomePage/HomePage";
import BlogDetails from "../BlogDetails/BlogDetails";
import ContactPage from "../ContactPage/ContactPage";
import ErrorPage from "../ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
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
    ],
  },
]);

export default router;