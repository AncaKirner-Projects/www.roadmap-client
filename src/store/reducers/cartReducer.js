import ActionTypes from '../actions/actionTypes';
import createReducer from '../helpers/reducerHelper';

const cartReducer = createReducer(
  [],
  {
    [ActionTypes.ADD_TO_CART]: (state, action) => {
      const productList = state.products ? [...state.products, action.payload] : [action.payload];
      const status = state.status ? [...state.status, action.status] : [action.status];

      return {
        products: productList,
        status
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
