import axios from "axios";
import Config from "../utils/Config";
import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_ERROR,
  GET_ALL_PRODUCTS,
  ADD_TO_CART,
  GET_PRODUCT_DETAILS,
  GET_IN_CATEGORY,
  REMOVE_FROM_CART,
  SIGN_IN,
  SIGN_OUT,
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

export const getInCategory = (category) => {
  return (dispatch) => {
    dispatch(fetchStart());
    if (category == "all") {
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
    } else {
      axios
        .get(`${Config.BASE_URL}/products/category/${category}`)
        .then((data) => {
          console.log(data.data);
          dispatch(fetchSuccess());
          dispatch({ type: GET_IN_CATEGORY, payload: data.data });
        })
        .catch((error) => {
          dispatch(fetchError(error.message));
        });
    }
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

export const addToCart = (userId, quantity, product) => {
  console.log(product);
  return {
    type: ADD_TO_CART,
    payload: { quantity: quantity, product },
  };
};

export const removeFromCart = (item) => {
  return {
    type: REMOVE_FROM_CART,
    payload: item,
  };
};

export const signIn = (value) => {
  const username = value.username;
  const password = value.password;
  return (dispatch) => {
    dispatch(fetchStart());
    axios
      .post(`${Config.BASE_URL}/auth/login`, {
        username,
        password,
      })
      .then((data) => {
        console.log(data.data);
        dispatch(fetchSuccess());
        window.localStorage.setItem("token", data.data.token);
        dispatch({ type: SIGN_IN });
      })
      .catch((error) => {
        dispatch(fetchError(error.message));
      });
  };
};

export const signOut = () => {
  localStorage.removeItem("token");
  return {
    type: SIGN_OUT,
  };
};

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
