import React, { Component } from 'react';
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

export default CardList;
