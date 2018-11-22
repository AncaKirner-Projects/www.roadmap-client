import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import ResponsiveAlertDialog from '../ResponsiveAlertDialog';
import ActionTypes from '../../../store/actions/actionTypes';
import { deleteFromCart, changeQuantity } from '../../../store/actions/cartActions';

const PaperStyle = styled(Paper)`
  margin: 5px;
  padding: 15px;
  min-height: 80px;
`;

const PriceStyle = styled(Grid)`
  width: 10%;
`;

class CartElement extends Component {
  state = {
    openAlertDialog: false,
    quantity: this.props.quantity
  }

  handleAlertDialogClose = () => {
    this.setState({ openAlertDialog: false });
  }

  handleRemoveFromCart = (product) => {
    this.props.deleteFromCart(product);
    this.setState({ openAlertDialog: false });
  }

  handleConfirmation = () => {
    this.setState({ openAlertDialog: true });
  }

  handleQuantityChange = product => (e) => {
    this.setState({ quantity: e.target.value });
    this.props.changeQuantity(product, e.target.value);
  }

  render() {
    const { product } = this.props;

    const quantities = () => {
      let res = [];
      for (let i = 1; i <= product.prod_number; i++) {
        res.push({ value: i });
      }

      return res;
    };

    const classes = {
      root: {
        overflow: 'hidden',
        padding: `0 ${10 * 3}px`
      },
      wrapper: {
        maxWidth: 400,
        margin: 100
      },
      paper: {
        margin: 100,
        padding: 100 * 2
      },
      menu: {
        width: 200
      }
    };

    return (
      <PaperStyle className={classes.paper}>
        <Grid container wrap="nowrap" spacing={16}>
          <Grid item xs zeroMinWidth>
            <Typography variant="subtitle1" noWrap>{product.prod_name}</Typography>
          </Grid>
          <Grid item xs zeroMinWidth>
            <TextField
              id="outlined-select-currency-native"
              select
              className={classes.textField}
              onChange={this.handleQuantityChange(product)}
              value={this.state.quantity}
              variant="outlined"
            >
              {
                quantities().map(option => (
                  <option key={option.value} value={option.value}>
                    {option.value}
                  </option>
                ))}
            </TextField>
          </Grid>
          <PriceStyle item zeroMinWidth>
            <Typography align="left" variant="subtitle1" noWrap>{product.price * product.quantity}  &nbsp; RON</Typography>
            <Button
              size="small"
              onClick={this.handleConfirmation}
            >
              Remove
            </Button>
          </PriceStyle>
        </Grid>
        <ResponsiveAlertDialog
          open={this.state.openAlertDialog}
          handleClose={this.handleAlertDialogClose}
          handleConfirmClose={() => this.handleRemoveFromCart(product)}
        />
      </PaperStyle>
    );
  }
}

const mapStateToProps = (state, props) => ({
  quantity: props.product.quantity
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    changeQuantity,
    deleteFromCart
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartElement);
