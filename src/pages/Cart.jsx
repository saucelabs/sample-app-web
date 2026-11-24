import React, { useEffect, useState } from "react";
import { withRouter } from "../utils/withRouter";
import { ROUTES } from "../utils/Constants";
import { ShoppingCart } from "../utils/shopping-cart";
import { InventoryData } from "../utils/InventoryData";
import CartItem from "../components/CartItem";
import FavoriteCartItem from "../components/FavoriteCartItem";
import SwagLabsFooter from "../components/Footer";
import HeaderContainer from "../components/HeaderContainer";
import Button, { BUTTON_SIZES, BUTTON_TYPES } from "../components/Button";
import { Favorites } from "../utils/favorites";
import "./Cart.css";
import { isVisualUser } from "../utils/Credentials";

const Cart = ({ history }) => {
  const [contents, setContents] = useState(ShoppingCart.getCartContents());
  const [favoriteIds, setFavoriteIds] = useState(Favorites.getFavoriteItems());
  // Strangely enough this is being called, but not covered in the report
  /* istanbul ignore next */
  const cartListener = {
    forceUpdate: () => setContents(ShoppingCart.getCartContents()),
  };
  // Strangely enough this is being called, but not covered in the report
  /* istanbul ignore next */
  const favoritesListener = {
    forceUpdate: () => setFavoriteIds(Favorites.getFavoriteItems()),
  };

  useEffect(() => {
    ShoppingCart.registerCartListener(cartListener);
    Favorites.registerFavoritesListener(favoritesListener);
  }, []);

  const moveToCart = (itemId) => {
    ShoppingCart.addItem(itemId);
  };

  const buttonClass = `checkout_button ${
    isVisualUser() ? "btn_visual_failure" : ""
  }`;

  return (
    <div id="page_wrapper" className="page_wrapper">
      <div id="contents_wrapper">
        <HeaderContainer secondaryTitle="Your Cart" />
        <div
          id="cart_contents_container"
          className="cart_contents_container"
          data-test="cart-contents-container"
          role="main"
        >
          <div>
            <div className="cart_list" data-test="cart-list">
              <div
                className="cart_quantity_label"
                data-test="cart-quantity-label"
              >
                QTY
              </div>
              <div className="cart_desc_label" data-test="cart-desc-label">
                Description
              </div>
              {contents.map((item, i) => (
                <CartItem key={i} item={InventoryData[item]} showButton />
              ))}
            </div>
            {favoriteIds.length > 0 && (
              <div className="favorites_list" data-test="favorites-list">
                <div
                  className="favorites_list_heading"
                  data-test="favorites-list-heading"
                >
                  Favorites
                </div>
                {favoriteIds.map((id) => (
                  <FavoriteCartItem
                    key={id}
                    item={InventoryData[id]}
                    onMoveToCart={moveToCart}
                  />
                ))}
              </div>
            )}
            <div className="cart_footer">
              <Button
                label="Continue Shopping"
                onClick={(evt) => {
                  evt.preventDefault();
                  history.push(ROUTES.INVENTORY);
                }}
                size={BUTTON_SIZES.MEDIUM}
                testId="continue-shopping"
                type={BUTTON_TYPES.BACK}
              />
              <Button
                label="Checkout"
                // `checkout_button` has no style function
                // but is there for backwards compatibility
                customClass={buttonClass}
                onClick={(evt) => {
                  evt.preventDefault();
                  history.push(ROUTES.CHECKOUT_STEP_ONE);
                }}
                size={BUTTON_SIZES.MEDIUM}
                testId="checkout"
                type={BUTTON_TYPES.ACTION}
              />
            </div>
          </div>
        </div>
      </div>
      <SwagLabsFooter />
    </div>
  );
};

export default withRouter(Cart);
