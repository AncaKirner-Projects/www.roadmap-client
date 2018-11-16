import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

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

const CardElement = (props) => {
  const { prod_name: name, prod_description: description, price } = props.product;
  return (
    <CardStyle>
      <CardContent>
        <TextStyle align="center" variant="h5" component="h3">
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
          <Button variant="contained" size="small" color="primary">Add to chart</Button>
        </CardActionsStyle>
      </CardContent>
    </CardStyle>
  );
};

export default CardElement;
