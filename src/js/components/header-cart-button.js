import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

class CartButton extends Component {
  constructor(props) {
    super(props);
  }
  
  render () {
    return (
      <a href="./cart.html" class="shopping_cart_link">
        <FontAwesomeIcon icon={faShoppingCart} size="3x" />
      </a>
    );
  }
}

export default CartButton;

const domContainer = document.getElementById('shopping_cart_container');
domContainer ? ReactDOM.render(<CartButton />, domContainer) : false;