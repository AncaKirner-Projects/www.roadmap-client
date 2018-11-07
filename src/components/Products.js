import React, { Component } from 'react';
import Categories from './Categories';
import CardList from './CardList';
import ProductController from '../controllers/ProductController';
import CategoryController from '../controllers/CategoryController';

class Products extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      categories: []
    }
    this.onHandleCheckCategory = this.onHandleCheckCategory.bind(this);
  }

  onHandleCheckCategory(e) {
    let categories = this.state.categories;

    categories.forEach(category => {
      if (category.id === parseInt(e.target.value)) {
        category.checked = e.target.checked;

      }
    })
    this.setState({ categories: categories });
  }

  componentDidMount() {
    ProductController.getAllProducts().then((data) => {
      this.setState({ products: data });
    });
    CategoryController.getAllCategories().then((data) => {
      this.setState({ ...this.state, categories: data });
    });
  }

  render() {
    return (
      <div>
        <Categories categories={this.state.categories} onChange={this.onHandleCheckCategory} />
        <CardList products={this.state.products} />
      </div>
    );
  }
}

export default Products;