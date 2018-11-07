
const CategoryController = {
  getAllCategories() {
    return fetch('http://localhost:8000/categories')
      .then((res) => res.json())
      .catch((err) => {
        console.log('ERROR', err);
      });
  }
}

export default CategoryController;  