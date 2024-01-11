import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { isErrorUser, isProblemUser } from "../utils/Credentials";
import { ROUTES } from "../utils/Constants";
import { ShoppingCart } from "../utils/shopping-cart";
import { InventoryData } from "../utils/InventoryData";
import CartItem from "../components/CartItem";
import SwagLabsFooter from "../components/Footer";
import HeaderContainer from "../components/HeaderContainer";
import Button, { BUTTON_SIZES, BUTTON_TYPES } from "../components/Button";
import "./CheckOutStepTwo.css";

const CheckOutStepTwo = ({ history }) => {
  const clearCart = () => {
    /* istanbul ignore else */
    // No cart clear on order complete for the problem user
    if (isProblemUser()) {
      return;
    } else if (isErrorUser()) {
      // An unfortunate typo! This will be reported to Backtrace
      ShoppingCart.cesetRart();
      return;
    }
    // Wipe out our shopping cart
    ShoppingCart.resetCart();
  };
  const contents = ShoppingCart.getCartContents();
  let orderTotal = 0;

  for (const curItem in contents) {
    orderTotal = orderTotal + InventoryData[contents[curItem]].price;
    if (isProblemUser()) {
      // double up for the problem user
      orderTotal = orderTotal + InventoryData[contents[curItem]].price;
    }
  }

  const orderTax = (orderTotal * 0.08).toFixed(2);

  return (
    <div id="page_wrapper" className="page_wrapper">
      <div id="contents_wrapper">
        <HeaderContainer secondaryTitle="Checkout: Overview" />
        <div
          id="checkout_summary_container"
          className="checkout_summary_container"
          data-test="checkout-summary-container"
        >
          <div>
            <div className="cart_list" data-test="cart-list">
              <div
                className="cart_quantity_label"
                data-test="cart-quantity-label"
              >
                QTY
              </div>
              <div className="cart_desc_label" data-test="cart-desc-label">
                Description
              </div>
              {contents.map((item, i) => {
                return <CartItem key={i} item={InventoryData[item]} />;
              })}
            </div>
            <div className="summary_info">
              <div
                className="summary_info_label"
                data-test="payment-info-label"
              >
                Payment Information:
              </div>
              <div
                className="summary_value_label"
                data-test="payment-info-value"
              >
                SauceCard #31337
              </div>
              <div
                className="summary_info_label"
                data-test="shipping-info-label"
              >
                Shipping Information:
              </div>
              <div
                className="summary_value_label"
                data-test="shipping-info-value"
              >
                Free Pony Express Delivery!
              </div>
              <div
                className="summary_info_label"
                data-test="total-info-label"
              >
                Price Total
              </div>
              <div
                className="summary_subtotal_label"
                data-test="subtotal-label"
              >
                Item total: ${orderTotal}
              </div>
              <div className="summary_tax_label" data-test="tax-label">
                Tax: ${orderTax}
              </div>
              <div className="summary_total_label" data-test="total-label">
                Total: ${(orderTotal + parseFloat(orderTax)).toFixed(2)}
              </div>
              <div className="cart_footer">
                <Button
                  // `cart_cancel_link` has no style function
                  // but is there for backwards compatibility
                  customClass="cart_cancel_link"
                  label="Cancel"
                  onClick={(evt) => {
                    evt.preventDefault();
                    history.push(ROUTES.INVENTORY);
                  }}
                  size={BUTTON_SIZES.MEDIUM}
                  testId="cancel"
                  type={BUTTON_TYPES.BACK}
                />
                <Button
                  customClass="cart_button"
                  label="Finish"
                  onClick={(evt) => {
                    evt.preventDefault();
                    clearCart();
                    history.push(ROUTES.CHECKOUT_COMPLETE);
                  }}
                  size={BUTTON_SIZES.MEDIUM}
                  testId="finish"
                  type={BUTTON_TYPES.ACTION}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <SwagLabsFooter />
    </div>
  );
};
CheckOutStepTwo.propTypes = {
  /**
   * The history
   */
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(CheckOutStepTwo);
