import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import styles from '../layers/styles/productDescriptionStyles';

const ProductDescription = (props) => {
  const { classes, products } = props;
  const { id } = props.match.params;
  const product = products && products.find(elem => elem.id === parseInt(id, 0));

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
            <Button variant="contained" size="small" color="primary">Add to chart</Button>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

const mapStateToProps = state => ({
  products: state.products.all
});

export default compose(
  withStyles(styles),
  connect(mapStateToProps)
)(ProductDescription);
