import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../../src/store/actions/categoryActions';
import ActionTypes from '../../../src/store/actions/actionTypes';

const mockResponse = (status, statusText, response) => new Response(response, {
  status,
  statusText,
  headers: {
    'Content-type': 'application/json'
  }
});

let store;
const mockStoreObj1 = {
  categories: {
  },
  products: {
    all: []
  }
};

const mockStoreObj2 = {
  categories: {
    selected: [2]
  },
  products: {
    all: []
  }
};

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('getAllCategories', () => {
  const payload = {
    list: [
      {
        id: 1,
        name: 'Categ1',
        checked: false
      }
    ]
  };

  it('FETCH_PRODUCTS success', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve(
      mockResponse(200, null, `[{
        "id": 1,
        "category_name": "Categ1"
      }]`)
    ));

    const expectedActions = {
      type: ActionTypes.FETCH_CATEGORIES,
      payload
    };

    const dispatch = (action) => {
      expect(action).toEqual(expectedActions);
    };

    actions.getAllCategories()(dispatch);
  });

  it('FETCH_CATEGORIES error', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.reject(
      mockResponse(400, 'Test Error!', `{
        "status":400,
        "statusText": "Test Error!"}
      `)
    ));

    const expectedActions = {
      type: ActionTypes.CATEGORY_SHOW_ERROR,
      payload: 'Test Error!'
    };

    const dispatch = (action) => {
      expect(action).toEqual(expectedActions);
    };

    actions.getAllCategories()(dispatch);
  });
});

describe('selectCategory', () => {
  afterEach(() => {
    store.clearActions();
  });

  it('selectCategory when are none selected', () => {
    const expectedActions = [{
      type: ActionTypes.CATEGORY_SELECTED,
      payload: {
        checked: true,
        category: {
          id: 1
        },
        products: []
      }
    }];

    store = mockStore(mockStoreObj1);
    store.dispatch(actions.selectCategory({ id: 1 }, true));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('selectCategory when are more selected', () => {
    const expectedActions = [{
      type: ActionTypes.CATEGORY_SELECTED,
      payload: {
        checked: true,
        category: {
          id: 2
        },
        products: []
      }
    }];

    store = mockStore(mockStoreObj2);
    store.dispatch(actions.selectCategory({ id: 2 }, true));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('selectCategory unselect', () => {
    const expectedActions = [{
      type: ActionTypes.CATEGORY_SELECTED,
      payload: {
        checked: false,
        category: {
          id: 2
        },
        products: []
      }
    }];

    store = mockStore(mockStoreObj2);
    store.dispatch(actions.selectCategory({ id: 2 }, false));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
