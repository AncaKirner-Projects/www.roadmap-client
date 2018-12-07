import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureMockStore from 'redux-mock-store';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CartElement from '../../../../src/components/main/cart/CartElement';
import ResponsiveAlertDialog from '../../../../src/components/main/ResponsiveAlertDialog';

const mockStore = configureMockStore();
const UnwrappedComponent = CartElement.WrappedComponent;

describe('<CartElement />', () => {
  const store = mockStore({});

  const props = {
    changeQuantity: jest.fn(),
    deleteFromCart: jest.fn()
  };
  const product = {
    id: 1,
    prod_name: 'Prod1',
    prod_number: 15,
    quantity: 2
  };

  it('renders an element', () => {
    const wrapper = shallow(<CartElement store={store} product={product} />);
    const component = wrapper.dive();

    expect(toJson(component)).toMatchSnapshot();
  });

  it('handleAlertDialogClose', () => {
    const wrapper = shallow(<CartElement {...props} store={store} product={product} />);
    const component = wrapper.dive();

    component.setState({ openAlertDialog: true });
    component.find(ResponsiveAlertDialog).simulate('handleClose');

    expect(component.state('openAlertDialog')).toEqual(false);
  });

  it('handleConfirmation', () => {
    const wrapper = shallow(<CartElement {...props} store={store} product={product} />);
    const component = wrapper.dive();

    component.setState({ openAlertDialog: false });
    component.find(Button).simulate('click');

    expect(component.state('openAlertDialog')).toEqual(true);
  });

  it('handleRemoveFromCart', () => {
    const wrapper = shallow(<UnwrappedComponent {...props} product={product} />);

    wrapper.setState({ openAlertDialog: true });
    wrapper.find(ResponsiveAlertDialog).simulate('handleConfirmClose');

    expect(wrapper.state('openAlertDialog')).toEqual(false);
    expect(props.deleteFromCart).toHaveBeenCalled();
    expect(props.deleteFromCart).toHaveBeenCalledWith(product);
  });

  it('handleQuantityChange', () => {
    const wrapper = shallow(<UnwrappedComponent {...props} product={product} />);

    wrapper.find(TextField).simulate('change', {
      target: { value: 2 },
      preventDefault: () => { }
    });

    expect(wrapper.state('quantity')).toEqual(2);
    expect(props.changeQuantity).toHaveBeenCalled();
    expect(props.changeQuantity).toHaveBeenCalledWith(product, 2);
  });
});
