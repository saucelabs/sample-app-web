import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { isLoggedIn } from '../utils/Credentials';

class CheckOutStepOne extends Component {
  render() {
    if (!isLoggedIn()) {
      return <Redirect to="./" />;
    }

    return <h1>CheckOut: Your Information</h1>;
  }
}

export default CheckOutStepOne;
