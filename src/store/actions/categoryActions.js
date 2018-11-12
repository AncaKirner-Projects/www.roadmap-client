import ActionTypes from '../actions/actionTypes';

export const showError = () => {
  return {
    type: ActionTypes.SHOW_ERROR,
    payload: 'ERROR!!'
  }
};
export const getAllCategories = () => {
  return (dispatch) => {
    fetch('http://localhost:8000/categories')
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: ActionTypes.FETCH_CATEGORIES,
          payload: {
            list: data.map((category) => {
              return {
                id: category.id,
                name: category.category_name,
                checked: false
              }
            })
          }
        });
      })
      .catch((err) => {
        dispatch({ type: ActionTypes.CATEGORY_SHOW_ERROR, payload: err });
      });
  }
};
export const selectCategory = (category) => {
  return {
    type: ActionTypes.CATEGORY_SELECTED,
    payload: category
  }
};

export const unselectCategory = (category) => {
  return {
    type: ActionTypes.CATEGORY_UNSELECTED,
    payload: category
  }
};