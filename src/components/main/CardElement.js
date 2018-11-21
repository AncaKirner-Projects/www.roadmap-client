import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import AlertDialog from './AlertDialog';
import ActionTypes from '../../store/actions/actionTypes';
import { addToCart, deleteCartStatusMessage } from '../../store/actions/cartActions';

const CardStyle = styled(Card)`
  width: 310px;
  height: 320px;
  display: inline-block;
  margin: 25px 0px 0px 25px;
`;

const TextStyle = styled(Typography)`
  height: 110px
`;

const CardActionsStyle = styled(CardActions)`
  justify-content: center;
`;

class CardElement extends Component {
  state = {
    openAlertDialog: false
  }

  handleAlertDialogClose = () => {
    this.props.deleteCartStatusMessage(ActionTypes.ADD_TO_CART);
    this.setState({ openAlertDialog: false });
  }

  handleAddToCart = () => {
    this.props.addToCart(this.props.product);
    this.setState({ openAlertDialog: true });
  }

  render() {
    const {
      id, prod_name: name, prod_description: description, price
    } = this.props.product;
    const { status } = this.props;
    const renderLink = itemProps => <Link to={`/products/${id}`} {...itemProps} />;
    const addProductStatus = status && status.find(elem => elem.type === ActionTypes.ADD_TO_CART);

    return (
      <CardStyle>
        <CardContent>
          <TextStyle align="center" variant="h5" to={`/products/${id}`} component={renderLink}>
            {name}
          </TextStyle>
          <TextStyle align="center" component="p">
            {description}
          </TextStyle>
          <Typography align="center" variant="h5" component="h1" color="primary">
            {price}
            RON
          </Typography>
          <CardActionsStyle>
            <Button variant="contained" size="small" color="primary" onClick={this.handleAddToCart}>Add to cart</Button>
          </CardActionsStyle>
          <AlertDialog
            open={this.state.openAlertDialog}
            handleClose={this.handleAlertDialogClose}
            title="Request Status"
            text={addProductStatus && addProductStatus.message}
          />
        </CardContent>
      </CardStyle>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart ? state.cart.products : [],
  status: state.cart ? state.cart.status : []
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    addToCart,
    deleteCartStatusMessage
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CardElement);
