import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import categoriesReducer from './categoriesReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  chart: cartReducer
});

export default rootReducer;
