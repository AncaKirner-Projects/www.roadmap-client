import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureMockStore from 'redux-mock-store';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Categories from '../../../src/components/main/Categories';
import 'jest-styled-components';

const UnwrappedComponent = Categories.WrappedComponent;
const mockStore = configureMockStore();
const store = mockStore({
  selectCategory: jest.fn(),
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

  // it('handleChange', () => {
  //   const props = {
  //     selectCategory: jest.fn(),
  //     categories: [
  //       {
  //         id: 1,
  //         name: 'Categ1',
  //         checked: true
  //       }
  //     ]
  //   };
  //   const wrapper = shallow(<UnwrappedComponent {...props} />);
  //   wrapper.find(FormControlLabel).simulate('change', { target: { checked: true } });

  //   expect(props.selectCategory).toHaveBeenCalled();
  // });
});
