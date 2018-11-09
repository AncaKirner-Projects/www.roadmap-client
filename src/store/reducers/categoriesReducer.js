import findIndex from 'lodash/findIndex';
import ActionTypes from '../actions/actionTypes';
import { createReducer } from '../helpers/reducerHelper';

export const categoriesReducer = createReducer(
  { list: [], selected: [] },
  {
    [ActionTypes.FETCH_CATEGORIES]: (state, action) => {
      return action.payload
    },
    [ActionTypes.CATEGORY_SELECTED]: (state, action) => {
      console.log('reducer ', state, action, state.selectedCategories, action.payload);
      return {
        ...state,
        selected: [...state.selected, action.payload]
      }
    },
    [ActionTypes.CATEGORY_UNSELECTED]: (state, action) => {
      const index = findIndex(state.selectedCategories, { id: action.payload.id });

      if (index >= 0) {
        return [
          ...state,
          ...state.selectedCategories.slice(0, index),
          ...state.selectedCategories.slice(index + 1)
        ]
      }
      return state;
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