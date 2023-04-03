import { NavLink, Outlet, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const cart = () => {
    navigate("/cart");
    // dispatch(getCartItems(1));
  };
  return (
    <div>
      <div>LOGO</div>
      <div>
        <nav>
          <NavLink to="/">Products</NavLink>
          <NavLink to="/customercare">Customer Care</NavLink>
        </nav>
      </div>
      <div>SIGN IN</div>
      <button onClick={cart}>cart</button>
    </div>
  );
};

export default Navbar;
