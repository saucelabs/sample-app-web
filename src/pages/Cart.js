import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { isLoggedIn } from '../utils/Credentials';

class Cart extends Component {
  render() {
    if (!isLoggedIn()) {
      return <Redirect to="./" />;
    }

    return (<h1>Cart</h1>);
  }
}

export default Cart;
