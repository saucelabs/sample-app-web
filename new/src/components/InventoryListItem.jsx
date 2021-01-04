import { useState } from "react";
import { withRouter } from "react-router-dom";
import { ShoppingCart } from "../utils/shopping-cart";
import { isProblemUser } from "../utils/Credentials";
import "./InventoryListItem.css";
import { ROUTES } from "../utils/Constants";

function InventoryListItem(props) {
  const { history } = props;
  const [id] = useState(props.id);
  const [image_url, setImage_url] = useState(props.image_url);
  const [name] = useState(props.name);
  const [desc] = useState(props.desc);
  const [price] = useState(props.price);
  const [itemInCart, setItemInCart] = useState(
    ShoppingCart.isItemInCart(props.id)
  );

  if (isProblemUser()) {
    setImage_url(`${image_url}WithGarbageOnItToBreakTheUrl`);
  }

  const addToCart = (itemId) => {
    if (isProblemUser()) {
      // Bail out now, don't add to cart if the item ID is odd
      if (itemId % 2 === 1) {
        return;
      }
    }

    ShoppingCart.addItem(itemId);
    setItemInCart(true);
    console.log(ShoppingCart.getCartContents());
  };

  const removeFromCart = (itemId) => {
    if (isProblemUser()) {
      // Bail out now, don't remove from cart if the item ID is even
      if (itemId % 2 === 0) {
        return;
      }
    }

    ShoppingCart.removeItem(itemId);
    setItemInCart(false);
    console.log(ShoppingCart.getCartContents());
  };

  let linkId = id;
  if (isProblemUser()) {
    linkId += 1;
  }
  const itemLink = `${ROUTES.INVENTORY_LIST}?id=${linkId}`;
  let cartButton;

  if (itemInCart) {
    cartButton = (
      <button
        className="btn_secondary btn_inventory"
        onClick={() => removeFromCart(id)}
      >
        REMOVE
      </button>
    );
  } else {
    cartButton = (
      <button
        className="btn_primary btn_inventory"
        onClick={() => addToCart(id)}
      >
        ADD TO CART
      </button>
    );
  }

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
      <div className="inventory_item_label">
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
      </div>
      <div className="pricebar">
        <div className="inventory_item_price">${price}</div>
        {cartButton}
      </div>
    </div>
  );
}

export default withRouter(InventoryListItem);
