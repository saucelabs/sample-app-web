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

const Cart = ({ history }) => {
  const contents = ShoppingCart.getCartContents();

  return (
    <div id="page_wrapper" className="page_wrapper">
      <div id="contents_wrapper">
        <HeaderContainer secondaryTitle="Your Cart" />
        <div id="cart_contents_container" className="cart_contents_container">
          <div>
            <div className="cart_list">
              <div className="cart_quantity_label">QTY</div>
              <div className="cart_desc_label">DESCRIPTION</div>
              {contents.map((item, i) => (
                <CartItem key={i} item={InventoryData[item]} showButton />
              ))}
            </div>
            <div className="cart_footer">
              <Button
                label="Continue Shopping"
                onClick={(evt) => {
                  evt.preventDefault();
                  history.push(ROUTES.INVENTORY);
                }}
                size={BUTTON_SIZES.MEDIUM}
                testId="continue-shopping"
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
                testId="checkout"
                type={BUTTON_TYPES.ACTION}
              />
            </div>
          </div>
        </div>
      </div>
      <SwagLabsFooter />
    </div>
  );
};

export default withRouter(Cart);
