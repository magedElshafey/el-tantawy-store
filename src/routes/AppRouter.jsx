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
import Login from "../pages/Login";
import Regester from "../pages/Regester";

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
    ],
  },
  {
    element: <AuthintecationTemplate />,
    path: "auth",
    errorElement: <NotFound />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "regester",
        element: <Regester />,
      },
    ],
  },
]);
const AppRouter = () => {
  const { isOnline } = useNetworkStatus();
  return <>{isOnline ? <RouterProvider router={router} /> : <NoInternet />}</>;
};

export default AppRouter;
