import cartReducer from '../../../src/store/reducers/cartReducer';
import ActionTypes from '../../../src/store/actions/actionTypes';

describe('cartReducer', () => {
  describe('ADD_TO_CART', () => {
    const status = {
      type: ActionTypes.ADD_TO_CART,
      message: 'The product was added into cart'
    };
    const product = { id: 3, product_name: 'Prod3', category_id: 2 };

    it('can handle empty products', () => {
      const state = {};
      const expectResult = {
        products: [
          { ...product, quantity: 1 }
        ],
        status: [status]
      };
      expect(cartReducer(state, {
        type: ActionTypes.ADD_TO_CART,
        payload: product,
        status
      })).toEqual(expectResult);
    });

    it('can handle products added -> product not found', () => {
      const oldStatus = {
        type: ActionTypes.DELETE_FROM_CART,
        message: 'The product was removed from cart'
      };
      const state = {
        products: [
          { id: 2, product_name: 'Prod2', category_id: 1, quantity: 1 }
        ],
        status: [
          oldStatus
        ]
      };
      const expectResult = {
        products: [
          ...state.products,
          { ...product, quantity: 1 }
        ],
        status: [oldStatus, status]
      };

      expect(cartReducer(state, {
        type: ActionTypes.ADD_TO_CART,
        payload: product,
        status
      })).toEqual(expectResult);
    });

    it('can handle products added -> product found', () => {
      const state = {
        products: [
          { id: 3, product_name: 'Prod3', category_id: 2, quantity: 2 }
        ]
      };

      const expectResult = {
        products: [
          { ...product, quantity: 3 }
        ],
        status: [status]
      };

      expect(cartReducer(state, {
        type: ActionTypes.ADD_TO_CART,
        payload: product,
        status
      })).toEqual(expectResult);
    });
  });

  it('can handle CHANGE_PRODUCT_QUANTITY', () => {
    const product = { id: 3, product_name: 'Prod3', category_id: 2, quantity: 2 };
    const newProduct = { id: 3, product_name: 'Prod3', category_id: 2, quantity: 5 };

    const state = {
      products: [
        product
      ]
    };
    const expectResult = {
      products: [
        newProduct
      ]
    };

    expect(cartReducer(state, {
      type: ActionTypes.CHANGE_PRODUCT_QUANTITY,
      payload: {
        product,
        newQuantity: 5
      }
    })).toEqual(expectResult);
  });

  it('can handle DELETE_FROM_CART', () => {
    const productToDelete = { id: 3, product_name: 'Prod3', category_id: 2, quantity: 2 };
    const state = {
      products: [productToDelete]
    };
    const expectResult = {
      products: []
    };

    expect(cartReducer(state, {
      type: ActionTypes.DELETE_FROM_CART,
      payload: productToDelete
    })).toEqual(expectResult);
  });

  it('can handle DELETE_CART_STATUS_MESSAGE', () => {
    const state = {
      status: [{
        type: ActionTypes.ADD_TO_CART,
        message: 'Test message'
      }]
    };
    const expectResult = {
      status: []
    };
    expect(cartReducer(state, {
      type: ActionTypes.DELETE_CART_STATUS_MESSAGE,
      payload: ActionTypes.ADD_TO_CART
    })).toEqual(expectResult);
  });
});
