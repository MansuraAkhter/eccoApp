import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "../Redux/actions";
import "../index.css";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const itemCount = useSelector((state) => state.itemCount);
  const auth = useSelector((state) => state.auth);

  const cart = () => {
    navigate("/cart");
  };
  return (
    <div className="flex justify-between m-5 pb-4 border-b-2 ">
      <div className="text-4xl font-semibold px-10 ">LOGO</div>
      <div>
        <nav className="text-gray-500 text-lg">
          <NavLink to="/" className="nav ">
            Products
          </NavLink>
          <NavLink to="/customercare" className="nav">
            Customer Care
          </NavLink>
        </nav>
      </div>
      <div className="flex text-gray-400 text-lg">
        {auth ? (
          <div
            onClick={() => {
              dispatch(signOut());
            }}
            className="text-yellow-100 bg-gray-700 px-5 cursor-pointer  border-solid rounded-3xl pt-1 hover:bg-red-300 transition ease-out duration-500"
          >
            Sign out
          </div>
        ) : (
          <div
            onClick={() => {
              navigate("/signin");
            }}
            className="text-yellow-100 bg-gray-700 px-5 cursor-pointer border-solid rounded-3xl pt-1 hover:bg-red-300 transition ease-out duration-500"
          >
            Sign in
          </div>
        )}

        <div className="px-5 flex text-red-600 font-bold">
          <svg
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            onClick={cart}
            className="w-8 hover:text-red-400 pt-1 text-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            ></path>
          </svg>
          {itemCount}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
