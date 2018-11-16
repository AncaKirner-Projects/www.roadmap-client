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
      dispatch(showError(err));
    });
};

export default getAllProducts;
