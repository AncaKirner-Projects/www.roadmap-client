import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Categories from '../../../src/components/main/Categories';
import 'jest-styled-components';

const middlewares = [thunk];
const mockStore = configureMockStore();
const store = mockStore({
  selectCategory: jest.fn(() => { console.log('here'); }),
  categories: {
    list: [
      {
        id: 1,
        name: 'Categ1',
        checked: true
      },
      {
        id: 2,
        name: 'Categ2',
        checked: false
      }
    ],
    selected: [1]
  }
});

describe('<Categories />', () => {
  it('renders a card list', () => {
    const wrapper = shallow(<Categories store={store} />);
    const component = wrapper.dive().dive();

    expect(toJson(component)).toMatchSnapshot();
  });

  // it('handles a category check', () => {
  //   const wrapper = mount(<Categories store={store} />);
  //   const onChangeFake = jest.spyOn(wrapper.instance(), 'handleChange');

  //   wrapper.find('input[type="checkbox"][value="Categ1"]')
  //     .simulate('change', { target: { value: 'Categ1' } });
  //   expect(onChangeFake).toHaveBeenCalledTimes(1);
  // });
});
