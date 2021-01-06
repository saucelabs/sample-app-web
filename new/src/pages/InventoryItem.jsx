import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { isProblemUser } from "../utils/Credentials";
import { ROUTES } from "../utils/Constants";
import MenuButton from "../components/HeaderMenuButton";
import CartButton from "../components/HeaderCartButton";
import { ShoppingCart } from "../utils/shopping-cart";
import { InventoryData } from "../utils/InventoryData";
import "./InventoryItem.css";

function InventoryItem(props) {
  const { history } = props;
  // Get our queryparams now
  const queryParams = new URLSearchParams(window.location.search);
  let inventoryId = -1;
  let item;
  if (queryParams.has("id")) {
    inventoryId = parseInt(queryParams.get("id"));
  }

  if (inventoryId >= 0 && InventoryData.length > inventoryId) {
    item = InventoryData[inventoryId];
  } else {
    item = {
      name: "ITEM NOT FOUND",
      desc: `We're sorry, but your call could not be completed as dialled.
          Please check your number, and try your call again.
          If you are in need of assistance, please dial 0 to be connected with an operator.
          This is a recording.
          4 T 1.`,
      image_url: "./img/sl-404.jpg",
      price: "√-1",
    };
  }
  item.id = inventoryId;

  const [itemInCart, setItemInCart] = useState(
    ShoppingCart.isItemInCart(inventoryId)
  );

  const goBack = () => {
    history.push(ROUTES.INVENTORY);
  };

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
  let cartButton;

  if (itemInCart) {
    cartButton = (
      <button
        className="btn_secondary btn_inventory"
        onClick={() => removeFromCart(item.id)}
      >
        REMOVE
      </button>
    );
  } else {
    cartButton = (
      <button
        className="btn_primary btn_inventory"
        onClick={() => addToCart(item.id)}
      >
        ADD TO CART
      </button>
    );
  }

  return (
    <div id="page_wrapper">
      <div id="menu_button_container">
        <MenuButton />
      </div>
      <div id="contents_wrapper">
        <div id="header_container" className="header_container">
          <div className="header_label">Swag Labs</div>
          <div id="shopping_cart_container" className="shopping_cart_container">
            <CartButton />
          </div>
        </div>

        <div id="inventory_item_container" className="inventory_item_container">
          <div className="inventory_details">
            <button className="inventory_details_back_button" onClick={goBack}>
              &lt;- Back
            </button>
            <div className="inventory_details_container">
              <img
                alt={item.name}
                className="inventory_details_img"
                src={require(`../assets/img/${item.image_url}`).default}
              />
              <div className="inventory_details_desc_container">
                <div className="inventory_details_name">{item.name}</div>
                <div className="inventory_details_desc">{item.desc}</div>
                <div className="inventory_details_price">${item.price}</div>
                {cartButton}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(InventoryItem);
