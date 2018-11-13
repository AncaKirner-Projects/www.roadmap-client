import ActionTypes, { showError } from './actionTypes';
import { getUniqueProducts } from '../helpers/productsHelper';

const getAllProducts = () => {
  return (dispatch) => {
    fetch('http://localhost:8000/products')
      .then(res => res.json())
      .then((data) => {
        dispatch({
          type: ActionTypes.FETCH_PRODUCTS,
          payload: {
            all: data,
            uniq: getUniqueProducts(data)
          }
        });
      })
      .catch((err) => {
        dispatch(showError(err));
      });
  };
};

export default getAllProducts;
