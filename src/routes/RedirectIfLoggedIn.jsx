import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const RedirectIfLoggedIn = ({ children }) => {
  const { isLogin } = useSelector((state) => state.authSlice);
  if (isLogin) {
    return <Navigate to="/my-account" />;
  }

  return children;
};

export default RedirectIfLoggedIn;
