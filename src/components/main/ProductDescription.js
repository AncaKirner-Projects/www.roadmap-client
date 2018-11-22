import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import styles from '../layers/styles/productDescriptionStyles';
import AlertDialog from './AlertDialog';
import ActionTypes from '../../store/actions/actionTypes';
import { addToCart, deleteCartStatusMessage } from '../../store/actions/cartActions';

class ProductDescription extends Component {
  state = {
    openAlertDialog: false
  }

  handleAlertDialogClose = () => {
    this.props.deleteCartStatusMessage(ActionTypes.ADD_TO_CART);
    this.setState({ openAlertDialog: false });
  }

  handleAddToCart = (product) => {
    this.props.addToCart(product);
    this.setState({ openAlertDialog: true });
  }

  render() {
    const { classes, products, status } = this.props;
    const { id } = this.props.match.params;
    const product = products && products.find(elem => elem.id === parseInt(id, 0));
    const addProductStatus = status && status.find(elem => elem.type === ActionTypes.ADD_TO_CART);

    if (!product) return null;

    return (
      <Paper className={classes.root}>
        <Grid container spacing={16}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={16}>
              <Grid item xs>
                <Typography gutterBottom variant="h5">
                  {product.prod_name}
                </Typography>
                <Typography gutterBottom variant="subtitle1">{product.prod_description}</Typography>
                <Typography color="textSecondary">
                  ID:
                  {product.id}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" align="center">
                {product.price}
                RON
              </Typography>
              <Button variant="contained"
                size="small"
                color="primary"
                onClick={() => this.handleAddToCart(product)}
              >
                Add to cart
              </Button>
              <AlertDialog
                open={this.state.openAlertDialog}
                handleClose={this.handleAlertDialogClose}
                title="Request Status"
                text={addProductStatus && addProductStatus.message}
              />
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.all,
  status: state.cart ? state.cart.status : []
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    addToCart,
    deleteCartStatusMessage
  }, dispatch)
});

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(ProductDescription);
