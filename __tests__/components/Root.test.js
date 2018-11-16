import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureMockStore from 'redux-mock-store';
import Root from '../../src/components/Root';

const mockStore = configureMockStore();
const store = mockStore();

describe('<Root />', () => {
  it('renders the component', () => {
    const wrapper = shallow(<Root store={store} />);
    const component = wrapper.dive();

    expect(toJson(component)).toMatchSnapshot();
  });
});
