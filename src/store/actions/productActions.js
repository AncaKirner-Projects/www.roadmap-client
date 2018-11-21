import ActionTypes, { showError } from './actionTypes';

const getAllProducts = () => (dispatch) => {
  fetch('http://localhost:8000/products')
    .then(res => res.json())
    .then((data) => {
      dispatch({
        type: ActionTypes.FETCH_PRODUCTS,
        payload: data
      });
    })
    .catch((err) => {
      dispatch(showError(err.statusText ? err.statusText : err, ActionTypes.PRODUCTS_SHOW_ERROR));
    });
};

export const addProduct = product => (dispatch) => {
  fetch('http://localhost:8000/products', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(product)
  }).then(res => res.json())
    .then((data) => {
      dispatch({
        type: ActionTypes.ADD_PRODUCT,
        payload: Object.assign(data, product),
        status: {
          type: ActionTypes.ADD_PRODUCT,
          message: 'The product was succesfully added into Database.'
        }
      });
    })
    .catch((err) => {
      console.log('******', err);
      dispatch(showError(err.statusText ? err.statusText : err, ActionTypes.PRODUCTS_SHOW_ERROR));
    });
};

export const deleteStatusMessage = type => (dispatch) => {
  dispatch({
    type: ActionTypes.DELETE_STATUS_MESSAGE,
    payload: type
  });
};

export default getAllProducts;
