import {
  addToCart, changeQuantity, deleteFromCart, deleteCartStatusMessage
} from '../../../src/store/actions/cartActions';
import ActionTypes from '../../../src/store/actions/actionTypes';

describe('cartActions', () => {
  it('addToCart', () => {
    const product = {};
    const expectedActions = {
      type: ActionTypes.ADD_TO_CART,
      payload: product,
      status: {
        type: ActionTypes.ADD_TO_CART,
        message: 'The product was added into cart'
      }
    };

    const dispatch = (action) => {
      expect(action).toEqual(expectedActions);
    };

    addToCart(product)(dispatch);
  });

  it('changeQuantity', () => {
    const product = { id: 1, prod_name: 'Prod1' };
    const newQuantity = 5;
    const expectedActions = {
      type: ActionTypes.CHANGE_PRODUCT_QUANTITY,
      payload: {
        product,
        newQuantity
      }
    };

    const dispatch = (action) => {
      expect(action).toEqual(expectedActions);
    };

    changeQuantity(product, newQuantity)(dispatch);
  });

  it('deleteFromCart', () => {
    const product = { id: 1, prod_name: 'Prod1' };
    const expectedActions = {
      type: ActionTypes.DELETE_FROM_CART,
      payload: product
    };

    const dispatch = (action) => {
      expect(action).toEqual(expectedActions);
    };

    deleteFromCart(product)(dispatch);
  });

  it('deleteCartStatusMessage', () => {
    const type = ActionTypes.ADD_TO_CART;
    const expectedActions = {
      type: ActionTypes.DELETE_CART_STATUS_MESSAGE,
      payload: type
    };

    const dispatch = (action) => {
      expect(action).toEqual(expectedActions);
    };

    deleteCartStatusMessage(type)(dispatch);
  });
});
