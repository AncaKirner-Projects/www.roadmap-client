import React from 'react';
import { shallow } from 'enzyme';
import thunk from 'redux-thunk';
import toJson from 'enzyme-to-json';
import configureMockStore from 'redux-mock-store';
import Button from '@material-ui/core/Button';
import CardElement from '../../../src/components/main/CardElement';
import ActionTypes from '../../../src/store/actions/actionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore();

describe('<CardElement />', () => {
  const store = mockStore({
    cart: {
      status: [
        {
          type: ActionTypes.ADD_TO_CART,
          message: 'Test message'
        }
      ]
    }
  });

  const product = {
    prod_name: 'Test Product',
    prod_description: 'Product description',
    price: 23.6
  };
  const props = {
    addToCart: jest.fn()
  };

  it('renders an element card', () => {
    const wrapper = shallow(<CardElement product={product} store={store} />);
    const component = wrapper.dive();

    expect(toJson(component)).toMatchSnapshot();
  });

  it('handleAddToCart', () => {
    const wrapper = shallow(<CardElement {...props} product={product} store={store} />);
    const component = wrapper.dive();
    const button = component.find(Button);
    // jest.spyOn(wrapper.instance(), 'addToCart');
    // button.props().onClick('');
    // expect(props.addToCart.mock.calls.length).toBe(0);
    console.log(props.addToCart.mock.calls);
    button.props().onClick();
    // expect(props.addToCart.mock.calls.length).toBe(1);
    // simulate('click', { handleAddToCart() { } });

    expect(props.addToCart).toHaveBeenCalled();
  });

  // it('handleAlertDialogClose', () => {
  //   const wrapper = shallow(<CardStyle product={props} store={store} />);
  //   const component = wrapper.dive();
  // });
});
