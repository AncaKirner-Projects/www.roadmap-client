import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureMockStore from 'redux-mock-store';
import Button from '@material-ui/core/Button';
import AlertDialog from '../../../src/components/main/AlertDialog';
import CardElement from '../../../src/components/main/CardElement';
import ActionTypes from '../../../src/store/actions/actionTypes';

const UnwrappedCard = CardElement.WrappedComponent;
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
    addToCart: jest.fn(),
    deleteCartStatusMessage: jest.fn()
  };

  it('renders an element card', () => {
    const wrapper = shallow(<CardElement product={product} store={store} />);
    const component = wrapper.dive();

    expect(toJson(component)).toMatchSnapshot();
  });

  it('handleAddToCart', () => {
    const wrapper = shallow(<UnwrappedCard {...props} product={product} />);
    wrapper.find(Button).simulate('click');

    expect(props.addToCart).toHaveBeenCalled();
  });

  it('handleAlertDialogClose', () => {
    const wrapper = shallow(<UnwrappedCard {...props} product={product} />);
    const component = wrapper.instance();
    component.handleAlertDialogClose = jest.fn();

    wrapper.find(AlertDialog).simulate('handleClose');

    expect(props.deleteCartStatusMessage).toHaveBeenCalled();
  });
});
