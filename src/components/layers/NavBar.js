import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { ShoppingCart } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import CreateDialog from '../main/AddProduct';

class NavBar extends Component {
  state = {
    open: false
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;
    return (
      <AppBar
        position="fixed"
        className={classNames(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar disableGutters={!open}>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            className={classNames(classes.menuButton, {
              [classes.hide]: open
            })}
          />
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <CreateDialog />
            <IconButton color="inherit" to="/cart" component={Link}>
              <ShoppingCart />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default NavBar;
