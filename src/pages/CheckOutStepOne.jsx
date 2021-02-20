import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { isProblemUser } from "../utils/Credentials";
import { ROUTES } from "../utils/Constants";
import SwagLabsFooter from "../components/Footer";
import HeaderContainer from "../components/HeaderContainer";
import "./CheckOutStepOne.css";
import InputError, { INPUT_TYPES } from "../components/InputError";
import ErrorMessage from "../components/ErrorMessage";

function CheckOutStepOne(props) {
  const { history } = props;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [error, setError] = useState("");
  const dismissError = () => {
    setError("");
  };
  const handleFirstNameChange = (evt) => {
    setFirstName(evt.target.value);
  };
  const handleLastNameChange = (evt) => {
    if (isProblemUser()) {
      // Overwrite the firstname also
      return setFirstName(evt.target.value);
    }

    setLastName(evt.target.value);
  };
  const handlePostalCodeChange = (evt) => {
    setPostalCode(evt.target.value);
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (!firstName) {
      return setError("First Name is required");
    }

    if (!lastName) {
      return setError("Last Name is required");
    }

    if (!postalCode) {
      return setError("Postal Code is required");
    }

    // If we're here, we have our required info. Redirect!
    history.push(ROUTES.CHECKOUT_STEP_TWO);

    return "";
  };

  return (
    <div id="page_wrapper" className="page_wrapper">
      <div id="contents_wrapper">
        <HeaderContainer />
        <div className="subheader">Checkout: Your Information</div>
        <div id="checkout_info_container" className="checkout_info_container">
          <div className="checkout_info_wrapper">
            <form onSubmit={handleSubmit}>
              <div className="checkout_info">
                <InputError
                  isError={Boolean(error)}
                  type={INPUT_TYPES.TEXT}
                  value={firstName}
                  onChange={handleFirstNameChange}
                  testId="firstName"
                  placeholder="First Name"
                  // Custom
                  id="first-name"
                  autoCorrect="off"
                  autoCapitalize="none"
                />
                <InputError
                  isError={Boolean(error)}
                  type={INPUT_TYPES.TEXT}
                  value={lastName}
                  onChange={handleLastNameChange}
                  testId="lastName"
                  placeholder="Last Name"
                  // Custom
                  id="last-name"
                  autoCorrect="off"
                  autoCapitalize="none"
                />
                <InputError
                  isError={Boolean(error)}
                  type={INPUT_TYPES.TEXT}
                  value={postalCode}
                  onChange={handlePostalCodeChange}
                  testId="postalCode"
                  placeholder="Zip/Postal Code"
                  // Custom
                  id="postal-code"
                  autoCorrect="off"
                  autoCapitalize="none"
                />
                <ErrorMessage
                  isError={Boolean(error)}
                  errorMessage={`Error: ${error}`}
                  onClick={dismissError}
                />
              </div>
              <div className="checkout_buttons">
                <a
                  className="cart_cancel_link btn_secondary"
                  href="#"
                  onClick={(evt) => {
                    evt.preventDefault();
                    history.push(ROUTES.CART);
                  }}
                >
                  CANCEL
                </a>
                <input
                  className="btn_primary cart_button"
                  type="submit"
                  value="CONTINUE"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <SwagLabsFooter />
    </div>
  );
}

export default withRouter(CheckOutStepOne);
