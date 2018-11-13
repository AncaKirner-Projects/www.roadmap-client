import ActionTypes from '../actions/actionTypes';
import createReducer from '../helpers/reducerHelper';

const initialState = {
  selected: [],
  list: []
};

const selectCategoryList = (state, action, check) => {
  const selectedList = [...state.list];
  const index = state.list.findIndex(elem => action.payload.category.id === elem.id);
  selectedList[index].checked = check;

  return selectedList;
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
    [ActionTypes.CATEGORY_SHOW_ERROR]: (state, action) => action.payload
  },
);

export default categoriesReducer;
