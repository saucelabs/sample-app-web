import React, {useState} from "react";
import {withRouter} from "react-router-dom";
import PropTypes from "prop-types";
import {ShoppingCart} from "../utils/shopping-cart";
import {isProblemUser} from "../utils/Credentials";
import "./InventoryListItem.css";
import {ROUTES} from "../utils/Constants";
import Button, {BUTTON_SIZES, BUTTON_TYPES} from "./Button";

const InventoryListItem = (props) => {
  const {desc, id, image_url, history, name, price} = props;
  const [swagId] = useState(id);
  const [imageUrl, setImageUrl] = useState(image_url);
  const [swagName] = useState(name);
  const [swagDescription] = useState(desc);
  const [swagPrice] = useState(price);
  const [itemInCart, setItemInCart] = useState(
    ShoppingCart.isItemInCart(id)
  );
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
    }

    ShoppingCart.removeItem(itemId);
    setItemInCart(false);
  };
  let linkId = swagId;
  if (isProblemUser()) {
    setImageUrl(`${imageUrl}WithGarbageOnItToBreakTheUrl`);
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
  const ButtonType = ({id, item, itemInCart}) => {
    const label = itemInCart ? "Remove" : "Add to cart";
    const onClick = itemInCart ? () => removeFromCart(id) : () => addToCart(id);
    const type = itemInCart ? BUTTON_TYPES.SECONDARY : BUTTON_TYPES.PRIMARY;
    const testId = `${label}-${item}`.replace(/\s+/g, "-").toLowerCase();

    return (
      <Button
        customClass="btn_inventory"
        label={label}
        onClick={onClick}
        size={BUTTON_SIZES.SMALL}
        testId={testId}
        type={type}
      />
    );
  };

  return (
    <div className="inventory_item">
      <div className="inventory_item_img">
        <a
          href="#"
          id={`item_${swagId}_img_link`}
          onClick={(evt) => {
            evt.preventDefault();
            history.push(itemLink);
          }}
        >
          <img
            alt={swagName}
            className="inventory_item_img"
            src={require(`../assets/img/${imageUrl}`).default}
          />
        </a>
      </div>
      <div className="inventory_item_description">
        <div className="inventory_item_label">
          <a
            href="#"
            id={`item_${swagId}_title_link`}
            onClick={(evt) => {
              evt.preventDefault();
              history.push(itemLink);
            }}
          >
            <div className="inventory_item_name">{swagName}</div>
          </a>
          <div className="inventory_item_desc">{swagDescription}</div>
        </div>
        <div className="pricebar">
          <div className="inventory_item_price">${swagPrice}</div>
          <ButtonType id={swagId} itemInCart={itemInCart} item={swagName}/>
        </div>
      </div>
    </div>
  );
}

InventoryListItem.propTypes = {
  /**
   * The description of the product
   */
  desc: PropTypes.string.isRequired,
  /**
   * The history
   */
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
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
};

export default withRouter(InventoryListItem);
