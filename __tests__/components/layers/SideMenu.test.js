import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureMockStore from 'redux-mock-store';
import SideMenu from '../../../src/components/layers/SideMenu';

const mockStore = configureMockStore();
const store = mockStore();

describe('<SideMenu />', () => {
  const props = {
    classes: {
      toolbar: {},
      drawer: {},
      drawerOpen: {},
      drawerClose: {}
    },
    theme: {
      direction: 'ltl'
    }
  };
  it('renders the component', () => {
    const wrapper = shallow(<SideMenu store={store} classes={props.classes} theme={props.theme} />);
    const component = wrapper.dive();

    expect(toJson(component)).toMatchSnapshot();
  });
});
