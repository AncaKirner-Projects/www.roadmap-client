import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { styles } from './layers/styles/appStyles';
import NavBar from './layers/NavBar';
import SideMenu from './layers/SideMenu';
// import ProductController from '../controllers/ProductController';
// import CategoryController from '../controllers/CategoryController';
// import MainPage from './layers/MainPage';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getAllCategories } from '../store/actions/categoryActions';

class MiniDrawer extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  // onHandleCheckCategory = (e) => {
  //   let { products, categories, productsForCategory } = this.state;
  //   productsForCategory = [];

  //   categories.forEach(category => {
  //     if (category.category_name === e.target.value) {
  //       category.checked = e.target.checked;
  //     }
  //     if (category.checked) {
  //       products.filter((product) => {
  //         if (product.category_id === category.id) {
  //           productsForCategory.push(product);
  //         }
  //       });
  //     }
  //   });

  //   if (productsForCategory.length === 0) {
  //     productsForCategory = products;
  //   }

  //   this.setState({ ...this.state, productsForCategory: productsForCategory, categories: categories });
  // }

  // handleDrawerOpen = () => {
  //   this.setState({ open: true });
  // };

  // handleDrawerClose = () => {
  //   //keep always opened
  //   this.setState({ open: true });
  // };

  componentDidMount() {
    this.props.getAllCategories();
    //   console.log("this state", this.props);
    //   this.setState(this.props);
    // ProductController.getAllProducts().then((data) => {
    //   this.setState({ ...this.state, products: data, productsForCategory: data });
    // });
    // CategoryController.getAllCategories().then((data) => {
    //   this.setState({ ...this.state, categories: data });
    // });
  }

  render() {
    const { classes, theme } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <NavBar classes={classes} open={this.props.open} />
        <SideMenu classes={classes} theme={theme} open={this.props.open} />
        {/* <MainPage classes={classes} /> */}
      </div>
    );
  }
}

MiniDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({ getAllCategories: getAllCategories }, dispatch);
}

export default withStyles(styles, { withTheme: true })(connect(null, matchDispatchToProps)(MiniDrawer));