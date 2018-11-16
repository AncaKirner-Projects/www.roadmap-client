import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import App from '../../src/components/App';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore();

describe('<App />', () => {
  it('ComponentDidMount', () => {
    // const spy = jest.spyOn(App.prototype, 'componentDidMount');
    // const wrapper = mount(<App />);
    // wrapper.instance().componentDidMount();
    // expect(spy).toHaveBeenCalled();
  });

  it('renders the component', () => {
    const spy = jest.spyOn(App.prototype, 'componentDidMount');
    const wrapper = shallow(<App store={store} />);
    const component = wrapper.dive().dive();

    expect(toJson(component)).toMatchSnapshot();
  });
});
