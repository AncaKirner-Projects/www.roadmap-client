import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import AlertDialog from '../../../src/components/main/AlertDialog';

describe('<AlertDialog />', () => {
  const props = {
    open: true,
    title: 'Alert',
    text: 'Alert text',
    handleClose: jest.fn()
  };

  it('renders an element', () => {
    const wrapper = shallow(<AlertDialog {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
