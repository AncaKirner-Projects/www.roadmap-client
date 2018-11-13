import uniqBy from 'lodash/uniqBy';

export const getUniqueProductsByCategories = (products, categories = []) => {
  const allCategoryProducts = products.filter((product) => {
    const res = categories.map(id => product.category_id === id);
    return res.some(elem => elem === true);
  });

  return uniqBy(allCategoryProducts, 'id');
};

export const getUniqueProducts = products => uniqBy(products, 'id');
