import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart, getProductDetails } from "../Redux/actions";

const EachProduct = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/productDetails/${id}`);
  };

  return (
    <div
      key={product.id}
      className=" m-5 border-2 border-red-300 rounded overflow-hidden w-52 md:w-1/4 lg:w-1/5 shadow-md "
    >
      <div
        onClick={() => {
          handleClick(product.id);
        }}
        className="cursor-pointer"
      >
        <div className="grid justify-items-center content-center h-44 pointer-events-none">
          <img
            src={product.image}
            alt="product"
            className="w-24 pointer-events-none"
          />
        </div>
        <div className="p-5 pointer-events-none">
          <h1 className="truncate">{product.title}</h1>
          <h6 className="text-xl py-2">${product.price}</h6>
        </div>
      </div>
      <div
        onClick={() => {
          dispatch(addToCart(1, 1, product));
        }}
        className="flex justify-center bg-red-300 p-3 text-white font-normal  border-t-2 border-red-300 hover:text-red-500  hover:bg-white cursor-pointer"
      >
        <svg
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="w-6  pointer-events-none mr-3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          ></path>
        </svg>
        <h1 className=" text-center pointer-events-none">Add to Cart</h1>
      </div>
    </div>
  );
};

export default EachProduct;
