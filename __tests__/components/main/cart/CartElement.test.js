import React from 'react';
import { shallow } from 'enzyme';
import thunk from 'redux-thunk';
import toJson from 'enzyme-to-json';
import configureMockStore from 'redux-mock-store';
import CartElement from '../../../../src/components/main/cart/CartElement';
// import ActionTypes from '../../../src/store/actions/actionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore();

describe('<CartElement />', () => {
  const store = mockStore({
    cart: {
      products: [
        { id: 1, prod_name: 'Prod1' }
      ]
    }
  });

  it('renders an element', () => {
    const product = {
      id: 1,
      prod_name: 'Prod1',
      prod_number: 15,
      quantity: 2
    };
    const wrapper = shallow(<CartElement store={store} product={product} />);
    const component = wrapper.dive();

    expect(toJson(component)).toMatchSnapshot();
  });
});
