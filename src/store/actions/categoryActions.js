import ActionTypes from '../actions/actionTypes';

export const showError = () => {
  return {
    type: ActionTypes.SHOW_ERROR,
    payload: 'ERROR!!'
  }
};
export const getAllCategories = () => {
  return (dispatch, getState) => {
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
        // dispatch(SHOW_ERROR);
        console.log('ERROR', err);
      });
  }
};
export const selectCategory = (category) => {
  return {
    type: ActionTypes.CATEGORY_SELECTED,
    payload: category
  }
};