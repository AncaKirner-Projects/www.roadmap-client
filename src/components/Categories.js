import React, { Component } from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import styled from 'styled-components';

const FormGroupStyle = styled(FormGroup)`
  margin-left: 20px;
`;

class Categories extends Component {
  render() {
    return (
      <FormGroupStyle>
        {this.props.categories.map((category) =>
          <FormControlLabel key={category.id}
            control={
              <Checkbox
                color="primary"
                checked={category.checked}
                onChange={e => this.props.onChange(e)}
                value={category.category_name}
              />
            }
            label={category.category_name}
          />)}
      </FormGroupStyle>
    );
  }
}

export default Categories;
