const selectCategoryList = (state, action, check) => {
  let categoryList = [];

  if (state.list) {
    categoryList = [...state.list];
    const index = state.list.findIndex(elem => action.payload.category.id === elem.id);
    categoryList[index].checked = check;
  }

  return categoryList;
};

export default selectCategoryList;
