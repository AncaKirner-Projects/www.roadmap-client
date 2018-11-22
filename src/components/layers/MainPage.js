import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import CardList from '../main/CardList';
import Cart from '../main/cart/Cart';
import ProductDescription from '../main/ProductDescription';

const MainPage = props => (
  <main className={props.classes.content}>
    <div className={props.classes.toolbar} />
    <Switch>
      <Route exact strict path="/" component={CardList} />
      <Route exact strict path="/products/:id" component={ProductDescription} />
      <Route exact strict path="/cart" component={Cart} />
    </Switch>
  </main>
);


MainPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default MainPage;
