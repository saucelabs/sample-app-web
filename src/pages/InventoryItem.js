import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { isLoggedIn } from '../utils/Credentials';
import { ROUTES } from '../utils/Constants';

class InventoryItem extends Component {
  render() {
    if (!isLoggedIn()) {
      return <Redirect to={ ROUTES.LOGIN }/>;
    }

    return <h1>InventoryItem</h1>;
  }
}

export default InventoryItem;
