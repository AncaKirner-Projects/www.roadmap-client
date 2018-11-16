import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import getAllProducts from '../../../src/store/actions/productActions';
import ActionTypes from '../../../src/store/actions/actionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mockStoreObj = {
  products: {
    all: [],
    uniq: []
  }
};
const payload = [
  { id: 1, product_name: 'Prod1' }
];

describe('productActions', () => {
  // beforeEach(() => { // Runs before each test in the suite
  //   store.clearActions();
  // });
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('FETCH_PRODUCTS success', async () => {
    fetchMock.getOnce('http://localhost:8000/products', {
      payload,
      headers: { 'content-type': 'application/json' }
    });
    // fetchMock.mockResponse(JSON.stringify(payload));

    const expectedActions = {
      type: ActionTypes.FETCH_PRODUCTS,
      payload
    };
    const store = mockStore(mockStoreObj);

    return store.dispatch(getAllProducts())
    // .then(() => {
    // expect(store.getActions()).toEqual(expectedActions);
    // });
  });
});
