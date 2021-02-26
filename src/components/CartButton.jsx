import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { ShoppingCart } from "../utils/shopping-cart";
import { ROUTES } from "../utils/Constants";
import "./CartButton.css";

function CartButton(props) {
  const { history } = props;
  let cartBadge = "";
  const [cartContents, setCartContents] = useState(
    ShoppingCart.getCartContents()
  );
  const cartListener = {
    forceUpdate: () => setCartContents(ShoppingCart.getCartContents()),
  };

  useEffect(() => {
    ShoppingCart.registerCartListener(cartListener);
  }, []);

  if (cartContents.length > 0) {
    cartBadge = (
      <span className="fa-layers-counter shopping_cart_badge">
        {cartContents.length}
      </span>
    );
  }

  return (
    <a className="shopping_cart_link" onClick={() => history.push(ROUTES.CART)}>
      {cartBadge}
    </a>
  );
}

export default withRouter(CartButton);
