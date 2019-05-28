import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { isLoggedIn } from '../utils/Credentials';

class Finish extends Component {
  render() {
    if (!isLoggedIn()) {
      return <Redirect to="./" />;
    }

    return <h1>Finish</h1>;
  }
}

export default Finish;
