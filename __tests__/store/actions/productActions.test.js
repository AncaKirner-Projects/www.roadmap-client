import getAllProducts from '../../../src/store/actions/productActions';
import ActionTypes from '../../../src/store/actions/actionTypes';

const mockResponse = (status, statusText, response) => new Response(response, {
  status,
  statusText,
  headers: {
    'Content-type': 'application/json'
  }
});

const payload = [
  {
    id: 1,
    prod_name: 'Prod1',
    prod_description: 'New description 1',
    price: '2.00',
    prod_number: 15,
    category_id: 1
  }
];

describe('productActions', () => {
  it('FETCH_PRODUCTS success', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve(
      mockResponse(200, null, `[{
        "id": 1,
        "prod_name": "Prod1",
        "prod_description": "New description 1",
        "price": "2.00",
        "prod_number": 15,
        "category_id": 1
      }]`)
    ));

    const expectedActions = {
      type: ActionTypes.FETCH_PRODUCTS,
      payload
    };

    const dispatch = (action) => {
      expect(action).toEqual(expectedActions);
    };

    getAllProducts()(dispatch);
  });

  it('FETCH_PRODUCTS error', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.reject(
      mockResponse(400, 'Test Error!', `{
        "status":400,
        "statusText": "Test Error!"}
      `)
    ));

    const expectedActions = {
      type: ActionTypes.PRODUCTS_SHOW_ERROR,
      payload: 'Test Error!'
    };

    const dispatch = (action) => {
      expect(action).toEqual(expectedActions);
    };

    getAllProducts()(dispatch);
  });
});
