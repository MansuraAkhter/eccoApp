import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../Redux/actions";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const details = useSelector((state) => state.productDetails);
  console.log(details);
  const date = new Date();
  return (
    <div>
      <h1>{details?.title}</h1>
      <img src={details?.image} alt="product" width="300px" />
      <h1>{details?.price}</h1>
      <h1>{details.description}</h1>
      <div>
        <h1>{details?.rating.rate}</h1>
        <h1>{details?.rating.count}</h1>
      </div>
      {details && (
        <button
          onClick={() => {
            dispatch(addToCart(1, date, details));
          }}
        >
          Add to cart
        </button>
      )}
    </div>
  );
};

export default ProductDetails;
