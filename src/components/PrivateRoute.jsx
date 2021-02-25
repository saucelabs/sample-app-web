import React from "react";
import { Redirect, Route } from "react-router-dom";
import { isLoggedIn } from "../utils/Credentials";
import { ROUTES } from "../utils/Constants";

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

export default PrivateRoute;
