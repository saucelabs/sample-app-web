import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { isProblemUser } from "../utils/Credentials";
import { ROUTES } from "../utils/Constants";
import { ShoppingCart } from "../utils/shopping-cart";
import Button, { BUTTON_SIZES, BUTTON_TYPES } from "./Button";
import "./CartItem.css";

const CartItem = ({ item, history, showButton }) => {
  const [itemVisible, setItemVisible] = useState(true);

  if (!item) {
    // Hide this if the item is invalid
    setItemVisible(false);
  }

  const removeFromCart = (itemId) => {
    ShoppingCart.removeItem(itemId);
    setItemVisible(false);
  };

  if (itemVisible) {
    const { id, name, desc, price } = item;
    let linkId = id;

    if (isProblemUser()) {
      linkId += 1;
    }

    const itemLink = `${ROUTES.INVENTORY_LIST}?id=${linkId}`;

    return (
      <div className="cart_item">
        <div className="cart_quantity">1</div>
        <div className="cart_item_label">
          <a
            href="#"
            id={`item_${id}_title_link`}
            onClick={(evt) => {
              evt.preventDefault();
              history.push(itemLink);
            }}
          >
            <div className="inventory_item_name">{name}</div>
          </a>
          <div className="inventory_item_desc">{desc}</div>
          <div className="item_pricebar">
            <div className="inventory_item_price">${price}</div>
            {showButton && (
              <Button
                customClass="cart_button"
                label="Remove"
                testId={`remove-${name.replace(/\s+/g, "-").toLowerCase()}`}
                onClick={() => removeFromCart(id)}
                size={BUTTON_SIZES.SMALL}
                type={BUTTON_TYPES.SECONDARY}
              />
            )}
          </div>
        </div>
      </div>
    );
  }

  return <div className="removed_cart_item" />;
};
CartItem.propTypes = {
  /**
   * The item
   */
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }),
  /**
   * The history
   */
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  /**
   * Show the remove button
   */
  showButton: PropTypes.bool,
};
CartItem.defaultProps = {
  item: undefined,
  showButton: false,
};

export default withRouter(CartItem);
