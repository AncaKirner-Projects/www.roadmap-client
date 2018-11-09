import React, { Component } from 'react';
import classNames from 'classnames';
// import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

class NavBar extends Component {
  state = {
    open: false
  }
  render() {
    const { classes } = this.props;
    const { open } = this.state;
    return (
      <AppBar
        position="fixed"
        className={classNames(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar disableGutters={!open}>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={this.props.onClick}
            className={classNames(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
          </IconButton>
        </Toolbar>
      </AppBar>
    );
  }
}

export default (NavBar);