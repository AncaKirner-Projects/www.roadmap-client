import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
  handleChange = category => (e) => {
    this.props.selectCategory(category, e.target.checked);
  }

  render() {
    const { categories } = this.props;
    return (
      <FormGroupStyle>
        {categories && categories.map((category) => {
          return (
            <FormControlLabel
              key={category.id}
              control={
                <Checkbox
                  color="primary"
                  checked={category.checked}
                  onChange={this.handleChange(category)}
                  value={category.name}
                />}
              label={category.name}
            />);
        })}
      </FormGroupStyle>
    );
  }
}

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    list: PropTypes.array,
    selected: PropTypes.arrayOf(PropTypes.number.isRequired)
  })).isRequired,
  selectCategory: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    categories: state.categories.list,
    selected: state.categories.selected
  };
};

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    selectCategory
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
