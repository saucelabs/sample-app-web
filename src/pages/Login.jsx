import React, { useEffect, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { useState } from "react";
import "./Login.css";
import {
  isLockedOutUser,
  setCredentials,
  verifyCredentials,
} from "../utils/Credentials";
import { ROUTES, VALID_USERNAMES, VALID_PASSWORD } from "../utils/Constants";
import InputError, { INPUT_TYPES } from "../components/InputError";
import SubmitButton from "../components/SubmitButton";
import ErrorMessage from "../components/ErrorMessage";
import { BacktraceClient } from "@backtrace-labs/react";

function Login(props) {
  const { history, location } = props;
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (location.state) {
      return setError(
        `You can only access '${location.state.from.pathname}' when you are logged in.`
      );
    }
  }, [location.state]);

  const dismissError = () => {
    setError("");
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!username) {
      return setError("Username is required");
    }

    if (!password) {
      return setError("Password is required");
    }

    if (verifyCredentials(username, password)) {
      // If we're here, we have a username and password.
      // Store the username in our cookies.
      setCredentials(username, password);
      // Catch our locked-out user and bail out
      if (isLockedOutUser()) {
        // Send an error with custom attributes to Backtrace
        BacktraceClient.instance.send(
          new Error("Locked out user tried to log in."),
          { username }
        );
        return setError("Sorry, this user has been locked out.");
      }

      // Redirect!
      history.push(ROUTES.INVENTORY);
    } else {
      // Send an error with custom attributes to Backtrace
      BacktraceClient.instance.send(
        "Someone tried to login with invalid credentials.",
        { username }
      );
      return setError(
        "Username and password do not match any user in this service"
      );
    }

    return "";
  };

  const handleUserChange = (evt) => {
    setUsername(evt.target.value);
  };

  const handlePassChange = (evt) => {
    setPassword(evt.target.value);
  };

  return (
    <div className="login_container">
      <div className="login_logo">Swag Labs</div>

      <div className="login_wrapper">
        <div className="login_wrapper-inner">
          <div id="login_button_container" className="form_column">
            <div className="login-box">
              <form onSubmit={handleSubmit}>
                <InputError
                  isError={Boolean(error)}
                  type={INPUT_TYPES.TEXT}
                  value={username}
                  onChange={handleUserChange}
                  testId="username"
                  placeholder="Username"
                  // Custom
                  id="user-name"
                  name="user-name"
                  autoCorrect="off"
                  autoCapitalize="none"
                />
                <InputError
                  isError={Boolean(error)}
                  type={INPUT_TYPES.PASSWORD}
                  value={password}
                  onChange={handlePassChange}
                  testId="password"
                  placeholder="Password"
                  // Custom
                  autoCorrect="off"
                  autoCapitalize="none"
                />
                <ErrorMessage
                  isError={Boolean(error)}
                  errorMessage={`Epic sadface: ${error}`}
                  onClick={dismissError}
                />
                <SubmitButton
                  // `btn_action` has no style function
                  // but is there for backwards compatibility
                  customClass="btn_action"
                  testId="login-button"
                  value="Login"
                />
              </form>
            </div>
          </div>
        </div>
        <div className="login_credentials_wrap">
          <div className="login_credentials_wrap-inner">
            <div id="login_credentials" className="login_credentials">
              <h4>Accepted usernames are:</h4>
              {VALID_USERNAMES.map((u, i) => (
                <Fragment key={i}>
                  {u}
                  <br />
                </Fragment>
              ))}
            </div>
            <div className="login_password">
              <h4>Password for all users:</h4>
              {VALID_PASSWORD}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Login);
