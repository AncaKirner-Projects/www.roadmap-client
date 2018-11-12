import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardElement from './CardElement';

class CardList extends Component {
  render() {
    return (
      <div>
        {
          this.props.products.map((product) =>
            <CardElement key={product.id} product={product} />)
        }
      </div>
    );
  }
}

CardList.propTypes = {
  products: PropTypes.array.isRequired
};

export default CardList;
