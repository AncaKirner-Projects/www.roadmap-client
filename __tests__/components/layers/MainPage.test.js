import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import MainPage from '../../../src/components/layers/MainPage';

describe('<NavBar />', () => {
  const props = {
    classes: {
      content: {},
      toolbar: {}
    }
  };
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<MainPage classes={props.classes} />);
  });

  it('renders 1 component', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders 1 <AppBar/> component', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
