import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { ShoppingCart } from "../utils/shopping-cart";
import { isErrorUser, isProblemUser } from "../utils/Credentials";
import "./InventoryListItem.css";
import { ROUTES } from "../utils/Constants";
import Button, { BUTTON_SIZES, BUTTON_TYPES } from "./Button";

const InventoryListItem = (props) => {
  const {
    isTextAlignRight,
    missAlignButton,
    desc,
    id,
    image_url,
    history,
    name,
    price,
  } = props;
  const [itemInCart, setItemInCart] = useState(ShoppingCart.isItemInCart(id));
  /**
   * @TODO:
   * This can't be tested yet because enzyme currently doesn't support ReactJS17,
   * see https://github.com/enzymejs/enzyme/issues/2429.
   * This means we can't fully mount the component and test all rendered components
   * and functions
   */
  /* istanbul ignore next */
  const addToCart = (itemId) => {
    if (isProblemUser()) {
      // Bail out now, don't add to cart if the item ID is odd
      if (itemId % 2 === 1) {
        return;
      }
    } else if (isErrorUser()) {
      // Throw an exception. This will be reported to Backtrace
      if (itemId % 2 === 1) {
        throw new Error("Failed to add item to the cart.");
      }
    }

    ShoppingCart.addItem(itemId);
    setItemInCart(true);
  };
  /**
   * @TODO:
   * This can't be tested yet because enzyme currently doesn't support ReactJS17,
   * see https://github.com/enzymejs/enzyme/issues/2429.
   * This means we can't fully mount the component and test all rendered components
   * and functions
   */
  /* istanbul ignore next */
  const removeFromCart = (itemId) => {
    if (isProblemUser()) {
      // Bail out now, don't remove from cart if the item ID is even
      if (itemId % 2 === 0) {
        return;
      }
    } else if (isErrorUser()) {
      // Throw an exception. This will be reported to Backtrace
      if (itemId % 2 === 0) {
        throw new Error("Failed to remove item from cart.");
      }
    }

    ShoppingCart.removeItem(itemId);
    setItemInCart(false);
  };
  let linkId = id;
  if (isProblemUser()) {
    linkId += 1;
  }
  const itemLink = `${ROUTES.INVENTORY_LIST}?id=${linkId}`;

  /**
   * @TODO:
   * This can't be tested yet because enzyme currently doesn't support ReactJS17,
   * see https://github.com/enzymejs/enzyme/issues/2429.
   * This means we can't fully mount the component and test all rendered components
   * and functions
   */
  /* istanbul ignore next */
  const ButtonType = ({ id, item, itemInCart, missAlignButton }) => {
    const label = itemInCart ? "Remove" : "Add to cart";
    const onClick = itemInCart ? () => removeFromCart(id) : () => addToCart(id);
    const type = itemInCart ? BUTTON_TYPES.SECONDARY : BUTTON_TYPES.PRIMARY;
    const testId = `${label}-${item}`.replace(/\s+/g, "-").toLowerCase();
    const buttonClass = `btn_inventory ${
      missAlignButton ? "btn_inventory_misaligned" : ""
    }`;
    return (
      <Button
        customClass={buttonClass}
        label={label}
        onClick={onClick}
        size={BUTTON_SIZES.SMALL}
        testId={testId}
        type={type}
      />
    );
  };
  const itemNameClass = `inventory_item_name ${
    isTextAlignRight ? "align_right" : ""
  }`;

  return (
    <div className="inventory_item">
      <div className="inventory_item_img">
        <a
          href="#"
          id={`item_${id}_img_link`}
          onClick={(evt) => {
            evt.preventDefault();
            history.push(itemLink);
          }}
        >
          <img
            alt={name}
            className="inventory_item_img"
            src={require(`../assets/img/${image_url}`).default}
          />
        </a>
      </div>
      <div className="inventory_item_description">
        <div className="inventory_item_label">
          <a
            href="#"
            id={`item_${id}_title_link`}
            onClick={(evt) => {
              evt.preventDefault();
              history.push(itemLink);
            }}
          >
            <div className={itemNameClass}>{name}</div>
          </a>
          <div className="inventory_item_desc">{desc}</div>
        </div>
        <div className="pricebar">
          <div className="inventory_item_price">${price}</div>
          <ButtonType
            id={id}
            itemInCart={itemInCart}
            item={name}
            missAlignButton={missAlignButton}
          />
        </div>
      </div>
    </div>
  );
};

InventoryListItem.propTypes = {
  /**
   * The description of the product
   */
  desc: PropTypes.string.isRequired,
  /**
   * The history
   */
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  /**
   * The id of the list item
   */
  id: PropTypes.number.isRequired,
  /**
   * The url of the image
   */
  image_url: PropTypes.string.isRequired,
  /**
   * The name of the product
   */
  name: PropTypes.string.isRequired,
  /**
   * The price of the product
   */
  price: PropTypes.number.isRequired,
  /**
   * Whether or not the item is aligned right
   */
  isTextAlignRight: PropTypes.bool.isRequired,
  /**
   * Whether or not the the button is misaligned
   */
  missAlignButton: PropTypes.bool.isRequired,
};

export default withRouter(InventoryListItem);
