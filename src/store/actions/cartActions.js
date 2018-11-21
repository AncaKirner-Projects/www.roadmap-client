import ActionTypes from './actionTypes';

export const addToCart = product => (dispatch) => {
  dispatch({
    type: ActionTypes.ADD_TO_CART,
    payload: product,
    status: {
      type: ActionTypes.ADD_TO_CART,
      message: 'The product was added into cart'
    }
  });
};

export const deleteCartStatusMessage = type => (dispatch) => {
  dispatch({
    type: ActionTypes.DELETE_CART_STATUS_MESSAGE,
    payload: type
  });
};
