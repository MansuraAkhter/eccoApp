import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart, getProductDetails } from "../Redux/actions";

const EachProduct = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (id) => {
    dispatch(getProductDetails(id));
    navigate(`/productDetails/${id}`);
  };

  const date = new Date();
  return (
    <div key={product.id}>
      <h1>{product.title}</h1>
      <img
        src={product.image}
        alt="product"
        className="w-16"
        onClick={() => {
          handleClick(product.id);
        }}
      />
      <h6>{product.price}</h6>
      <button
        onClick={() => {
          dispatch(addToCart(1, date, product));
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default EachProduct;
