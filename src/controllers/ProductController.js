
const ProductController = {
  getAllProducts() {
    return fetch('http://localhost:8000/products')
      .then((res) => res.json())
      .catch((err) => {
        console.log('ERROR', err);
      });
  },
  getAllProductsFromCategories(ids) {
    return fetch(`http://localhost:8000/products/categories/${ids}`)
      .then((res) => res.json())
      .catch(err => console.log(err));
  }
}

export default ProductController;  