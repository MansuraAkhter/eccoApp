import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="text-gray-600">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
