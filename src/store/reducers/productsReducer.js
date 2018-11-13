import ActionTypes from '../actions/actionTypes';
import createReducer from '../helpers/reducerHelper';

const productsReducer = createReducer(
  [],
  {
    [ActionTypes.FETCH_PRODUCTS]: (state, action) => ({
      all: action.payload.all,
      uniq: action.payload.uniq
    })
  },
);

export default productsReducer;
