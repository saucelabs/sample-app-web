/**
 * Not sure why this function component doesn't work with the inventorylist page, it works with the
 * inventory item detail page That's why I've transformed it back to a class
 */
// import React from 'react';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
// import {withRouter} from 'react-router-dom';
// import {ShoppingCart} from '../../utils/shopping-cart';
// import {ROUTES} from "../../utils/Constants";
// import './HeaderCartButton.css';
//
// function CartButton(props) {
//   const {history} = props;
//   let cartBadge = "";
//   const cartContents = ShoppingCart.getCartContents();
//
//   if (cartContents.length > 0) {
//     cartBadge = <span className="fa-layers-counter shopping_cart_badge">{cartContents.length}</span>;
//   }
//
//   return (
//     <a className="shopping_cart_link fa-layers fa-fw" onClick={()=> history.push(ROUTES.CART)}>
//       <FontAwesomeIcon icon={faShoppingCart} size="3x"/>
//       {cartBadge}
//     </a>
//   );
// }
//
// export default withRouter(CartButton);

import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import {ShoppingCart} from "../utils/shopping-cart";
import {ROUTES} from "../utils/Constants";
import './HeaderCartButton.css';

class CartButton extends Component {
  constructor(props) {
    super(props);
    ShoppingCart.registerCartListener(this);
  }

  render () {
    const {history} = this.props;
    let cartBadge = "";
    const cartContents = ShoppingCart.getCartContents();

    if (cartContents.length > 0) {
      cartBadge = <span className="fa-layers-counter shopping_cart_badge">{ cartContents.length }</span>;
    }

    return (
      <a
        href="#"
        className="shopping_cart_link fa-layers fa-fw"
        onClick={(evt)=> {
          evt.preventDefault();
          history.push(ROUTES.CART);
        }}>
        <FontAwesomeIcon icon={faShoppingCart} size="3x" />
        { cartBadge }
      </a>
    );
  }
}

export default withRouter(CartButton);

