import { createBrowserRouter, RouterProvider } from "react-router-dom";
// routes
import ProtectedRoutes from "./ProtectedRoutes";
import RedirectIfLoggedIn from "./RedirectIfLoggedIn";
// templates
import WebsiteTemplate from "../templates/WebsiteTemplate";
// network status
import useNetworkStatus from "../hooks/useNetworkStatus";
import NoInternet from "../pages/NoInternet";
// error page
import NotFound from "../pages/NotFound";
// pages
import Home from "../pages/Home";
// static pages
import About from "../pages/About";
import Contact from "../pages/Contact";
import Faq from "../pages/Faq";
import Terms from "../pages/Terms";
import Privacy from "../pages/Privacy";
import Blogs from "../pages/Blogs";
import Blog from "../pages/Blog";
// authintecation pages
import Login from "../pages/Login";
import Regester from "../pages/Regester";
import EmailVerficationOtp from "../pages/EmailVerficationOtp";
import ForgetPassword from "../pages/ForgetPassword";
import ForgetPasswordOtp from "../pages/ForgetPasswordOtp";
import NewPassword from "../pages/NewPassword";

// product and categories pages
import Category from "../pages/Category";
import ProductDetails from "../pages/ProductDetails";
import Offers from "../pages/Offers";
// user dashboard
import MyAccount from "../pages/MyAccount";
import Orders from "../pages/Orders";
import Whishlist from "../pages/Whishlist";
import Addresses from "../pages/Addresses";
const router = createBrowserRouter([
  {
    element: <WebsiteTemplate />,
    errorElement: <NotFound />,
    path: "/",
    children: [
      {
        path: "/",
        element: <Home />,
        index: "true",
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "faqs",
        element: <Faq />,
      },
      {
        path: "terms",
        element: <Terms />,
      },
      {
        path: "privacy",
        element: <Privacy />,
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
      {
        path: "blogs/:id",
        element: <Blog />,
      },
      {
        path: "login",
        element: (
          <RedirectIfLoggedIn>
            <Login />
          </RedirectIfLoggedIn>
        ),
      },
      {
        path: "regester",
        element: (
          <RedirectIfLoggedIn>
            <Regester />
          </RedirectIfLoggedIn>
        ),
      },
      {
        path: "verfiy-email",
        element: (
          <RedirectIfLoggedIn>
            <EmailVerficationOtp />
          </RedirectIfLoggedIn>
        ),
      },
      {
        path: "forget-password",
        element: (
          <RedirectIfLoggedIn>
            <ForgetPassword />
          </RedirectIfLoggedIn>
        ),
      },
      {
        path: "forget-password-otp",
        element: (
          <RedirectIfLoggedIn>
            <ForgetPasswordOtp />
          </RedirectIfLoggedIn>
        ),
      },
      {
        path: "reset-password",
        element: (
          <RedirectIfLoggedIn>
            <NewPassword />
          </RedirectIfLoggedIn>
        ),
      },

      {
        path: "category/:categoryName",
        element: <Category />,
      },
      {
        path: "product/:id",
        element: <ProductDetails />,
      },
      {
        path: "offers",
        element: <Offers />,
      },
      {
        path: "my-account",
        element: (
          <ProtectedRoutes>
            <MyAccount />
          </ProtectedRoutes>
        ),
      },
      {
        path: "my-orders",
        element: (
          <ProtectedRoutes>
            <Orders />
          </ProtectedRoutes>
        ),
      },
      {
        path: "my-whishlist",
        element: (
          <ProtectedRoutes>
            <Whishlist />
          </ProtectedRoutes>
        ),
      },

      {
        path: "my-address",
        element: (
          <ProtectedRoutes>
            <Addresses />
          </ProtectedRoutes>
        ),
      },
    ],
  },
]);
const AppRouter = () => {
  const { isOnline } = useNetworkStatus();
  return <>{isOnline ? <RouterProvider router={router} /> : <NoInternet />}</>;
};

export default AppRouter;
