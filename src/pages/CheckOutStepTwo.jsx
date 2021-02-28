import React from "react";
import { withRouter } from "react-router-dom";
import { isProblemUser } from "../utils/Credentials";
import { ROUTES } from "../utils/Constants";
import { ShoppingCart } from "../utils/shopping-cart";
import { InventoryData } from "../utils/InventoryData";
import SummaryItem from "../components/SummaryItem";
import SwagLabsFooter from "../components/Footer";
import HeaderContainer from "../components/HeaderContainer";
import "./CheckOutStepTwo.css";
import Button, { BUTTON_SIZES, BUTTON_TYPES } from "../components/Button";

function CheckOutStepTwo(props) {
  const { history } = props;
  const clearCart = () => {
    // No cart clear on order complete for the problem user
    if (!isProblemUser()) {
      // Wipe out our shopping cart
      ShoppingCart.resetCart();
    }
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
        >
          <div>
            <div className="cart_list">
              <div className="cart_quantity_label">QTY</div>
              <div className="cart_desc_label">DESCRIPTION</div>
              {contents.map((item, i) => {
                return <SummaryItem key={i} item={InventoryData[item]} />;
              })}
            </div>
            <div className="summary_info">
              <div className="summary_info_label">Payment Information:</div>
              <div className="summary_value_label">SauceCard #31337</div>
              <div className="summary_info_label">Shipping Information:</div>
              <div className="summary_value_label">
                FREE PONY EXPRESS DELIVERY!
              </div>
              <div className="summary_subtotal_label">
                Item total: ${orderTotal}
              </div>
              <div className="summary_tax_label">Tax: ${orderTax}</div>
              <div className="summary_total_label">
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
}

export default withRouter(CheckOutStepTwo);
