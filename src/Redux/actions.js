import axios from "axios";
import Config from "../utils/Config";
import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_ERROR,
  GET_ALL_PRODUCTS,
  ADD_TO_CART,
  GET_PRODUCT_DETAILS,
  // GET_CART_ITEMS,
} from "./ActionTypes";

export const fetchStart = () => {
  return {
    type: FETCH_START,
  };
};

export const fetchSuccess = () => {
  return {
    type: FETCH_SUCCESS,
  };
};

export const fetchError = (error) => {
  return {
    type: FETCH_ERROR,
    payload: error,
  };
};

export const getAllProducts = () => {
  return (dispatch) => {
    dispatch(fetchStart());
    axios
      .get(`${Config.BASE_URL}/products`)
      .then((data) => {
        console.log(data.data);
        dispatch(fetchSuccess());
        dispatch({ type: GET_ALL_PRODUCTS, payload: data.data });
      })
      .catch((error) => {
        dispatch(fetchError(error.message));
      });
  };
};

export const getProductDetails = (id) => {
  console.log(id);
  return (dispatch) => {
    dispatch(fetchStart());

    axios
      .get(`${Config.BASE_URL}/products/${id}`)
      .then((data) => {
        console.log(data.data);
        dispatch(fetchSuccess());
        dispatch({ type: GET_PRODUCT_DETAILS, payload: data.data });
      })
      .catch((error) => {
        dispatch(fetchError(error.message));
      });
  };
};

export const addToCart = (userId, date, product) => {
  console.log(product);
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};
// export const addToCart = (userId, date, productId) => {
//   return (dispatch) => {
//     dispatch(fetchStart());
//     axios
//       .post(`${Config.BASE_URL}/carts`, {
//         userId,
//         date,
//         products: [{ productId: productId, quantity: 1 }],
//       })
//       .then((data) => {
//         console.log(data.data);
//         dispatch(fetchSuccess());
//       })
//       .catch((error) => {
//         dispatch(fetchError(error.message));
//       });
//   };
// };

// export const getCartItems = (id) => {
//   return (dispatch) => {
//     dispatch(fetchStart());
//     axios
//       .get(`${Config.BASE_URL}/carts/user/${id}`)
//       .then((data) => {
//         console.log(data.data);
//         dispatch(fetchSuccess());
//         dispatch({ type: GET_CART_ITEMS, payload: data.data });
//       })
//       .catch((error) => {
//         dispatch(fetchError(error.message));
//       });
//   };
// };
