const ActionTypes = {
  SHOW_ERROR: 'category:showError',
  FETCH_CATEGORIES: 'categories:getAllCategories',
  CATEGORY_SELECTED: 'categories:selectCategory',
  CATEGORY_UNSELECTED: 'categories:unselectCategory',
  CATEGORY_SHOW_ERROR: 'categories:showError',
  FETCH_PRODUCTS: 'products:getAllProducts'
};

export const showError = (err) => {
  return {
    type: ActionTypes.SHOW_ERROR,
    payload: 'ERROR!! '.concat(err)
  };
};

export default ActionTypes;
