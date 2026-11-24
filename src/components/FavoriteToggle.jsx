import React, { useState } from "react";
import PropTypes from "prop-types";
import { Favorites } from "../utils/favorites";
import "./FavoriteToggle.css";

const FavoriteToggle = ({ itemId, testId = undefined }) => {
  const [isFavorited, setIsFavorited] = useState(
    Favorites.isItemInFavorites(itemId),
  );

  const toggleFavorite = (evt) => {
    evt.preventDefault();
    evt.stopPropagation();

    if (isFavorited) {
      Favorites.removeItem(itemId);
    } else {
      Favorites.addItem(itemId);
    }

    setIsFavorited(!isFavorited);
  };

  return (
    <button
      type="button"
      className="favorite_toggle"
      onClick={toggleFavorite}
      aria-pressed={isFavorited}
      aria-label={isFavorited ? "Remove from favorites" : "Add to favorites"}
      {...(testId ? { "data-test": testId } : {})}
    >
      <svg
        className="favorite_toggle_icon"
        viewBox="0 0 24 24"
        fill={isFavorited ? "#f5a623" : "none"}
        stroke={isFavorited ? "#f5a623" : "#fff"}
        strokeWidth="2"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.27 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z" />
      </svg>
    </button>
  );
};

FavoriteToggle.propTypes = {
  /**
   * The id of the catalog item this toggle favorites
   */
  itemId: PropTypes.number.isRequired,
  /**
   * The test id
   */
  testId: PropTypes.string,
};

export default FavoriteToggle;
