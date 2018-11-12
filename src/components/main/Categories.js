import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectCategory, unselectCategory } from '../../store/actions/categoryActions';

const FormGroupStyle = styled(FormGroup)`
  margin-left: 20px;
`;

class Categories extends Component {
  render() {
    const { categories } = this.props;
    return (
      <FormGroupStyle>
        {categories && categories.map((category) => {
          return (<FormControlLabel key={category.id}
            control={
              <Checkbox
                color="primary"
                checked={category.checked}
                onChange={this.handleChange(category)}
                value={category.name}
              />
            }
            label={category.name}
          />);
        }
        )}
      </FormGroupStyle>
    );
  }

  handleChange = (category) => (e) => {
    // e.preventDefault();
    category.checked = e.target.checked;

    if (e.target.checked) {
      this.props.selectCategory(category);
    }
    else {
      category.checked = !e.target.checked;
      this.props.unselectCategory(category);
    }
  }
}

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    list: PropTypes.array,
    selected: PropTypes.arrayOf(PropTypes.number.isRequired)
  })),
  selectCategory: PropTypes.func.isRequired,
  unselectCategory: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    categories: state.categories.list,
    selected: state.categories.selected
  }
}

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({
    selectCategory: selectCategory,
    unselectCategory: unselectCategory
  }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
