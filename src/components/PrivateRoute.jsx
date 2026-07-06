import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { isLoggedIn } from "../utils/Credentials";
import { ROUTES } from "../utils/Constants";

/**
 * PrivateRoute - renders `component` when `isLoggedIn()` is true, otherwise
 * redirects to LOGIN while preserving the attempted location in location.state
 */
const PrivateRoute = ({ component: Component }) => {
  const location = useLocation();
  return isLoggedIn() ? (
    <Component />
  ) : (
    <Navigate to={ROUTES.LOGIN} state={{ from: location }} replace />
  );
};

PrivateRoute.propTypes = {
  /**
   * A react component (element type)
   */
  component: PropTypes.oneOfType([
    PropTypes.elementType,
    PropTypes.func,
    PropTypes.object,
  ]),
};


export default PrivateRoute;
