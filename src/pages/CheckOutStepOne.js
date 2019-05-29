import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { isLoggedIn } from '../utils/Credentials';
import { ROUTES } from '../utils/Constants';

class CheckOutStepOne extends Component {
  render() {
    if (!isLoggedIn()) {
      return <Redirect to={ ROUTES.LOGIN }/>;
    }

    return <h1>CheckOut: Your Information</h1>;
  }
}

export default CheckOutStepOne;
