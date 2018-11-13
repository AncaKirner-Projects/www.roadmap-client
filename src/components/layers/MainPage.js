import React from 'react';
import PropTypes from 'prop-types';
import CardList from '../main/CardList';

const MainPage = props => (
  <main className={props.classes.content}>
    <div className={props.classes.toolbar} />
    <CardList />
  </main>
);


MainPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default MainPage;
