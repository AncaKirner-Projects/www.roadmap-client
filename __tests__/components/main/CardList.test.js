import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureMockStore from 'redux-mock-store';
import CardList from '../../../src/components/main/CardList';

const mockStore = configureMockStore();

describe('<CardList />', () => {
  it('renders a card list', () => {
    const store = mockStore({
      categories: {
      },
      products: {
        uniq: [
          {
            id: 1,
            prod_name: 'Test Product',
            prod_description: 'Product description',
            price: 23.6
          }
        ]
      }
    });

    const wrapper = shallow(<CardList store={store} />);
    const component = wrapper.dive();

    expect(toJson(component)).toMatchSnapshot();
  });

  it('renders a card list when categories selected', () => {
    const store = mockStore({
      categories: {
        selectedProducts: [
          {
            id: 1,
            prod_name: 'Test Product',
            prod_description: 'Product description',
            price: 23.6
          }
        ]
      }
    });
    const wrapper = shallow(<CardList store={store} />);
    const component = wrapper.dive();

    expect(toJson(component)).toMatchSnapshot();
  });
});
