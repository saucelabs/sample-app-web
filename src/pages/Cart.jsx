import React from "react";
import { withRouter } from "react-router-dom";
import { ROUTES } from "../utils/Constants";
import { ShoppingCart } from "../utils/shopping-cart";
import { InventoryData } from "../utils/InventoryData";
import CartItem from "../components/CartItem";
import SwagLabsFooter from "../components/Footer";
import HeaderContainer from "../components/HeaderContainer";
import Button, { BUTTON_SIZES, BUTTON_TYPES } from "../components/Button";
import "./Cart.css";

function Cart(props) {
  const { history } = props;
  const contents = ShoppingCart.getCartContents();

  return (
    <div id="page_wrapper" className="page_wrapper">
      <div id="contents_wrapper">
        <HeaderContainer />
        <div className="subheader">Your Cart</div>
        <div id="cart_contents_container" className="cart_contents_container">
          <div>
            <div className="cart_list">
              <div className="cart_quantity_label">QTY</div>
              <div className="cart_desc_label">DESCRIPTION</div>
              {contents.map((item, i) => {
                return <CartItem key={i} item={InventoryData[item]} />;
              })}
            </div>
            <div className="cart_footer">
              <Button
                label="Continue Shopping"
                onClick={(evt) => {
                  evt.preventDefault();
                  history.push(ROUTES.INVENTORY);
                }}
                size={BUTTON_SIZES.MEDIUM}
                type={BUTTON_TYPES.BACK}
              />
              <Button
                label="Checkout"
                // `checkout_button` has no style function
                // but is there for backwards compatibility
                customClass="checkout_button"
                onClick={(evt) => {
                  evt.preventDefault();
                  history.push(ROUTES.CHECKOUT_STEP_ONE);
                }}
                size={BUTTON_SIZES.MEDIUM}
                type={BUTTON_TYPES.ACTION}
              />
            </div>
          </div>
        </div>
      </div>
      <SwagLabsFooter />
    </div>
  );
}

export default withRouter(Cart);
