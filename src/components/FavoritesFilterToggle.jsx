import React from "react";
import PropTypes from "prop-types";
import "./FavoritesFilterToggle.css";

export const FAVORITES_FILTER_VIEWS = {
  ALL: "all",
  FAVORITES: "favorites",
};

const FavoritesFilterToggle = ({
  activeView,
  onChange,
  testId = undefined,
}) => {
  return (
    <span
      className="favorites_filter_toggle"
      {...(testId ? { "data-test": testId } : {})}
    >
      <button
        type="button"
        className={`favorites_filter_toggle_option${
          activeView === FAVORITES_FILTER_VIEWS.ALL ? " active" : ""
        }`}
        aria-pressed={activeView === FAVORITES_FILTER_VIEWS.ALL}
        onClick={() => onChange(FAVORITES_FILTER_VIEWS.ALL)}
        data-test={testId ? `${testId}-all` : undefined}
      >
        All
      </button>
      <button
        type="button"
        className={`favorites_filter_toggle_option${
          activeView === FAVORITES_FILTER_VIEWS.FAVORITES ? " active" : ""
        }`}
        aria-pressed={activeView === FAVORITES_FILTER_VIEWS.FAVORITES}
        onClick={() => onChange(FAVORITES_FILTER_VIEWS.FAVORITES)}
        data-test={testId ? `${testId}-favorites` : undefined}
      >
        Favorites
      </button>
    </span>
  );
};

FavoritesFilterToggle.propTypes = {
  /**
   * The active view
   */
  activeView: PropTypes.oneOf(Object.values(FAVORITES_FILTER_VIEWS)).isRequired,
  /**
   * The on change handler, called with the newly selected view
   */
  onChange: PropTypes.func.isRequired,
  /**
   * The test id
   */
  testId: PropTypes.string,
};

export default FavoritesFilterToggle;
