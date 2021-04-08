import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { isProblemUser } from "../utils/Credentials";
import { ROUTES } from "../utils/Constants";
import { ShoppingCart } from "../utils/shopping-cart";
import { InventoryData } from "../utils/InventoryData";
import HeaderContainer from "../components/HeaderContainer";
import Button, { BUTTON_SIZES, BUTTON_TYPES } from "../components/Button";
import SwagLabsFooter from "../components/Footer";
import "./InventoryItem.css";

const InventoryItem = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { history } = props;
  // Get our queryparams now
  const queryParams = new URLSearchParams(window.location.search);
  let inventoryId = -1;
  let item;

  /* istanbul ignore else */
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
      image_url: "sl-404.jpg",
      price: "√-1",
    };
  }

  item.id = inventoryId;

  const [itemInCart, setItemInCart] = useState(
    ShoppingCart.isItemInCart(inventoryId)
  );
  /**
   * @TODO:
   * This can't be tested yet because enzyme currently doesn't support ReactJS17,
   * see https://github.com/enzymejs/enzyme/issues/2429.
   * This means we can't fully mount the component and test all rendered components
   * and functions
   */
  /* istanbul ignore next */
  const goBack = () => {
    history.push(ROUTES.INVENTORY);
  };
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
  /**
   * @TODO:
   * This can't be tested yet because enzyme currently doesn't support ReactJS17,
   * see https://github.com/enzymejs/enzyme/issues/2429.
   * This means we can't fully mount the component and test all rendered components
   * and functions
   */
  /* istanbul ignore next */
  const ButtonType = ({ id, item, itemInCart }) => {
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
    <div id="page_wrapper">
      <div id="contents_wrapper">
        <HeaderContainer
          customClass="inventory_details"
          secondaryLeftComponent={
            <Button
              customClass="inventory_details_back_button"
              label="Back to products"
              onClick={goBack}
              type={BUTTON_TYPES.BACK}
              testId="back-to-products"
            />
          }
        />
        <div id="inventory_item_container" className="inventory_item_container">
          <div className="inventory_details">
            <div className="inventory_details_container">
              <div className="inventory_details_img_container">
                <img
                  alt={item.name}
                  className="inventory_details_img"
                  src={require(`../assets/img/${item.image_url}`).default}
                />
              </div>
              <div className="inventory_details_desc_container">
                <div className="inventory_details_name large_size">
                  {item.name}
                </div>
                <div className="inventory_details_desc large_size">
                  {item.desc}
                </div>
                <div className="inventory_details_price">${item.price}</div>
                <ButtonType
                  id={item.id}
                  itemInCart={itemInCart}
                  item={item.name}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <SwagLabsFooter />
    </div>
  );
};

export default withRouter(InventoryItem);
