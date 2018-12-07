import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CardElement from './CardElement';

const CardList = (props) => {
  const { products } = props;
  return (
    <React.Fragment>
      {
        products && products.map(product => <CardElement key={product.id} product={product} />)
      }
    </React.Fragment>
  );
};

CardList.propTypes = {
  products: PropTypes.array
};

CardList.defaultProps = {
  products: []
};

const mapStateToProps = (state) => {
  const products = (state.categories && state.categories.selectedProducts)
    ? state.categories.selectedProducts
    : state.products.uniq;

  return {
    products
  };
};

export default connect(mapStateToProps)(CardList);
