import React from "react";
import PropTypes from "prop-types";
import getImage from "../utils/imageLoader";
import FavoriteToggle from "./FavoriteToggle";
import Button, { BUTTON_SIZES, BUTTON_TYPES } from "./Button";
import "./FavoriteCartItem.css";

const FavoriteCartItem = ({ item = undefined, onMoveToCart }) => {
  if (!item) {
    return <div className="removed_cart_item" />;
  }

  const { id, name, desc, price, image_url } = item;
  const imgSrc = getImage(image_url);

  return (
    <div className="favorite_cart_item" data-test="favorite-cart-item">
      <div className="favorite_cart_item_img_container">
        <img
          alt={name}
          className="favorite_cart_item_img"
          src={imgSrc}
          data-test={`favorite-cart-item-${name
            .replace(/\s+/g, "-")
            .toLowerCase()}-img`}
        />
        <FavoriteToggle itemId={id} testId={`favorite-toggle-${id}`} />
      </div>
      <div className="cart_item_label">
        <div className="inventory_item_name" data-test="inventory-item-name">
          {name}
        </div>
        <div className="inventory_item_desc" data-test="inventory-item-desc">
          {desc}
        </div>
        <div className="item_pricebar">
          <div
            className="inventory_item_price"
            data-test="inventory-item-price"
          >
            ${price}
          </div>
          <Button
            customClass="cart_button"
            label="Move to cart"
            testId={`move-to-cart-${name.replace(/\s+/g, "-").toLowerCase()}`}
            onClick={() => onMoveToCart(id)}
            size={BUTTON_SIZES.SMALL}
            type={BUTTON_TYPES.PRIMARY}
          />
        </div>
      </div>
    </div>
  );
};

FavoriteCartItem.propTypes = {
  /**
   * The favorited item
   */
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image_url: PropTypes.string.isRequired,
  }),
  /**
   * Called with the item id when "Move to cart" is clicked
   */
  onMoveToCart: PropTypes.func.isRequired,
};

export default FavoriteCartItem;
