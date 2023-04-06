import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoutes = () => {
  const auth = useSelector((state) => state.auth);
  return <div>{auth ? <Outlet /> : <Navigate to="/signin" />}</div>;
};

export default PrivateRoutes;
