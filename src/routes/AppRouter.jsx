import { createBrowserRouter, RouterProvider } from "react-router-dom";
// templates
import WebsiteTemplate from "../templates/WebsiteTemplate";
import AuthintecationTemplate from "../templates/AuthintecationTemplate";
import UserDashboardTemplate from "../templates/UserDashboardTemplate";
// network status
import useNetworkStatus from "../hooks/useNetworkStatus";
import NoInternet from "../pages/NoInternet";
// error page
import NotFound from "../pages/NotFound";
// pages
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Regester from "../pages/Regester";
import EmailVerficationOtp from "../pages/EmailVerficationOtp";
import ForgetPassword from "../pages/ForgetPassword";
import ForgetPasswordOtp from "../pages/ForgetPasswordOtp";
import NewPassword from "../pages/NewPassword";
import MyAccount from "../pages/MyAccount";
import Category from "../pages/Category";
import ProductDetails from "../pages/ProductDetails";
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
        path: "login",
        element: <Login />,
      },
      {
        path: "regester",
        element: <Regester />,
      },
      {
        path: "verfiy-email",
        element: <EmailVerficationOtp />,
      },
      {
        path: "forget-password",
        element: <ForgetPassword />,
      },
      {
        path: "forget-password-otp",
        element: <ForgetPasswordOtp />,
      },
      {
        path: "reset-password",
        element: <NewPassword />,
      },
      {
        path: "my-account",
        element: <MyAccount />,
      },
      {
        path: "category/:categoryName",
        element: <Category />,
      },
      {
        path: "product/:id",
        element: <ProductDetails />,
      },
    ],
  },
  {
    element: <AuthintecationTemplate />,
    path: "auth",
    errorElement: <NotFound />,
    children: [],
  },
]);
const AppRouter = () => {
  const { isOnline } = useNetworkStatus();
  return <>{isOnline ? <RouterProvider router={router} /> : <NoInternet />}</>;
};

export default AppRouter;
