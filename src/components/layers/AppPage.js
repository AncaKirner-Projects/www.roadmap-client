import React, { Component } from 'react';
import NavBar from './NavBar';
import SideMenu from './SideMenu';
import CssBaseline from '@material-ui/core/CssBaseline';
import { styles } from '../../styles/NavBarStyles';

import Typography from '@material-ui/core/Typography';

class AppPage extends Component {
  constructor() {
    super();
    this.state = {
      navbarIsOpened: false
    }
    this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
    this.handleDrawerClose = this.handleDrawerClose.bind(this);
  }
  handleDrawerOpen() {
    this.setState({
      navbarIsOpened: !this.state.navbarIsOpened
    })
  }

  handleDrawerClose() {
    this.setState({
      navbarIsOpened: !this.state.navbarIsOpened
    })
  }
  render() {
    const classes = styles;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <NavBar classes={styles} open={this.state.navbarIsOpened} onClick={this.handleDrawerOpen} />
        <SideMenu open={this.state.navbarIsOpened} onClick={this.handleDrawerClose} />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent
            elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in
            hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum
            velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing.
            Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis
            viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo.
            Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus
            at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed
            ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac.
          </Typography>
        </main>
      </div>
    );
  }
}

export default AppPage;
