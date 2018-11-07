import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { styles } from './styles/appStyles';
import NavBar from './NavBar';
import SideMenu from './SideMenu';
import ProductController from '../../controllers/ProductController';
import CategoryController from '../../controllers/CategoryController';
import MainPage from './MainPage';

class MiniDrawer extends React.Component {
  constructor() {
    super();
    this.state = {
      open: true,
      categories: [],
      products: [],
      productsForCategory: []
    }
  }

  onHandleCheckCategory = (e) => {
    let { products, categories, productsForCategory } = this.state;
    productsForCategory = [];

    categories.forEach(category => {
      if (category.category_name === e.target.value) {
        category.checked = e.target.checked;
      }
      if (category.checked) {
        products.filter((product) => {
          if (product.category_id === category.id) {
            productsForCategory.push(product);
          }
        });
      }
    });

    if (productsForCategory.length === 0) {
      productsForCategory = products;
    }

    this.setState({ ...this.state, productsForCategory: productsForCategory, categories: categories });
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    //keep always opened
    this.setState({ open: true });
  };

  componentDidMount() {
    ProductController.getAllProducts().then((data) => {
      this.setState({ ...this.state, products: data, productsForCategory: data });
    });
    CategoryController.getAllCategories().then((data) => {
      this.setState({ ...this.state, categories: data });
    });
  }

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <NavBar classes={classes}
          open={this.state.open}
          onClick={this.handleDrawerOpen}
        />
        <SideMenu classes={classes}
          theme={theme}
          open={this.state.open}
          onClick={this.handleDrawerClose}
          categories={this.state.categories}
          onChange={this.onHandleCheckCategory}
        />
        <MainPage classes={classes} products={this.state.productsForCategory} />
      </div>
    );
  }
}

MiniDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MiniDrawer);