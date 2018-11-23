import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureMockStore from 'redux-mock-store';
import ProductDescription from '../../../src/components/main/ProductDescription';
import ActionTypes from '../../../src/store/actions/actionTypes';

const mockStore = configureMockStore();

describe('<ProductDescription />', () => {
  const store = mockStore({
    classes: {},
    products: {
      all: [
        { id: 1, prod_name: 'Prod1' }
      ]
    },
    cart: {
      status: [
        {
          type: ActionTypes.ADD_TO_CART,
          message: 'Test message'
        }
      ]
    }
  });

  const props = {
    match: {
      params: {
        id: 1
      }
    },
    addToCart: jest.fn(),
    deleteCartStatusMessage: jest.fn()
  };

  it('renders an element', () => {
    const wrapper = shallow(<ProductDescription store={store} {...props} />);
    const component = wrapper.dive().dive();

    expect(toJson(component)).toMatchSnapshot();
  });
});
