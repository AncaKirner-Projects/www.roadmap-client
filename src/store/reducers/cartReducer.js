import ActionTypes from '../actions/actionTypes';
import createReducer from '../helpers/reducerHelper';

const cartReducer = createReducer(
  [],
  {
    [ActionTypes.ADD_TO_CART]: (state, action) => {
      let foundProduct;
      let productList;

      if (state.products) {
        const index = state.products.findIndex(elem => action.payload.id === elem.id);
        if (index > -1) {
          productList = [...state.products];
          productList[index].quantity = +1;
        } else {
          foundProduct = { ...action.payload, quantity: 1 };
          productList = [...state.products, foundProduct];
        }
      } else {
        foundProduct = { ...action.payload, quantity: 1 };
        productList = [foundProduct];
      }
      const status = state.status ? [...state.status, action.status] : [action.status];

      return {
        products: productList,
        status
      };
    },
    [ActionTypes.CHANGE_PRODUCT_QUANTITY]: (state, action) => {
      const productList = [...state.products];
      const index = state.products.findIndex(elem => action.payload.product.id === elem.id);
      productList[index].quantity = action.payload.newQuantity;

      return {
        products: productList
      };
    },
    [ActionTypes.DELETE_FROM_CART]: (state, action) => {
      const products = state.products.filter(elem => action.payload.id !== elem.id);

      return {
        products
      };
    },
    [ActionTypes.DELETE_CART_STATUS_MESSAGE]: (state, action) => {
      const messages = state.status.filter(elem => action.payload !== elem.type);

      return {
        ...state,
        status: messages
      };
    }
  }
);

export default cartReducer;
