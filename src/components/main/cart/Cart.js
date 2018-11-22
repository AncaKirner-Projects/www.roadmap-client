import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import styled from 'styled-components';
import CartElement from './CartElement';

const totalPrice = (products) => {
  let total = 0;
  products.forEach(product => { total += product.price * product.quantity; });
  return total;
};

const TotalStyle = styled(Typography)`
  padding: 40px 9% 0px 0px;
`;

class Cart extends Component {
  state = {}

  render() {
    const { products } = this.props;

    return (
      <React.Fragment>
        <Typography variant="h5" component="h3">
          My Cart
        </Typography>
        <div>
          {
            products && products.map(product => <CartElement key={product.id} product={product} />)
          }
        </div>
        <TotalStyle variant="h5" align="right">
          Total: &nbsp;
          {totalPrice(products)}
          &nbsp; RON
        </TotalStyle>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  products: state.cart.products
});

export default connect(mapStateToProps)(Cart);
