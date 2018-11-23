import getAllProducts,
{ addProduct, deleteStatusMessage }
  from '../../../src/store/actions/productActions';
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
  describe('getAllProducts', () => {
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
        mockResponse(404, 'Test Error!', `{
        "status":404,
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

  describe('addProduct', () => {
    it('ADD_PRODUCT success', () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve(
        mockResponse(201, null, `{
          "id": 7
        }`)
      ));

      const product = {
        prod_name: 'Prod7',
        prod_description: 'New description 1',
        price: '2.00',
        prod_number: 15,
        category_id: 1
      };
      const expectedActions = {
        type: ActionTypes.ADD_PRODUCT,
        payload: { id: 7, ...product },
        status: {
          type: ActionTypes.ADD_PRODUCT,
          message: 'The product was succesfully added into Database.'
        }
      };

      const dispatch = (action) => {
        expect(action).toEqual(expectedActions);
      };

      addProduct(product)(dispatch);
    });

    it('ADD_PRODUCT error', () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.reject(
        mockResponse(404, 'Test Error!', `{
          "status":404,
          "statusText": "Test Error!"}
        `)
      ));

      const product = {
        prod_name: 'Prod7',
        prod_description: 'New description 1',
        price: '2.00',
        prod_number: 15,
        category_id: 1
      };
      const expectedActions = {
        type: ActionTypes.PRODUCTS_SHOW_ERROR,
        payload: 'Test Error!'
      };

      const dispatch = (action) => {
        expect(action).toEqual(expectedActions);
      };

      addProduct(product)(dispatch);
    });
  });

  it('deleteStatusMessage', () => {
    const type = ActionTypes.ADD_PRODUCT;
    const expectedActions = {
      type: ActionTypes.DELETE_STATUS_MESSAGE,
      payload: type
    };

    const dispatch = (action) => {
      expect(action).toEqual(expectedActions);
    };

    deleteStatusMessage(type)(dispatch);
  });
});
