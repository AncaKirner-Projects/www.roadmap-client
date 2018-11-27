import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureMockStore from 'redux-mock-store';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import { ValidatorForm, SelectValidator } from 'react-material-ui-form-validator';
import AlertDialog from '../../../src/components/main/AlertDialog';
import AddProduct from '../../../src/components/main/AddProduct';
import ActionTypes from '../../../src/store/actions/actionTypes';

const UnwrappedComponent = AddProduct.WrappedComponent;
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
    open: false,
    addProduct: jest.fn(),
    deleteStatusMessage: jest.fn()
  };

  it('renders an element', () => {
    const wrapper = shallow(<AddProduct {...props} store={store} />);
    const component = wrapper.dive();

    expect(toJson(component)).toMatchSnapshot();
  });

  it('handleClickOpen', () => {
    const wrapper = shallow(<AddProduct {...props} store={store} />);
    const component = wrapper.dive();

    component.find(IconButton).simulate('click');

    expect(component.state('open')).toEqual(true);
  });

  it('handleClose', () => {
    const wrapper = shallow(<AddProduct {...props} store={store} />);
    const component = wrapper.dive();

    component.find(Dialog).simulate('close');

    expect(component.state('open')).toEqual(false);
    expect(component.state().formData.category).toBe(0);
  });

  it('handleCreateProduct', () => {
    const wrapper = shallow(<UnwrappedComponent {...props} />);
    wrapper.find(ValidatorForm).simulate('submit');

    expect(props.addProduct).toHaveBeenCalled();
  });

  it('handleChange', () => {
    const wrapper = shallow(<UnwrappedComponent {...props} store={store} />);
    wrapper.find(SelectValidator).simulate('change', { target: { value: 2 } });

    expect(wrapper.state().formData.category).toBe(2);
  });

  it('handleAlertDialogClose  ', () => {
    const wrapper = shallow(<UnwrappedComponent {...props} />);
    wrapper.find(AlertDialog).simulate('handleClose');

    expect(props.deleteStatusMessage).toHaveBeenCalled();
  });
});
