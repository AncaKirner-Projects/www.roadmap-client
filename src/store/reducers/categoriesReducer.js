import ActionTypes from '../actions/actionTypes';
import createReducer from '../helpers/reducerHelper';
import selectCategoryList from '../helpers/categoriesHelper';

const initialState = {
  selected: [],
  list: []
};

const categoriesReducer = createReducer(
  [],
  {
    [ActionTypes.FETCH_CATEGORIES]: (state, action) => action.payload,
    [ActionTypes.CATEGORY_SELECTED]: (state = initialState, action) => {
      let newSelected;
      if (action.payload.checked) {
        newSelected = state.selected ? [...state.selected, action.payload.category.id]
          : [action.payload.category.id];
      } else {
        newSelected = state.selected.filter(elem => action.payload.category.id !== elem);
      }

      return {
        list: selectCategoryList(state, action, action.payload.checked),
        selected: newSelected,
        selectedProducts: action.payload.products
      };
    },
    [ActionTypes.CATEGORY_SHOW_ERROR]: (state, action) => {
      throw new Error(`ERROR: ${action.payload}`);
    }
  },
);

export default categoriesReducer;
