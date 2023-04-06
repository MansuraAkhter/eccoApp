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

const initialState = {
  loading: false,
  success: false,
  allProducts: [],
  productDetails: {},
  error: "",
  cartItems: [],
  itemCount: 0,
  auth: false,
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
      let itemCount = state.itemCount;
      itemCount++;
      const index = cartItems.findIndex(
        (item) => item.product.id == action.payload.product.id
      );
      if (index == -1) {
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
          itemCount: itemCount,
        };
      } else {
        cartItems[index].quantity += action.payload.quantity;
        return {
          ...state,
          cartItems: cartItems,
          itemCount: itemCount,
        };
      }
    case REMOVE_FROM_CART:
      let cartItemss = [...state.cartItems];
      let itemCounts = state.itemCount;
      itemCounts--;
      if (action.payload.quantity > 1) {
        const index = cartItemss.findIndex(
          (item) => item.product.id == action.payload.product.id
        );
        cartItemss[index].quantity -= 1;
        return {
          ...state,
          cartItems: cartItemss,
          itemCount: itemCounts,
        };
      } else {
        return {
          ...state,
          itemCount: itemCounts,
          cartItems: state.cartItems.filter((item) => {
            if (item.product.id === action.payload.product.id) return false;
            else return true;
          }),
        };
      }
    case SIGN_IN:
      return {
        ...state,
        auth: true,
      };
    case SIGN_OUT:
      return {
        ...state,
        auth: false,
      };
    default:
      return state;
  }
};

export default allProductsReducer;
