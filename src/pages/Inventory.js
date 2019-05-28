import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { isLoggedIn } from '../utils/Credentials';

class Inventory extends Component {
  render() {
    if (!isLoggedIn()) {
      return <Redirect to="./" />;
    }

    return <h1>Inventory</h1>;
  }
}

export default Inventory;
