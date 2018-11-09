import React, { Component } from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectCategory } from '../../store/actions/categoryActions';

const FormGroupStyle = styled(FormGroup)`
  margin-left: 20px;
`;

class Categories extends Component {
  render() {
    const { categories, selectCategory } = this.props;
    console.log(this.props);
    return (
      <FormGroupStyle>
        {categories && categories.map((category) =>
          <FormControlLabel key={category.id}
            control={
              <Checkbox
                color="primary"
                checked={category.checked}
                onChange={() => selectCategory(category)}
                value={category.name}
              />
            }
            label={category.name}
          />)}
      </FormGroupStyle>
    );
  }
}

function mapStateToProps(state) {
  console.log('CATEG', state);
  return {
    categories: state.categories.list
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ selectCategory: selectCategory }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Categories);
