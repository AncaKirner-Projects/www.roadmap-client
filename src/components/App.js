import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import styles from './layers/styles/appStyles';
import NavBar from './layers/NavBar';
import SideMenu from './layers/SideMenu';
import MainPage from './layers/MainPage';

import { getAllCategories } from '../store/actions/categoryActions';
import getAllProducts from '../store/actions/productActions';

export class MiniDrawer extends React.Component {
  componentDidMount() {
    this.props.getAllProducts();
    this.props.getAllCategories();
  }

  render() {
    const { classes, theme } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <NavBar classes={classes} />
        <SideMenu classes={classes} theme={theme} />
        <MainPage classes={classes} />
      </div>
    );
  }
}

MiniDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  getAllCategories: PropTypes.func.isRequired,
  getAllProducts: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    getAllCategories,
    getAllProducts
  }, dispatch)
});

export default withStyles(
  styles,
  { withTheme: true }
)(connect(null, mapDispatchToProps)(MiniDrawer));
