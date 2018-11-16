import ActionTypes from '../actions/actionTypes';
import createReducer from '../helpers/reducerHelper';
import { getUniqueProducts } from '../helpers/productsHelper';

const productsReducer = createReducer(
  [],
  {
    [ActionTypes.FETCH_PRODUCTS]: (state, action) => ({
      all: action.payload,
      uniq: getUniqueProducts(action.payload)
    })
  },
);

export default productsReducer;
