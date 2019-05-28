import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { isLoggedIn } from '../utils/Credentials';

class CheckOutStepTwo extends Component {
  render() {
    if (!isLoggedIn()) {
      return <Redirect to="./" />;
    }

    return <h1>CheckOut: Overview</h1>;
  }
}

export default CheckOutStepTwo;
