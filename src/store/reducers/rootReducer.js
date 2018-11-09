import productsReducer from './productsReducer';
import categoriesReducer from './categoriesReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer
});

export default rootReducer;