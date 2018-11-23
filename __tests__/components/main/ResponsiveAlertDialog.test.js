import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ResponsiveAlertDialog from '../../../src/components/main/ResponsiveAlertDialog';

describe('<ResponsiveAlertDialog />', () => {
  const props = {
    fullScreen: false,
    open: true,
    handleClose: jest.fn(),
    handleConfirmClose: jest.fn()
  };

  it('renders an element', () => {
    const wrapper = shallow(<ResponsiveAlertDialog {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
