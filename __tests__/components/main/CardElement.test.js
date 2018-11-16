import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import CardStyle from '../../../src/components/main/CardElement';

describe('<CardElement />', () => {
  const props = {
    prod_name: 'Test Product',
    prod_description: 'Product description',
    price: 23.6
  };

  it('renders an element card', () => {
    const tree = shallow(<CardStyle product={props} />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
