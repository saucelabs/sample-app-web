import React from "react";
import { withRouter } from "react-router-dom";
import PonyExpress from "../assets/img/pony-express.png";
import SwagLabsFooter from "../components/Footer";
import HeaderContainer from "../components/HeaderContainer";
import "./Finish.css";

function Finish() {
  return (
    <div id="page_wrapper" className="page_wrapper">
      <div id="contents_wrapper">
        <HeaderContainer />
        <div className="subheader">Finish</div>
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
        </div>
      </div>
      <SwagLabsFooter />
    </div>
  );
}

export default withRouter(Finish);
