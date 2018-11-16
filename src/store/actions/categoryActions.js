import ActionTypes, { showError } from './actionTypes';
import { getUniqueProductsByCategories } from '../helpers/productsHelper';

export const getAllCategories = () => {
  return (dispatch) => {
    fetch('http://localhost:8000/categories')
      .then(res => res.json())
      .then((data) => {
        dispatch({
          type: ActionTypes.FETCH_CATEGORIES,
          payload: {
            list: data.map((category) => {
              return {
                id: category.id,
                name: category.category_name,
                checked: false
              };
            })
          }
        });
      })
      .catch((err) => {
        dispatch(showError(err, ActionTypes.CATEGORY_SHOW_ERROR));
      });
  };
};

export const selectCategory = (category, checked) => (dispatch, getState) => {
  const { categories, products } = getState();
  let selected;

  if (checked) {
    selected = categories.selected ? [...categories.selected, category.id] : [category.id];
  } else {
    selected = categories.selected.filter(elem => category.id !== elem);
  }
  const uniqProducts = getUniqueProductsByCategories(products.all, selected);

  dispatch({
    type: ActionTypes.CATEGORY_SELECTED,
    payload: {
      checked,
      category,
      products: uniqProducts
    }
  });
};
