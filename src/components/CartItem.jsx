import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { ShoppingCart } from "../utils/shopping-cart";
import { isProblemUser } from "../utils/Credentials";
import "./CartItem.css";
import { ROUTES } from "../utils/Constants";
import Button, { BUTTON_SIZES, BUTTON_TYPES } from "./Button";

function CartItem(props) {
  const { item, history } = props;
  const [itemVisible, setItemVisible] = useState(true);

  if (item == null) {
    // Hide this if the item is invalid
    setItemVisible(false);
  }

  const removeFromCart = (itemId) => {
    ShoppingCart.removeItem(itemId);
    setItemVisible(false);
  };

  if (itemVisible) {
    let linkId = item.id;
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
            id={`item_${item.id}_title_link`}
            onClick={(evt) => {
              evt.preventDefault();
              history.push(itemLink);
            }}
          >
            <div className="inventory_item_name">{item.name}</div>
          </a>
          <div className="inventory_item_desc">{item.desc}</div>
          <div className="item_pricebar">
            <div className="inventory_item_price">{item.price}</div>
            <Button
              customClass="cart_button"
              label="Remove"
              testId={`remove-${item.name.replace(/\s+/g, "-").toLowerCase()}`}
              onClick={() => removeFromCart(item.id)}
              size={BUTTON_SIZES.SMALL}
              type={BUTTON_TYPES.SECONDARY}
            />
          </div>
        </div>
      </div>
    );
  }

  return <div className="removed_cart_item" />;
}

export default withRouter(CartItem);
