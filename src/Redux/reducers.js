import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_ERROR,
  GET_ALL_PRODUCTS,
  ADD_TO_CART,
  GET_PRODUCT_DETAILS,
  GET_IN_CATEGORY,
  REMOVE_FROM_CART,
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

    case GET_IN_CATEGORY:
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
    case REMOVE_FROM_CART:
      let cartItemss = [...state.cartItems];
      if (action.payload.quantity > 1) {
        const index = cartItemss.findIndex(
          (item) => item.product.id == action.payload.product.id
        );
        cartItemss[index].quantity -= 1;
        return {
          ...state,
          cartItems: cartItemss,
        };
      } else {
        console.log(action.payload.product.id);
        return {
          ...state,
          cartItems: state.cartItems.filter((item) => {
            if (item.product.id === action.payload.product.id) return false;
            else return true;
          }),
        };
      }

    default:
      return state;
  }
};

export default allProductsReducer;
