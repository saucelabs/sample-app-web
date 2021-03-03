import React from "react";
import { Redirect, Route } from "react-router-dom";
import PropTypes from "prop-types";
import { isLoggedIn } from "../utils/Credentials";
import { ROUTES } from "../utils/Constants";

/**
 * @TODO: This can't be tested yet because enzyme currently doesn't support ReactJS17,
 * see https://github.com/enzymejs/enzyme/issues/2429.
 * This means we can't fully mount the component and test all rendered components
 * and functions
 */
/* istanbul ignore next */
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: ROUTES.LOGIN, state: { from: props.location } }}
          />
        )
      }
    />
  );
};
/* istanbul ignore next */
PrivateRoute.propTypes = {
  /**
   * A react component
   */
  component: PropTypes.element,
};
/* istanbul ignore next */
PrivateRoute.defaultProps = {
  customClass: undefined,
  secondaryHeaderBot: undefined,
  secondaryLeftComponent: undefined,
  secondaryRightComponent: undefined,
  secondaryTitle: undefined,
};

export default PrivateRoute;
