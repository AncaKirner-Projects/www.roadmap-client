import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import categoriesReducer from './categoriesReducer';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer
});

export default rootReducer;
