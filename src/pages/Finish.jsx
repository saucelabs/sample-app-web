import React, { useState } from "react";
import { withRouter } from "../utils/withRouter";
import Checkmark from "../assets/img/checkmark.png";
import SwagLabsFooter from "../components/Footer";
import HeaderContainer from "../components/HeaderContainer";
import PropTypes from "prop-types";
import Button, { BUTTON_SIZES } from "../components/Button";
import { ROUTES } from "../utils/Constants";
import "./Finish.css";

const Finish = ({ history, location }) => {
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const order = location?.state?.order;

  const generatePdfOrder = async () => {
    setIsGeneratingPdf(true);
    try {
      // Lazy-loaded: @react-pdf/renderer is only needed on this button click
      const [{ pdf }, { default: OrderReceipt }] = await Promise.all([
        import("@react-pdf/renderer"),
        import("../pdf/OrderReceipt"),
      ]);
      const blob = await pdf(<OrderReceipt order={order} />).toBlob();

      const downloadUrl = URL.createObjectURL(blob);
      const downloadLink = document.createElement("a");
      downloadLink.href = downloadUrl;
      // e.g. "2026-07-07_15-31-06" — filesystem-safe, drops ms/Z from the ISO string
      const orderTimestamp = order.orderDate
        .replace(/[:.]/g, "-")
        .replace("T", "_")
        .slice(0, 19);
      downloadLink.download = `swag-labs-order-${orderTimestamp}.pdf`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      downloadLink.remove();
      URL.revokeObjectURL(downloadUrl);
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  return (
    <div id="page_wrapper" className="page_wrapper">
      <div id="contents_wrapper">
        <HeaderContainer secondaryTitle="Checkout: Complete!" />
        <div
          id="checkout_complete_container"
          className="checkout_complete_container"
          data-test="checkout-complete-container"
        >
          <img
            alt="Pony Express"
            className="pony_express"
            src={Checkmark}
            data-test="pony-express"
          />
          <h2 className="complete-header" data-test="complete-header">
            Thank you for your order!
          </h2>
          <div className="complete-text" data-test="complete-text">
            Your order has been dispatched, and will arrive just as fast as the
            pony can get there!
          </div>
          <div className="complete-buttons">
            <Button
              label="Back Home"
              onClick={() => history.push(ROUTES.INVENTORY)}
              size={BUTTON_SIZES.SMALL}
              testId="back-to-products"
            />
            {order && (
              <Button
                customClass="generate-pdf-button"
                label={isGeneratingPdf ? "Generating..." : "Generate PDF order"}
                onClick={generatePdfOrder}
                size={BUTTON_SIZES.SMALL}
                testId="generate-pdf-order"
              />
            )}
          </div>
        </div>
      </div>
      <SwagLabsFooter />
    </div>
  );
};
Finish.propTypes = {
  /**
   * The history
   */
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  /**
   * The router location, carrying the completed order snapshot
   */
  location: PropTypes.shape({
    state: PropTypes.shape({
      order: PropTypes.object,
    }),
  }),
};

export default withRouter(Finish);
