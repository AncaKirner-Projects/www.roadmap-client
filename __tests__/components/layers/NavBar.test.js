import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import NavBar from '../../../src/components/layers/NavBar';

describe('<NavBar />', () => {
  const props = {
    classes: {
      appBar: {},
      appBarShift: {},
      menuButton: {},
      hide: {}
    }
  };
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<NavBar classes={props.classes} />);
  });

  it('renders 1 component', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders 1 <AppBar/> component', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
