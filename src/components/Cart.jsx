import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems);

  return (
    <div>
      {cartItems &&
        cartItems.map((item) => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <img src={item.image} alt="product" className="w-16" />
            <h6>{item.price}</h6>
          </div>
        ))}
    </div>
  );
};

export default Cart;
