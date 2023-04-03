import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_ERROR,
  GET_ALL_PRODUCTS,
  // GET_CART_ITEMS,
  ADD_TO_CART,
  GET_PRODUCT_DETAILS,
} from "./ActionTypes";

const initialState = {
  loading: false,
  success: false,
  allProducts: [],
  productDetails: {},
  error: "",
  cartItems: [],
};

const allProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        error: "",
      };
    case FETCH_ERROR:
      return {
        ...state,
        loading: false,
        allProducts: [],
        error: action.payload,
      };
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
      };
    case GET_PRODUCT_DETAILS:
      return {
        ...state,
        productDetails: action.payload,
      };

    case ADD_TO_CART:
      let cartItems = [...state.cartItems];
      //new product insert prouct object
      const index = cartItems.findIndex(
        (item) => item.product.id == action.payload.product.id
      );
      if (index == -1) {
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      } else {
        cartItems[index].quantity += action.payload.quantity;
        return {
          ...state,
          cartItems: cartItems,
        };
      }
    //update quantity

    // case GET_CART_ITEMS:
    //   return {
    //     ...state,
    //     cartItems: action.payload,
    //   };
    default:
      return state;
  }
};

export default allProductsReducer;
