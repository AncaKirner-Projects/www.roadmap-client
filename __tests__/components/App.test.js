import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import App from '../../src/components/App';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore();

describe('<App />', () => {
  it('renders the component', () => {
    const wrapper = shallow(<App store={store} />);
    const component = wrapper.dive().dive().dive();
    console.log('testing');

    expect(toJson(component)).toMatchSnapshot();
  });
});
