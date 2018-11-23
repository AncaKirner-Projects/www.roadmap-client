import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureMockStore from 'redux-mock-store';
import AddProduct from '../../../src/components/main/AddProduct';
import ActionTypes from '../../../src/store/actions/actionTypes';

const mockStore = configureMockStore();

describe('<AddProduct />', () => {
  const store = mockStore({
    categories: {
      list: [
        { id: 1, name: 'Categ1' },
        { id: 2, name: 'Categ2' }
      ]
    },
    products: {
      status: [
        {
          type: ActionTypes.ADD_PRODUCT,
          message: 'Test message'
        }
      ]
    }
  });

  const props = {
    addProduct: jest.fn(),
    deleteStatusMessage: jest.fn()
  };

  it('renders an element', () => {
    const wrapper = shallow(<AddProduct {...props} store={store} />);
    const component = wrapper.dive();

    expect(toJson(component)).toMatchSnapshot();
  });
});
