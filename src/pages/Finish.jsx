import React from "react";
import { withRouter } from "react-router-dom";
import PonyExpress from "../assets/img/pony-express.png";
import SwagLabsFooter from "../components/Footer";
import HeaderContainer from "../components/HeaderContainer";
import PropTypes from "prop-types";
import Button, { BUTTON_SIZES } from "../components/Button";
import { ROUTES } from "../utils/Constants";
import "./Finish.css";

const Finish = ({ history }) => {
  return (
    <div id="page_wrapper" className="page_wrapper">
      <div id="contents_wrapper">
        <HeaderContainer secondaryTitle="Checkout: Complete!" />
        <div
          id="checkout_complete_container"
          className="checkout_complete_container"
        >
          <h2 className="complete-header">THANK YOU FOR YOUR ORDER</h2>
          <div className="complete-text">
            Your order has been dispatched, and will arrive just as fast as the
            pony can get there!
          </div>
          <img alt="Pony Express" className="pony_express" src={PonyExpress} />
          <Button
            label="Back Home"
            onClick={() => history.push(ROUTES.INVENTORY)}
            size={BUTTON_SIZES.SMALL}
            testId="back-to-products"
          />
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
};

export default withRouter(Finish);
