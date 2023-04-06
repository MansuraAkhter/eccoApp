import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../Redux/actions";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cartItems);
  const token = localStorage.getItem("token");

  return (
    <div>
      {cartItems.length ? (
        cartItems.map((item) => (
          <div key={item.product.id} className="flex justify-center h-48">
            <div className="flex border-2 border-red-300 rounded p-5 m-5 w-2/4">
              <div className="mr-5 flex items-center">
                <img src={item.product.image} alt="product" className="w-16" />
              </div>
              <div className="flex items-center w-2/4">
                <h1 className=" text-black pr-5">{item.product.title}</h1>
              </div>
              <div className="flex items-center">
                <div>
                  <h6>
                    Price: <strong>${item.product.price}</strong>
                  </h6>
                  <h6>
                    Quantity: <strong>{item.quantity}</strong>
                  </h6>
                </div>
              </div>
              <div className="flex items-center ">
                <button
                  onClick={() => {
                    dispatch(removeFromCart(item));
                  }}
                  className=" ml-5 py-2 px-5 bg-red-600 text-white border-2 border-red-300 hover:text-red-300 hover:bg-white transition ease-out duration-500"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center">no items in cart</div>
      )}
    </div>
  );
};

export default Cart;
