import React from "react";
import DrawerMenu from "./DrawerMenu";
import CartButton from "./CartButton";
import "./HeaderContainer.css";

function HeaderContainer() {
  return (
    <div id="header_container" className="header_container">
      <div id="menu_button_container">
        <DrawerMenu />
      </div>
      <div className="header_label">
        <div className="app_logo" />
      </div>
      <div id="shopping_cart_container" className="shopping_cart_container">
        <CartButton />
      </div>
    </div>
  );
}

export default HeaderContainer;
