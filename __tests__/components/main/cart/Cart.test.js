import React from 'react';
import { shallow } from 'enzyme';
import thunk from 'redux-thunk';
import toJson from 'enzyme-to-json';
import configureMockStore from 'redux-mock-store';
import Cart from '../../../../src/components/main/cart/Cart';
// import ActionTypes from '../../../src/store/actions/actionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore();

describe('<Cart />', () => {
  const store = mockStore({
    cart: {
      products: [
        { id: 1, prod_name: 'Prod1' }
      ]
    }
  });

  it('renders an element', () => {
    const wrapper = shallow(<Cart store={store} />);
    const component = wrapper.dive();

    expect(toJson(component)).toMatchSnapshot();
  });
});
