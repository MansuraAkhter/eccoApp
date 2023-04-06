import { useSelector, useDispatch } from "react-redux";
import { addToCart, getProductDetails } from "../Redux/actions";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const details = useSelector((state) => state.productDetails);

  useEffect(() => {
    dispatch(getProductDetails(id));
  }, []);
  const date = new Date();
  return (
    <div className="flex justify-center">
      <div className="p-10 mt-10 max-w-3xl flex border-2 border-red-300 rounded">
        <div className="w-1/3 flex items-center">
          <img src={details?.image} alt="product" className="w-64" />
        </div>
        <div className="p-10 w-2/3">
          <h1 className="text-2xl text-gray-700 mb-5">{details?.title}</h1>
          <h1>{details?.description}</h1>
          <h1 className="my-8 text-orange-400 text-4xl">${details?.price}</h1>
          <div className="flex">
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="w-6 mr-1 text-yellow-500"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
              ></path>
            </svg>
            <h1>
              rating: <strong>{details?.rating?.rate}</strong>
            </h1>
            <h1 className="text-xs p-1 px-5">
              {details?.rating?.count} people voted
            </h1>
          </div>

          {details && (
            <div className="flex justify-center">
              <button
                onClick={() => {
                  dispatch(addToCart(1, date, details));
                }}
                className="py-2 px-10 mt-10 bg-red-300 text-white border-2 border-red-300 hover:text-red-300 hover:bg-white transition ease-out duration-500"
              >
                Add to cart
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
