const ActionTypes = {
  SHOW_ERROR: 'category:showError',
  FETCH_CATEGORIES: 'categories:getAllCategories',
  CATEGORY_SELECTED: 'categories:selectCategory',
  CATEGORY_UNSELECTED: 'categories:unselectCategory',
  CATEGORY_SHOW_ERROR: 'categories:showError',
  FETCH_PRODUCTS: 'products:getAllProducts',
  ADD_PRODUCT: 'products:addProduct',
  PRODUCTS_SHOW_ERROR: 'products:showError',
  DELETE_STATUS_MESSAGE: 'products:deleteStatusMessage',
  ADD_TO_CART: 'cart:addToCart',
  DELETE_CART_STATUS_MESSAGE: 'products:deleteCartStatusMessage'
};

export const showError = (err, errType) => ({
  type: errType,
  payload: err
});

export default ActionTypes;
