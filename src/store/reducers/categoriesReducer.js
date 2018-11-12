import ActionTypes from '../actions/actionTypes';
import { createReducer } from '../helpers/reducerHelper';

const initialState = {
  selected: [],
  list: []
}

export const categoriesReducer = createReducer(
  [],
  {
    [ActionTypes.FETCH_CATEGORIES]: (state, action) => {
      return action.payload
    },
    [ActionTypes.CATEGORY_SELECTED]: (state = initialState, action) => {
      const beforeSelected = state.selected ? [...state.selected, action.payload.id] : [action.payload.id];

      return {
        ...state,
        selected: beforeSelected
      }
    },
    [ActionTypes.CATEGORY_UNSELECTED]: (state, action) => {
      const selectedList = [...state.list];
      const index = state.list.findIndex(elem => action.payload.id === elem.id);
      selectedList[index].checked = false;

      const newSelected = state.selected.filter(elem => action.payload.id !== elem);

      return {
        list: selectedList,
        selected: newSelected
      }
    },
    [ActionTypes.CATEGORY_SHOW_ERROR]: (state, action) => {
      return action.payload;
    }
  })



// (state = { list: [], selectedCategories: [] }, action) => {
// switch (action.type) {
//   case FETCH_CATEGORIES: {
//     console.log('FETCH', state, action);
//     return {
//       ...state,
//       list: action.payload
//     }
//   }
//   case "CATEGORY_SELECTED": {
//     return { ...state, selectedCategories: [...state.selectedCategories, action.payload] }
//   }
//   case "CATEGORY_UNSELECTED": {
//     const index = findIndex(state.selectedCategories, { id: action.payload.id });

//     if (index >= 0) {
//       return [
//         ...state,
//         ...state.selectedCategories.slice(0, index),
//         ...state.selectedCategories.slice(index + 1)
//       ]
//     }
//     return state;
//   }
//   default:
//     return state;
// }
// }

export default categoriesReducer;