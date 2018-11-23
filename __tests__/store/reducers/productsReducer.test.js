import productsReducer from '../../../src/store/reducers/productsReducer';
import ActionTypes from '../../../src/store/actions/actionTypes';

const products = [
  { id: 1, product_name: 'Prod1', category_id: 1 },
  { id: 2, product_name: 'Prod2', category_id: 1 },
  { id: 1, product_name: 'Prod1', category_id: 2 }
];

const uniqProducts = [
  { id: 1, product_name: 'Prod1', category_id: 1 },
  { id: 2, product_name: 'Prod2', category_id: 1 }
];

const status = {
  type: ActionTypes.ADD_PRODUCT,
  message: 'Test message'
};

const state = {
  all: products
};

describe('Products Reducer', () => {
  it('has a default state', () => {
    expect(productsReducer(undefined, { type: 'unexpected' })).toEqual([]);
  });

  it('can handle FETCH_PRODUCTS', () => {
    const expectResult = {
      all: products,
      uniq: uniqProducts
    };

    expect(productsReducer(undefined, {
      type: ActionTypes.FETCH_PRODUCTS,
      payload: products
    })).toEqual(expectResult);
  });

  it('can handle ADD_PRODUCT', () => {
    const newProduct = { id: 3, product_name: 'Prod3', category_id: 2 };
    const expectResult = {
      all: [...products, newProduct],
      uniq: [...uniqProducts, newProduct],
      status: [status]
    };

    expect(productsReducer(state, {
      type: ActionTypes.ADD_PRODUCT,
      payload: newProduct,
      status
    })).toEqual(expectResult);
  });

  it('can handle DELETE_STATUS_MESSAGE', () => {
    const state1 = {
      status: [
        status
      ]
    };
    const expectResult = {
      status: []
    };
    expect(productsReducer(state1, {
      type: ActionTypes.DELETE_STATUS_MESSAGE,
      payload: ActionTypes.ADD_PRODUCT
    })).toEqual(expectResult);
  });
});
