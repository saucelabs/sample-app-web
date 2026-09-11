import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import getImage from "../utils/imageLoader";
import "./DynamicCatalogItemCard.css";

const DynamicCatalogItemCard = forwardRef(
  ({ item, isLoaded = true, testId }, ref) => {
    const imgSrc = getImage(item.image_url);

    return (
      <div ref={ref} className="dynamic_catalog_card" data-test={testId}>
        {isLoaded ? (
          <>
            <img
              alt={item.name}
              className="dynamic_catalog_card_img"
              src={imgSrc}
              data-test={`${testId}-img`}
            />
            <div
              className="dynamic_catalog_card_name"
              data-test={`${testId}-name`}
            >
              {item.name}
            </div>
            <div
              className="dynamic_catalog_card_price"
              data-test={`${testId}-price`}
            >
              ${item.price}
            </div>
          </>
        ) : (
          <div
            className="dynamic_catalog_card_placeholder"
            data-test={`${testId}-placeholder`}
          >
            Loading…
          </div>
        )}
      </div>
    );
  },
);

DynamicCatalogItemCard.displayName = "DynamicCatalogItemCard";

DynamicCatalogItemCard.propTypes = {
  /**
   * The item to render
   */
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image_url: PropTypes.string.isRequired,
  }).isRequired,
  /**
   * Whether the item content is loaded, or a placeholder should show instead
   */
  isLoaded: PropTypes.bool,
  /**
   * The base data-test id for this card
   */
  testId: PropTypes.string.isRequired,
};

export default DynamicCatalogItemCard;
