import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../Redux/actions";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems);

  return (
    <div>
      {cartItems &&
        cartItems.map((item) => (
          <div key={item.product.id}>
            <h1>{item.product.title}</h1>
            <img src={item.product.image} alt="product" className="w-16" />
            <h6>{item.product.price}</h6>
            <h6>{item.quantity}</h6>
            <button
              onClick={() => {
                dispatch(removeFromCart(item));
              }}
            >
              Remove
            </button>
          </div>
        ))}
    </div>
  );
};

export default Cart;
