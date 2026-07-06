/**
 * withRouter — react-router-dom v6 compatibility shim.
 *
 * Wraps a component and injects `history`, `location`, and `match` props
 * using v6 hooks, preserving the v5 prop-based API that existing tests
 * rely on (e.g. `Component.WrappedComponent`).
 */
import React from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";

export function withRouter(WrappedComponent) {
  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || "Component";

  function ComponentWithRouterProp(props) {
    const navigate = useNavigate();
    const location = useLocation();
    const params = useParams();

    const history = {
      push: navigate,
      replace: (path, state) => navigate(path, { replace: true, state }),
      goBack: () => navigate(-1),
      location,
    };

    return (
      <WrappedComponent
        {...props}
        history={history}
        location={location}
        match={{ params }}
      />
    );
  }

  ComponentWithRouterProp.displayName = `withRouter(${displayName})`;
  // Expose inner component so enzyme tests can access it via .WrappedComponent
  ComponentWithRouterProp.WrappedComponent = WrappedComponent;

  return ComponentWithRouterProp;
}

export default withRouter;

