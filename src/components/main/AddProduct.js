import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
// import MaterialIcon from 'material-icons-react';
import IconButton from '@material-ui/core/IconButton';
import { ValidatorForm, TextValidator, SelectValidator } from 'react-material-ui-form-validator';
import styles from '../layers/styles/addProductStyles';
import { addProduct, deleteStatusMessage } from '../../store/actions/productActions';
import AlertDialog from './AlertDialog';
import ActionTypes from '../../store/actions/actionTypes';

class AddProduct extends Component {
  state = {
    open: false,
    openAlertDialog: false,
    formData: {
      category: '',
      name: '',
      description: '',
      price: '',
      totalProducts: ''
    }
  };

  componentDidMount() {
    ValidatorForm.addValidationRule('isNumber', value => !isNaN(parseInt(value, 0)));
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  }

  handleClose = () => {
    this.setState({
      open: false,
      formData: {
        category: 0
      }
    });
  }

  handleAlertDialogClose = () => {
    this.props.deleteStatusMessage(ActionTypes.ADD_PRODUCT);
    this.setState({ openAlertDialog: false });
  }

  handleChange = name => (e) => {
    const { formData } = this.state;
    formData[name] = e.target.value;
    this.setState({ formData });
  }

  handleCreateProduct = () => {
    const product = {
      category_id: parseInt(this.state.formData.category, 0),
      prod_name: this.state.formData.name,
      prod_description: this.state.formData.description,
      price: parseFloat(this.state.formData.price).toFixed(2),
      prod_number: parseInt(this.state.formData.totalProducts, 0)
    };
    this.props.addProduct(product);
    this.setState({ open: false, openAlertDialog: true });
  }

  render() {
    const { categories, status } = this.props;
    const { formData } = this.state;
    const addProductStatus = status && status.find(elem => elem.type === ActionTypes.ADD_PRODUCT);

    return (
      <React.Fragment>
        <IconButton color="inherit" onClick={this.handleClickOpen}>
          {/* <MaterialIcon icon="playlist_add" color="white" size={35} /> */}
        </IconButton>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <ValidatorForm
            ref="form"
            onSubmit={this.handleCreateProduct}
            onError={errors => console.log(errors)}
          >
            <DialogTitle id="form-dialog-title">Add product</DialogTitle>
            <DialogContent>
              <SelectValidator
                id="standard-select-currency-native"
                autoFocus
                select
                label="Select category"
                className={styles.textField}
                value={formData.category}
                onChange={this.handleChange('category')}
                SelectProps={{
                  native: true,
                  MenuProps: {
                    className: styles.menu
                  }
                }}
                margin="normal"
                fullWidth
                name="category"
                validators={['required']}
                errorMessages={['This field is required']}
              >
                <option key={0} value="Please select">
                  - Please select -
                </option>
                {categories && categories.map(option => (
                  <option key={option.id} value={option.id}>
                    {option.name}
                  </option>
                ))}
              </SelectValidator>
              <TextValidator
                margin="dense"
                id="name"
                label="Product Name"
                fullWidth
                name="name"
                value={formData.name}
                onChange={this.handleChange('name')}
                validators={['required']}
                errorMessages={['This field is required']}
              />
              <TextValidator
                id="standard-textarea"
                label="Product Description"
                multiline
                margin="normal"
                fullWidth
                name="description"
                value={formData.description}
                onChange={this.handleChange('description')}
                validators={['required']}
                errorMessages={['This field is required']}
              />
              <TextValidator
                margin="dense"
                id="name"
                label="Price"
                fullWidth
                name="price"
                value={formData.price}
                onChange={this.handleChange('price')}
                validators={['required', 'isNumber']}
                errorMessages={['This field is required', 'Price is not valid']}
              />
              <TextValidator
                margin="dense"
                id="name"
                label="Number of products"
                fullWidth
                name="totalProducts"
                value={formData.totalProducts}
                onChange={this.handleChange('totalProducts')}
                validators={['required', 'isNumber']}
                errorMessages={['This field is required', 'Number of products is not valid']}
              />
            </DialogContent>
            <DialogActions>
              <Button
                variant="contained"
                type="submit"
                color="primary"
              >
                Create
              </Button>
            </DialogActions>
          </ValidatorForm>
        </Dialog>
        <AlertDialog
          open={this.state.openAlertDialog}
          handleClose={this.handleAlertDialogClose}
          title="Request Status"
          text={addProductStatus && addProductStatus.message}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories.list,
  status: state.products.status
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    addProduct,
    deleteStatusMessage
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
