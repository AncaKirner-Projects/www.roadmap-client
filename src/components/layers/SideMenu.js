import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { connect } from 'react-redux';

import Categories from '../main/Categories';

class SideMenu extends Component {
  state = {
    open: true
  };

  render() {
    const { classes, theme } = this.props;
    const { open } = this.state;
    return (
      <Drawer
        variant="permanent"
        className={classNames(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        classes={{
          paper: classNames({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })
        }}
        open={open}
      >
        <div className={classes.toolbar}>
          <IconButton>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <h4>Categories</h4>
        <List>
          <Categories />
        </List>
      </Drawer>
    );
  }
}

SideMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

// {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//   <ListItem button key={text}>
//     <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//     <ListItemText primary={text} />
//   </ListItem>
// ))}

function mapStateToProps(state) {
  return {
    categories: state.categories
  };
}

export default connect(mapStateToProps)(SideMenu);
