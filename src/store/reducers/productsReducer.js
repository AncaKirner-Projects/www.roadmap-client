import ActionTypes from '../actions/actionTypes';
import createReducer from '../helpers/reducerHelper';
import { getUniqueProducts } from '../helpers/productsHelper';

const productsReducer = createReducer(
  [],
  {
    [ActionTypes.FETCH_PRODUCTS]: (state, action) => ({
      all: action.payload,
      uniq: getUniqueProducts(action.payload)
    }),
    [ActionTypes.ADD_PRODUCT]: (state, action) => {
      const status = state.status ? [...state.status, action.status] : [action.status];

      return {
        all: [...state.all, action.payload],
        uniq: getUniqueProducts([...state.all, action.payload]),
        status
      };
    },
    [ActionTypes.ADD_TO_CHART]: (state, action) => {

    },
    [ActionTypes.DELETE_STATUS_MESSAGE]: (state, action) => {
      const messages = state.status.filter(elem => action.payload !== elem.type);

      return {
        ...state,
        status: messages
      };
    }
  },
);

export default productsReducer;
