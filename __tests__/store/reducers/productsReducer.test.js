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
});
