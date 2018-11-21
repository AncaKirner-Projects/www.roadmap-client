import ActionTypes from '../actions/actionTypes';
import createReducer from '../helpers/reducerHelper';

const cartReducer = createReducer(
  [],
  {
    [ActionTypes.ADD_TO_CHART]: (state, action) => {

    }
  },
);

export default cartReducer;
