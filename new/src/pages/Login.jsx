import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import "./Login.css";
import {
  isLockedOutUser,
  setCredentials,
  verifyCredentials,
} from "../utils/Credentials";
import { ROUTES } from "../utils/Constants";

function Login(props) {
  const { history } = props;
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (props.location.state) {
      return setError(
        `You can only access '${props.location.state.from.pathname}' when you are logged in.`
      );
    }
  }, [props.location.state]);

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
        return setError("Sorry, this user has been locked out.");
      }

      // Redirect!
      history.push(ROUTES.INVENTORY);
    } else {
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
    <div>
      <div className="login_logo" />

      <div className="login_wrapper">
        <div className="login_wrapper-inner">
          <div id="login_button_container" className="form_column">
            <div className="login-box">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  className="form_input"
                  data-test="username"
                  id="user-name"
                  name="user-name"
                  placeholder="Username"
                  value={username}
                  onChange={handleUserChange}
                  autoCorrect="off"
                  autoCapitalize="none"
                />
                <input
                  type="password"
                  className="form_input"
                  data-test="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePassChange}
                  autoCorrect="off"
                  autoCapitalize="none"
                />
                <input
                  type="submit"
                  className="btn_action"
                  id="login-button"
                  value="LOGIN"
                />
                {error && (
                  <h3 data-test="error">
                    <button className="error-button" onClick={dismissError}>
                      <FontAwesomeIcon icon={faTimesCircle} size="2x" />
                    </button>
                    Epic sadface: {error}
                  </h3>
                )}
              </form>
            </div>
          </div>

          <div className="bot_column" />
        </div>
        <div className="login_credentials_wrap">
          <div className="login_credentials_wrap-inner">
            <div id="login_credentials" className="login_credentials">
              <h4>Accepted usernames are:</h4>
              standard_user
              <br />
              locked_out_user
              <br />
              problem_user
              <br />
              performance_glitch_user
              <br />
            </div>
            <div className="login_password">
              <h4>Password for all users:</h4>
              secret_sauce
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Login);
