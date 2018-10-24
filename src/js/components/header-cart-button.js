import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { ShoppingCart } from './shopping-cart.js';

class CartButton extends Component {
  constructor(props) {
    super(props);
    ShoppingCart.registerCartListener(this);
  }

  render () {
    
    var cartBadge = "";
    var cartContents = ShoppingCart.getCartContents();
    
    if (cartContents.length > 0) {
      cartBadge = <span class="fa-layers-counter shopping_cart_badge">{ cartContents.length }</span>;
    }
    
    return (
      <a href="./cart.html" class="shopping_cart_link fa-layers fa-fw">
        <FontAwesomeIcon icon={faShoppingCart} size="3x" />
        { cartBadge }
      </a>
    );
  }
}

export default CartButton;

const domContainer = document.getElementById('shopping_cart_container');
domContainer ? ReactDOM.render(<CartButton />, domContainer) : false;