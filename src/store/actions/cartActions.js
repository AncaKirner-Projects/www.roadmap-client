import ActionTypes from './actionTypes';

const addToCart = product => (dispatch) => {
  dispatch({
    type: ActionTypes.ADD_TO_CHART,
    payload: product
  });
};

export default addToCart;
