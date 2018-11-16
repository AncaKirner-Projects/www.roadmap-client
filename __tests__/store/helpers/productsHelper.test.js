// import lodash from 'lodash/uniqBy';
import {
  getUniqueProducts,
  getUniqueProductsByCategories
} from '../../../src/store/helpers/productsHelper';

describe('productsHelper', () => {
  const products = [
    { id: 1, category_id: 1 },
    { id: 2, category_id: 2 },
    { id: 1, category_id: 2 },
    { id: 3, category_id: 3 }
  ];
  const categories = [1, 2];

  it('test getUniqueProducts returns unique elements', () => {
    const expectRes = [
      { id: 1, category_id: 1 },
      { id: 2, category_id: 2 },
      { id: 3, category_id: 3 }
    ];
    const uniqProd = getUniqueProducts(products);

    expect(uniqProd).toEqual(expectRes);
  });

  it('test getUniqueProductsByCategories returns unique elements', () => {
    const expectRes = [
      { id: 1, category_id: 1 },
      { id: 2, category_id: 2 }
    ];

    const uniqProd = getUniqueProductsByCategories(products, categories);
    expect(uniqProd).toEqual(expectRes);
  });
});
