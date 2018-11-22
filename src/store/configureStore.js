import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import throttle from 'lodash/throttle';
import rootReducer from './reducers/rootReducer';
import { loadState, saveState } from './localStorage';

const persistedState = loadState();
const store = createStore(
  rootReducer,
  persistedState,
  compose(
    applyMiddleware(thunk),
    // window.devToolsExtension && window.devToolsExtension()
  )
);

store.subscribe(throttle(() => {
  saveState({
    cart: {
      products: store.getState().cart.products
    }
  });
}, 1000));

export default store;
